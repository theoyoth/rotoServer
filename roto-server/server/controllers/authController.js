const pool = require('../db.js')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

dotenv.config()

module.exports.login = async (req, res) => {
  let conn
  const { nama, sandi, lokasi } = req.body
  try {
    if (nama && sandi && lokasi) {
      conn = await pool.getConnection()
      const data = await conn.query(`SELECT * FROM users WHERE nama='${nama}'`)
      const lok = await conn.query(
        `SELECT * FROM lokasi_server WHERE nama_lokasi='${lokasi}'`
      )

      if (data.length > 0 && lok.length > 0) {
        let user = data[0]
        let lokasi = lok[0]

        const validPassword = await bcrypt.compare(sandi, user.sandi)
        if (validPassword) {
          const token = jwt.sign(
            {
              id: user.id_user,
              nama: user.nama,
              role: user.role,
              lokasiid: lokasi.id_lokasi,
              lokasi: lokasi.nama_lokasi,
            },
            process.env.TOKEN_KEY,
            { expiresIn: '2h' }
          )
          res.cookie('aksestoken', token, {
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
            maxAge: 72000,
          })
          res.json({ token })
        } else {
          res.json({ errmsg: 'password tidak cocok' })
        }
      } else {
        return res.json({ errmsg: 'data yang dimasukkan tidak terdaftar' })
      }
      conn.release()
    } else {
      return res.json({ errmsg: 'masukan nama, sandi, dan lokasi' })
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.homepage = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()

    const tokenHeader = req.headers.authorization
    if (!tokenHeader) return res.redirect('/')
    let token = tokenHeader.split(' ')[1]
    if (!token) {
      return res
        .status(403)
        .send({
          message: 'Error',
          errors: 'No token provided',
        })
        .redirect('/')
    }
    const verified = jwt.verify(token, process.env.TOKEN_KEY)
    if (!verified) {
      res.json({ msg: 'not match' })
    } else {
      const data = await conn.query(
        `SELECT * FROM users WHERE id_user = ${verified.id}`
      )
      const lok = await conn.query(
        `SELECT * FROM lokasi_server WHERE id_lokasi = ${verified.lokasiid}`
      )
      const userdata = data[0]
      const lokasi = lok[0]
      res.status(200).json({
        user: {
          id: userdata.id_user,
          nama: userdata.nama,
          role: userdata.role,
          lokasi: lokasi.nama_lokasi,
          token: token,
        },
      })
      conn.release()
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports.logout = async (req, res) => {
  res.clearCookie('aksestoken')
  res.redirect('/')
}

module.exports.forgotPassword = async (req, res) => {
  let conn
  const { nama, email } = req.body
  try {
    if (nama && email) {
      conn = await pool.getConnection()
      const resp = await conn.query(`SELECT * FROM users WHERE nama='${nama}'`)
      if (resp) {
        const userdata = resp[0]
        const token = jwt.sign(
          {
            id: userdata.id_user,
            nama: userdata.nama,
          },
          process.env.TOKEN_KEY,
          { expiresIn: '10m' }
        )
        conn.query(
          `UPDATE users SET reset_sandi_token = '${token}' WHERE id_user='${userdata.id_user}'`
        )
        let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            user: 'yofakeakun@gmail.com',
            pass: process.env.MY_EMAIL_PASSWORD,
          },
        })
        const templateEmail = {
          from: 'yofakeakun@gmail.com',
          to: email,
          subject: 'Link reset password',
          html: `<p>silahkan klink link di bawah untuk reset password anda</p></br><a href="http://localhost:3000/server/resetpassword/${token}">RESET PASSWORD</a>`,
        }

        transporter
          .sendMail(templateEmail)
          .then((info) => console.log('Email terkirim'))
          .catch((err) => console.log('Terjadi kesalahan:' + err))
      } else {
        res.send({ errmsg: 'masukan data yang benar' })
      }
    }
  } catch (err) {
    throw err
  }
}

module.exports.resetPassword = async (req, res) => {
  let conn
  const { sandibaru, token } = req.body
  const hasSandiBaru = bcrypt.hashSync(sandibaru, salt)
  try {
    conn = await pool.getConnection()
    const resp = await conn.query(
      `SELECT * FROM users WHERE reset_sandi_token = '${token}'`
    )
    if (resp) {
      const user = resp[0]
      const data = await conn.query(
        `UPDATE users SET sandi='${hasSandiBaru}' WHERE id_user = '${user.id_user}'`
      )
      if (data) {
        return res.json({
          msg: 'sandi berhasil di ubah',
        })
      } else {
        return res.json({
          errmsg: 'sandi gagal di ubah',
        })
      }
    } else {
      return res.json({
        errmsg: 'sandi gagal di ubah',
      })
    }
  } catch (err) {
    throw err
  }
}

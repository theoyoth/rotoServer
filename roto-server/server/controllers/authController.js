const pool = require('../db.js')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')

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

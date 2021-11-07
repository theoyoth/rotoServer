const pool = require('../db.js')
const nuxt = require('nuxt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

dotenv.config()

let loadedUser

module.exports.login = async (req, res) => {
  let conn
  const { nama, sandi } = req.body

  try {
    if (nama && sandi) {
      conn = await pool.getConnection()
      const data = await conn.query(
        `SELECT * FROM users WHERE nama='${nama}' AND sandi='${sandi}'`
      )
      if (data.length > 0) {
        let user = data[0]

        loadedUser = user

        const token = jwt.sign(
          { id: user.id, nama: user.nama },
          process.env.TOKEN_KEY
        )
        res.cookie('aksestoken', token)
        res.json({ token })
      } else {
        return res.json({ msg: 'data tidak cocok' })
      }
    } else {
      res.json({ msg: 'masukan nama dan sandi' })
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.homepage = async (req, res) => {
  try {
    let conn
    // const authHeader = req.header.Authorization
    const token = req.cookies.aksestoken
    if (token) {
      // const verified = jwt.verify(
      //   authHeader.replace(/^Bearer\s/, ''),
      //   process.env.TOKEN_KEY
      // )
      const verified = jwt.verify(token, process.env.TOKEN_KEY)

      if (!verified) {
        res.json({ msg: 'not match' })
      } else {
        conn = await pool.getConnection()
        const data = await conn.query(
          `SELECT * FROM users WHERE id=${verified.id}`
        )
        const userdata = data[0]
        res.status(200).json({
          user: {
            id: userdata.id,
            nama: userdata.nama,
          },
        })
      }
    }
  } catch (err) {
    console.log(err)
  }
}

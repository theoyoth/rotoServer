const pool = require('../db.js')
const nuxt = require('nuxt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

dotenv.config()

module.exports.login = async (req, res) => {
  let conn
  try {
    const { nama, sandi } = req.body
    if (nama && sandi) {
      conn = await pool.getConnection()
      const data = await conn.query(
        `SELECT * FROM users WHERE nama='${nama}' AND sandi='${sandi}'`
      )
      if (data.length > 0) {
        // let user = data[0]
        // const token = jwt.sign(
        //   { id: user.id, nama: user.nama },
        //   process.env.TOKEN_KEY
        // )
        // res.header('auth-token', token).redirect('/homepage')
        return res
          .cookie('authtoken', token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 1000,
          })
          .json(data)
      } else {
        return res.redirect('/')
      }
    } else {
      res.send('no data, enter name and password')
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
    const token = req.cookies['authtoken']
    const verified = jwt.verify(token, process.env.TOKEN_KEY)

    if (!verified) return res.status(401).send('unAuthenticated')

    let conn = await pool.getConnection()

    const user = await conn.query(`SELECT * FROM users WHERE id=${verified.id}`)
    const { sandi, ...data } = await user[0]
    res.send(data)
  } catch (err) {
    res.status(401).send({
      message: 'unAuthenticated user',
    })
  } finally {
    if (conn) return conn.end()
  }
}

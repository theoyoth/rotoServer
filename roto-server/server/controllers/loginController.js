const pool = require('../db.js')
const nuxt = require('nuxt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

module.exports.login = async (req, res) => {
  let conn

  try {
    const nama = req.body.nama
    const sandi = req.body.sandi

    conn = await pool.getConnection()
    const data = await conn.query(`SELECT * FROM users WHERE nama='${nama}'`)

    if (nama !== data[0].nama || sandi !== data[0].sandi) {
      res.json({
        message: 'data yang dimasukkan tidak cocok',
      })
      res.redirect('/')
    } else {
      res.redirect('/homepage')
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.loginget = async (req, res) => {
  const token = req.headers['x-access-token']
  if (!token)
    return res
      .status(400)
      .json({ type: 'error', message: 'x-access-token header not found.' })
}

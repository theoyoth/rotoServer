const pool = require('../db.js')
const nuxt = require('nuxt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

module.exports.login = async (req, res) => {
    let conn
  try {
    const {nama,sandi} = req.body
    
    if(nama && sandi){
        conn = await pool.getConnection()
        const data = await conn.query(`SELECT * FROM users WHERE nama='${nama}' AND sandi='${sandi}'`)
        if(data.length > 0){
            let user = data[0]

            const token = jwt.sign({id:user.id,nama:user.nama},process.env.TOKEN_KEY)
            res.header('auth-token',token).json({token : token}).redirect('/homepage')
        }
        else{
            res.redirect("/")
        }
    }
    else{
        res.send("no data, enter name and password")
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

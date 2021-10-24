const jwt = require('jsonwebtoken')
const pool = require('./db.js')

module.exports.auth = async (req, res, next) => {
  try {
    const token = req.cookies['authtoken']
    const verified = jwt.verify(token, process.env.TOKEN_KEY)

    if (!verified) return res.status(401).send('unAuthenticated')

    let conn = await pool.getConnection()

    const user = await conn.query(`SELECT * FROM users WHERE id=${verified.id}`)
    const { sandi, ...data } = await user[0]
    res.send(data)
    // next()
  } catch (err) {
    res.status(401).send({
      message: 'unAuthenticated user',
    })
  }
}

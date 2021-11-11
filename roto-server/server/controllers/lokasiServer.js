const pool = require('../db.js')

module.exports.lokasiserver = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const response = await conn.query('SELECT * FROM lokasi_server')
    res.json({ lokasi: response })
  } catch (err) {
    console.log(err)
  }
}

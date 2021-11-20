const pool = require('../db.js')

module.exports.getAllUsers = async (req, res) => {
  let conn

  try {
    conn = await pool.getConnection()

    const rows = await conn.query('SELECT * FROM users')
    res.send(rows)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}

module.exports.cariuser = async (req, res) => {
  let conn

  try {
    const value = req.query.cari
    conn = await pool.getConnection()

    const rows = await conn.query(
      `SELECT nama,level FROM users WHERE nama LIKE '${value}%' OR level LIKE '${value}%'`
    )
    if (rows) {
      res.send(rows)
    } else {
      res.json({ msgerr: 'tidak ada data' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  }
}
module.exports.addUser = async (req, res) => {
  let conn
  try{
    const {namauser,roleuser,sandi} = req.body
    conn = await pool.getConnection()

    // const resp = await conn.query(`INSERT INTO users VALUES ('','${namauser}','${sandi}'),'${roleuser}'`)
  }
}
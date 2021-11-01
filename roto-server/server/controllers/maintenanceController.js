const pool = require('../db.js')


module.exports.users = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM users')

    res.send(rows)
  } catch (err) {
    throw err
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.lokasiserver = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM lokasi_server')

    res.send(rows)
  } catch (err) {
    throw err
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.inputmaintenance = async (req, res) => {
  let conn
  try {
    const nama = req.body.nama
    const tanggal = req.body.tanggal
    const suhu = req.body.suhu
    const kelembapan = req.body.kelembapan
    const ac = req.body.ac
    const ups = req.body.ups
    const baterai = req.body.baterai
    const network = req.body.network
    const server = req.body.server
    const keterangan = req.body.keterangan

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO maintenance VALUES ('','${nama}','${tanggal}','${suhu}','${kelembapan}','${ac}','${ups}','${baterai}','${network}','${server}','${keterangan}')`
    )
    res.redirect('/maintenance')
  } catch (err) {
    throw err
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.getInputMaintenance = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM maintenance')

    res.send(rows)
  } catch (err) {
    throw err
  } finally {
    if (conn) return conn.end()
  }
}
// module.exports.deleteMaintenance = async (req, res) => {
//   try {
//     const conn = await pool.getConnection()
//     await conn.query(`DELETE FROM maintenance WHERE id=${req.params.id}`)

//     res.redirect('/maintenance')
//   } catch (err) {
//     throw err
//   } finally {
//     // Close Connection
//     if (conn) conn.end()
//   }
// }



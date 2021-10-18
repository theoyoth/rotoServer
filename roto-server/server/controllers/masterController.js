const pool = require('../db.js')
// const conn = pool.getConnection()

// async function fetchConn() {
//   let conn = await pool.getConnection()
//   return conn
// }

module.exports.masterserver = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM master_Server')
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.inputmasterserver = async (req, res) => {
  let conn
  try {
    const produk = req.body.produk
    const merek = req.body.merek
    const model = req.body.model
    const processor = req.body.processor
    const memori = req.body.memori
    const internalStorage = req.body.internalStorage
    const networkController = req.body.networkController
    const storage = req.body.storage
    const sumberDayaListrik = req.body.sumberDayaListrik
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_server VALUES ('','${produk}','${merek}','${model}','${processor}','${memori}','${internalStorage}','${networkController}','${storage}','${sumberDayaListrik}','${tahun}','${garansi}')`
    )

    res.redirect('/master/server')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

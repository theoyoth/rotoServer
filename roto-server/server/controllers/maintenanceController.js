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
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.getAllMaintenance = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM maintenance')

    res.send(rows)
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.deleteMaintenance = async (req, res) => {
  const id = req.params.id
  try {
    const conn = await pool.getConnection()
    await conn.query(`DELETE FROM maintenance WHERE id=${req.params.id}`)

    res.redirect('/maintenance')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.updateMaintenance = async (req, res) => {
  let conn
  try {
    const id = req.body.id
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
    await conn.query(
      `UPDATE maintenance SET nama='${nama}',tanggal='${tanggal}',suhu='${suhu}',kelembapan='${kelembapan}',ac='${ac}',ups='${ups}',baterai='${baterai}',network='${network}',server='${server}',keterangan='${keterangan}' WHERE id=${id}`
    )

    res.redirect('/maintenance')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.carimaintenance = async (req, res) => {
  let conn
  try {
    const value = req.query.cari
    conn = await pool.getConnection()
    const maint = await conn.query(
      `SELECT * FROM maintenance WHERE nama LIKE '${value}%' OR suhu LIKE '${value}'`
    )
    res.send(maint)
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.getdatamaintenanceupdate = async (req, res) => {
  let conn
  try {
    const id = req.params.id

    conn = await pool.getConnection()
    const resp = await conn.query(`SELECT * FROM maintenance WHERE id=${id}`)
    res.send(resp)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}

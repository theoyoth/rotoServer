const pool = require('../../../db.js')

module.exports.deleteBarang = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    let tableName = 'ambil_barang'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'ambil_barang_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'ambil_barang_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'ambil_barang_tinta'
    }

    const data = await conn.query(
      `DELETE FROM ${tableName} WHERE id_ambil_barang=${id}`
    )
    if (data.affectedRows > 0) {
      res.status(200).send('success')
    } else {
      res.status(500).send('error')
    }

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

const pool = require('../../../db.js')

module.exports.deleteBarang = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(
        `DELETE FROM tambah_barang WHERE id_tambah_barang=${id}`
      )

      if (data.affectedRows > 0) {
        res.status(200).send('success')
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM tambah_barang_roto_2 WHERE id_tambah_barang=${id}`
      )

      if (data.affectedRows > 0) {
        res.status(200).send('success')
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM tambah_barang_roto_3 WHERE id_tambah_barang=${id}`
      )

      if (data.affectedRows > 0) {
        res.status(200).send('success')
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM tambah_barang_tinta WHERE id_tambah_barang=${id}`
      )

      if (data.affectedRows > 0) {
        res.status(200).send('success')
      } else {
        res.status(500).send('error')
      }
    }
    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

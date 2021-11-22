const pool = require('../../../db.js')

module.exports.deleteBarang = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const data = await conn.query(
        `DELETE FROM ambil_barang WHERE id_ambil_barang=${id}`
      )

      if (data.affectedRows > 0) {
        res.redirect('/inout/ambilbarang')
        // res.json({ msg: 'sudah di hapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'roto 2') {
      const data = await conn.query(
        `DELETE FROM ambil_barang_roto_2 WHERE id_ambil_barang=${id}`
      )

      if (data.affectedRows > 0) {
        res.redirect('/inout/ambilbarang')
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'roto 3') {
      const data = await conn.query(
        `DELETE FROM ambil_barang_roto_3 WHERE id_ambil_barang=${id}`
      )

      if (data.affectedRows > 0) {
        res.redirect('/inout/ambilbarang')
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'tinta') {
      const data = await conn.query(
        `DELETE FROM ambil_barang_tinta WHERE id_ambil_barang=${id}`
      )

      if (data.affectedRows > 0) {
        res.redirect('/inout/ambilbarang')
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

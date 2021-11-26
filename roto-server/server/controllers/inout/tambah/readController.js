const pool = require('../../../db.js')

module.exports.getTambahBarang = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query(
        `SELECT * FROM tambah_barang INNER JOIN users ON tambah_barang.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query(
        `SELECT * FROM tambah_barang_roto_2 INNER JOIN users ON tambah_barang_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query(
        `SELECT * FROM tambah_barang_roto_3 INNER JOIN users ON tambah_barang_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query(
        `SELECT * FROM tambah_barang_tinta INNER JOIN users ON tambah_barang_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.caridataTambahBarang = async (req, res) => {
  let conn
  try {
    const value = req.params.cari
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const barang = await conn.query(
        `SELECT * FROM tambah_barang WHERE nama_barang LIKE '${value}%'`
      )
      res.send(barang)
    } else if (lokasiServer == 'roto 2') {
      const barang = await conn.query(
        `SELECT * FROM tambah_barang_roto_2 WHERE merek LIKE '${value}%'`
      )
      res.send(barang)
    } else if (lokasiServer == 'roto 3') {
      const barang = await conn.query(
        `SELECT * FROM tambah_barang_roto_3 WHERE merek LIKE '${value}%'`
      )
      res.send(barang)
    } else if (lokasiServer == 'tinta') {
      const barang = await conn.query(
        `SELECT * FROM tambah_barang_tinta WHERE merek LIKE '${value}%'`
      )
      res.send(barang)
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
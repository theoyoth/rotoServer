const pool = require('../../../db.js')

module.exports.getGantiBarang = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT * FROM ganti_barang INNER JOIN users ON ganti_barang.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT * FROM ganti_barang_roto_2 INNER JOIN users ON ganti_barang_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT * FROM ganti_barang_roto_3 INNER JOIN users ON ganti_barang_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT * FROM ganti_barang_tinta INNER JOIN users ON ganti_barang_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
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

module.exports.caridataGantiBarang = async (req, res) => {
  let conn
  try {
    const value = req.params.cari
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const barang = await conn.query(
        `SELECT * FROM ganti_barang WHERE nama_barang_baru LIKE '${value}%'`
      )
      res.send(barang)
    } else if (lokasiServer == 'rotogravure 2') {
      const barang = await conn.query(
        `SELECT * FROM ganti_barang_roto_2 WHERE nama_barang_baru LIKE '${value}%'`
      )
      res.send(barang)
    } else if (lokasiServer == 'rotogravure 3') {
      const barang = await conn.query(
        `SELECT * FROM ganti_barang_roto_3 WHERE nama_barang_baru LIKE '${value}%'`
      )
      res.send(barang)
    } else if (lokasiServer == 'rotogravure tinta') {
      const barang = await conn.query(
        `SELECT * FROM ganti_barang_tinta WHERE nama_barang_baru LIKE '${value}%'`
      )
      res.send(barang)
    }

    conn.release()
  } catch (err) {
    console.log(err)
  }
}

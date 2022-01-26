const pool = require('../../../db.js')

module.exports.getTambahBarang = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT id_tambah_barang,tanggal,nama_penambah,nama_barang,kuantitas,kepentingan,penanggung_jawab,id_users,id_user FROM tambah_barang INNER JOIN users ON tambah_barang.id_users=users.id_user WHERE users.id_user=${idlogin} ORDER BY id_tambah_barang DESC`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT id_tambah_barang,tanggal,nama_penambah,nama_barang,kuantitas,kepentingan,penanggung_jawab,id_users,id_user FROM tambah_barang_roto_2 INNER JOIN users ON tambah_barang_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin} ORDER BY id_tambah_barang DESC`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT id_tambah_barang,tanggal,nama_penambah,nama_barang,kuantitas,kepentingan,penanggung_jawab,id_users,id_user FROM tambah_barang_roto_3 INNER JOIN users ON tambah_barang_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin} ORDER BY id_tambah_barang DESC`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT id_tambah_barang,tanggal,nama_penambah,nama_barang,kuantitas,kepentingan,penanggung_jawab,id_users,id_user FROM tambah_barang_tinta INNER JOIN users ON tambah_barang_tinta.id_users=users.id_user WHERE users.id_user=${idlogin} ORDER BY id_tambah_barang DESC`
      )
      res.status(200).send(rows)
    }
    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.caridataTambahBarang = async (req, res) => {
  let conn
  try {
    const value = req.params.cari
    const lokasiServer = req.params.lokasi
    const iduser = req.params.id
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const barang = await conn.query(
        `SELECT * FROM tambah_barang WHERE nama_barang LIKE '${value}%' AND id_users=${iduser}`
      )
      res.status(200).send(barang)
    } else if (lokasiServer == 'rotogravure 2') {
      const barang = await conn.query(
        `SELECT * FROM tambah_barang_roto_2 WHERE nama_barang LIKE '${value}%' AND id_users=${iduser}`
      )
      res.status(200).send(barang)
    } else if (lokasiServer == 'rotogravure 3') {
      const barang = await conn.query(
        `SELECT * FROM tambah_barang_roto_3 WHERE nama_barang LIKE '${value}%' AND id_users=${iduser}`
      )
      res.status(200).send(barang)
    } else if (lokasiServer == 'rotogravure tinta') {
      const barang = await conn.query(
        `SELECT * FROM tambah_barang_tinta WHERE nama_barang LIKE '${value}%' AND id_users=${iduser}`
      )
      res.status(200).send(barang)
    }

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

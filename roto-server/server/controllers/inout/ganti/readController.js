const pool = require('../../../db.js')

module.exports.getGantiBarang = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    let tableName = 'ganti_barang'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'ganti_barang_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'ganti_barang_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'ganti_barang_tinta'
    }

    const rows = await conn.query(
      `SELECT id_ganti_barang,tanggal,nama_pengganti,nama_barang_baru,nama_barang_lama,kuantitas,kepentingan,penanggung_jawab,keterangan,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin} ORDER BY id_ganti_barang DESC`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.caridataGantiBarang = async (req, res) => {
  let conn
  try {
    const value = req.params.cari
    const lokasiServer = req.params.lokasi
    const iduser = req.params.id
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const barang = await conn.query(
        `SELECT * FROM ganti_barang WHERE nama_barang_baru LIKE '${value}%' AND id_users=${iduser} OR nama_barang_lama LIKE '${value}%' AND id_users=${iduser}`
      )
      res.status(200).send(barang)
    } else if (lokasiServer == 'rotogravure 2') {
      const barang = await conn.query(
        `SELECT * FROM ganti_barang_roto_2 WHERE nama_barang_baru LIKE '${value}%' AND id_users=${iduser} OR nama_barang_lama LIKE '${value}%' AND id_users=${iduser}`
      )
      res.status(200).send(barang)
    } else if (lokasiServer == 'rotogravure 3') {
      const barang = await conn.query(
        `SELECT * FROM ganti_barang_roto_3 WHERE nama_barang_baru LIKE '${value}%' AND id_users=${iduser} OR nama_barang_lama LIKE '${value}%' AND id_users=${iduser}`
      )
      res.status(200).send(barang)
    } else if (lokasiServer == 'rotogravure tinta') {
      const barang = await conn.query(
        `SELECT * FROM ganti_barang_tinta WHERE nama_barang_baru LIKE '${value}%' AND id_users=${iduser} OR nama_barang_lama LIKE '${value}%' AND id_users=${iduser}`
      )
      res.status(200).send(barang)
    }

    conn.release()
  } catch (err) {
    console.log(err)
  }
}

module.exports.detailGantiBarang = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const id = req.params.id

    conn = await pool.getConnection()
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM ganti_barang WHERE id_ganti_barang = ${id}`
      )
      if (resp.length > 0) {
        res.status(200).send(resp)
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM ganti_barang_roto_2 WHERE id_ganti_barang = ${id}`
      )
      if (resp.length > 0) {
        res.status(200).send(resp)
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM ganti_barang_roto_3 WHERE id_ganti_barang = ${id}`
      )
      if (resp.length > 0) {
        res.status(200).send(resp)
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `SELECT * FROM ganti_barang_tinta WHERE id_ganti_barang = ${id}`
      )
      if (resp.length > 0) {
        res.status(200).send(resp)
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

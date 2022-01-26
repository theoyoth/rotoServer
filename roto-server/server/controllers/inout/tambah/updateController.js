const pool = require('../../../db.js')

module.exports.getDataBarang = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT * FROM tambah_barang WHERE id_tambah_barang=${id}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT * FROM tambah_barang_roto_2 WHERE id_tambah_barang=${id}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT * FROM tambah_barang_roto_3 WHERE id_tambah_barang=${id}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT * FROM tambah_barang_tinta WHERE id_tambah_barang=${id}`
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

module.exports.updateDataBarang = async (req, res) => {
  let conn
  try {
    const {
      iduser,
      lokasiServer,
      idtambahbarang,
      tanggal,
      namaPenambah,
      namaBarang,
      kuantitas,
      kepentingan,
      penanggungJawab,
    } = req.body

    conn = await pool.getConnection()
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE tambah_barang SET tanggal='${tanggal}', nama_penambah='${namaPenambah}', nama_barang='${namaBarang}', kuantitas='${kuantitas}', kepentingan='${kepentingan}',penanggung_jawab='${penanggungJawab}',id_users='${iduser}' WHERE id_tambah_barang = ${idtambahbarang}`
      )
      if (resp.affectedRows > 0) {
        res.status(200).send('success')
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE tambah_barang_roto_2 SET tanggal='${tanggal}', nama_penambah='${namaPenambah}', nama_barang='${namaBarang}', kuantitas='${kuantitas}', kepentingan='${kepentingan}',penanggung_jawab='${penanggungJawab}',id_users='${iduser}' WHERE id_tambah_barang = ${idtambahbarang}`
      )
      if (resp.affectedRows > 0) {
        res.status(200).send('success')
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE tambah_barang_roto_3 SET tanggal='${tanggal}', nama_penambah='${namaPenambah}', nama_barang='${namaBarang}', kuantitas='${kuantitas}', kepentingan='${kepentingan}',penanggung_jawab='${penanggungJawab}',id_users='${iduser}' WHERE id_tambah_barang = ${idtambahbarang}`
      )
      if (resp.affectedRows > 0) {
        res.status(200).send('success')
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE tambah_barang_tinta SET tanggal='${tanggal}', nama_penambah='${namaPenambah}', nama_barang='${namaBarang}', kuantitas='${kuantitas}', kepentingan='${kepentingan}',penanggung_jawab='${penanggungJawab}',id_users='${iduser}' WHERE id_tambah_barang = ${idtambahbarang}`
      )
      if (resp.affectedRows > 0) {
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

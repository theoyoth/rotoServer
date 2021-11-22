const pool = require('../../../db.js')

module.exports.getDataBarang = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query(
        `SELECT * FROM ambil_barang WHERE id_ambil_barang=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query(
        `SELECT * FROM ambil_barang_roto_2 WHERE id_ambil_barang=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query(
        `SELECT * FROM ambil_barang_roto_3 WHERE id_ambil_barang=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query(
        `SELECT * FROM ambil_barang_tinta WHERE id_ambil_barang=${id}`
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

module.exports.updateDataBarang = async (req, res) => {
  let conn
  try {
    const {
      iduser,
      lokasiServer,
      idambilbarang,
      tanggal,
      namaPengambil,
      namaBarang,
      kuantitas,
      kepentingan,
      penanggungJawab,
    } = req.body

    conn = await pool.getConnection()
    if (lokasiServer == 'roto 1') {
      const resp = await conn.query(
        `UPDATE ambil_barang SET tanggal='${tanggal}', nama_pengambil='${namaPengambil}', nama_barang='${namaBarang}', kuantitas='${kuantitas}', kepentingan='${kepentingan}',penanggung_jawab='${penanggungJawab}',id_users='${iduser}' WHERE id_ambil_barang = ${idambilbarang}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/inout/ambilbarang')
      } else {
        res.json({ errmsg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'roto 2') {
      const resp = await conn.query(
        `UPDATE ambil_barang_roto_2 SET tanggal='${tanggal}', nama_pengambil='${namaPengambil}', nama_barang='${namaBarang}', kuantitas='${kuantitas}', kepentingan='${kepentingan}',penanggung_jawab='${penanggungJawab}',id_users='${idusers}' WHERE id_ambil_barang = ${idambilbarang}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/inout/ambilbarang')
      } else {
        res.json({ errmsg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'roto 3') {
      const resp = await conn.query(
        `UPDATE ambil_barang_roto_3 SET tanggal='${tanggal}', nama_pengambil='${namaPengambil}', nama_barang='${namaBarang}', kuantitas='${kuantitas}', kepentingan='${kepentingan}',penanggung_jawab='${penanggungJawab}',id_users='${iduser}' WHERE id_ambil_barang = ${idambilbarang}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/inout/ambilbarang')
      } else {
        res.json({ errmsg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'tinta') {
      const resp = await conn.query(
        `UPDATE ambil_barang_tinta SET tanggal='${tanggal}', nama_pengambil='${namaPengambil}', nama_barang='${namaBarang}', kuantitas='${kuantitas}', kepentingan='${kepentingan}',penanggung_jawab='${penanggungJawab}',id_users='${iduser}' WHERE id_ambil_barang = ${idambilbarang}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/inout/ambilbarang')
      } else {
        res.json({ errmsg: 'data tidak diupdate' })
      }
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

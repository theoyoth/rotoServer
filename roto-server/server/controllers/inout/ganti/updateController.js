const pool = require('../../../db.js')

module.exports.getDataBarang = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT * FROM ganti_barang WHERE id_ganti_barang=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT * FROM ganti_barang_roto_2 WHERE id_ganti_barang=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT * FROM ganti_barang_roto_3 WHERE id_ganti_barang=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT * FROM ganti_barang_tinta WHERE id_ganti_barang=${id}`
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
      idgantibarang,
      tanggal,
      namaPengganti,
      namaBarangBaru,
      namaBarangLama,
      kuantitas,
      kepentingan,
      penanggungJawab,
      keterangan,
    } = req.body

    conn = await pool.getConnection()
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE ganti_barang SET tanggal='${tanggal}', nama_pengganti='${namaPengganti}', nama_barang_baru='${namaBarangBaru}',nama_barang_lama='${namaBarangLama}', kuantitas='${kuantitas}', kepentingan='${kepentingan}',penanggung_jawab='${penanggungJawab}',id_users='${iduser}' WHERE id_ganti_barang = ${idgantibarang}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/inout/gantibarang')
      } else {
        res.json({ errmsg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE ganti_barang_roto_2 SET tanggal='${tanggal}', nama_pengganti='${namaPengganti}', nama_barang_baru='${namaBarangBaru}',nama_barang_lama='${namaBarangLama}', kuantitas='${kuantitas}', kepentingan='${kepentingan}',penanggung_jawab='${penanggungJawab}',id_users='${iduser}' WHERE id_ganti_barang = ${idgantibarang}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/inout/gantibarang')
      } else {
        res.json({ errmsg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE ganti_barang_roto_3 SET tanggal='${tanggal}', nama_pengganti='${namaPengganti}', nama_barang_baru='${namaBarangBaru}',nama_barang_lama='${namaBarangLama}', kuantitas='${kuantitas}', kepentingan='${kepentingan}',penanggung_jawab='${penanggungJawab}',id_users='${iduser}' WHERE id_ganti_barang = ${idgantibarang}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/inout/gantibarang')
      } else {
        res.json({ errmsg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE ganti_barang_tinta SET tanggal='${tanggal}', nama_pengganti='${namaPengganti}', nama_barang_baru='${namaBarangBaru}',nama_barang_lama='${namaBarangLama}', kuantitas='${kuantitas}', kepentingan='${kepentingan}',penanggung_jawab='${penanggungJawab}',id_users='${iduser}' WHERE id_ganti_barang = ${idgantibarang}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/inout/gantibarang')
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

const pool = require('../../../db.js')

module.exports.getDataBarang = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
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
      `SELECT * FROM ${tableName} WHERE id_ganti_barang=${id}`
    )
    res.send(rows)

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

    let tableName = 'ganti_barang'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'ganti_barang_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'ganti_barang_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'ganti_barang_tinta'
    }

    const resp = await conn.query(
      `UPDATE ${tableName} SET tanggal='${tanggal}', nama_pengganti='${namaPengganti}', nama_barang_baru='${namaBarangBaru}',nama_barang_lama='${namaBarangLama}', kuantitas='${kuantitas}', kepentingan='${kepentingan}',penanggung_jawab='${penanggungJawab}',keterangan='${keterangan}',id_users='${iduser}' WHERE id_ganti_barang = ${idgantibarang}`
    )
    if (resp.affectedRows > 0) {
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

const pool = require('../../../db.js')

module.exports.getDataBarang = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    let tableName = 'tambah_barang'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'tambah_barang_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'tambah_barang_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'tambah_barang_tinta'
    }

    const rows = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_tambah_barang=${id}`
    )
    res.status(200).send(rows)

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

    let tableName = 'tambah_barang'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'tambah_barang_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'tambah_barang_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'tambah_barang_tinta'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET tanggal='${tanggal}', nama_penambah='${namaPenambah}', nama_barang='${namaBarang}', kuantitas='${kuantitas}', kepentingan='${kepentingan}',penanggung_jawab='${penanggungJawab}',id_users='${iduser}' WHERE id_tambah_barang = ${idtambahbarang}`
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

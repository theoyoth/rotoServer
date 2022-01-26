const pool = require('../../../db.js')

module.exports.addBarang = async (req, res) => {
  let conn
  try {
    const {
      iduser,
      namauser,
      lokasiServer,
      tanggal,
      namaBarang,
      kuantitas,
      kepentingan,
      penanggungJawab,
    } = req.body
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `INSERT INTO tambah_barang VALUES('','${tanggal}','${namauser}','${namaBarang}','${kuantitas}','${kepentingan}','${penanggungJawab}','${iduser}')`
      )
      if (resp.affectedRows > 0) {
        res.status(200).send('success')
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `INSERT INTO tambah_barang_roto_2 VALUES('','${tanggal}','${namauser}','${namaBarang}','${kuantitas}','${kepentingan}','${penanggungJawab}','${iduser}')`
      )
      if (resp.affectedRows > 0) {
        res.status(200).send('success')
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `INSERT INTO tambah_barang_roto_3 VALUES('','${tanggal}','${namauser}','${namaBarang}','${kuantitas}','${kepentingan}','${penanggungJawab}','${iduser}')`
      )
      if (resp.affectedRows > 0) {
        res.status(200).send('success')
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `INSERT INTO tambah_barang_tinta VALUES('','${tanggal}','${namauser}','${namaBarang}','${kuantitas}','${kepentingan}','${penanggungJawab}','${iduser}')`
      )
      if (resp.affectedRows > 0) {
        res.status(200).send('success')
      } else {
        res.status(500).send('error')
      }
    }
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

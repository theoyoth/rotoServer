const pool = require('../../../db.js')

module.exports.addBarang = async (req, res) => {
  let conn
  try {
    const {
      iduser,
      namauser,
      lokasiServer,
      tanggal,
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
        `INSERT INTO ganti_barang VALUES('','${tanggal}','${namauser}','${namaBarangBaru}','${namaBarangLama}','${kuantitas}','${kepentingan}','${penanggungJawab}','${keterangan}','${iduser}')`
      )
      if (resp.affectedRows > 0) {
        res.status(200).send('success')
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `INSERT INTO ganti_barang_roto_2 VALUES('','${tanggal}','${namauser}','${namaBarangBaru}','${namaBarangLama}','${kuantitas}','${kepentingan}','${penanggungJawab}','${keterangan}','${iduser}')`
      )
      if (resp.affectedRows > 0) {
        res.status(200).send('success')
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `INSERT INTO ganti_barang_roto_3 VALUES('','${tanggal}','${namauser}','${namaBarangBaru}','${namaBarangLama}','${kuantitas}','${kepentingan}','${penanggungJawab}','${keterangan}','${iduser}')`
      )
      if (resp.affectedRows > 0) {
        res.status(200).send('success')
      } else {
        res.status(500).send('error')
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `INSERT INTO ganti_barang_tinta VALUES('','${tanggal}','${namauser}','${namaBarangBaru}','${namaBarangLama}','${kuantitas}','${kepentingan}','${penanggungJawab}','${keterangan}','${iduser}')`
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

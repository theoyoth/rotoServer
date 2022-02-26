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

    let tableName = 'ganti_barang'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'ganti_barang_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'ganti_barang_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'ganti_barang_tinta'
    }

    const resp = await conn.query(
      `INSERT INTO ${tableName} VALUES('','${tanggal}','${namauser}','${namaBarangBaru}','${namaBarangLama}','${kuantitas}','${kepentingan}','${penanggungJawab}','${keterangan}','${iduser}')`
    )
    if (resp.affectedRows > 0) {
      res.status(200).send('success')
    } else {
      res.status(500).send('error')
    }
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

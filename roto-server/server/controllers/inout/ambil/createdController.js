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

    if (lokasiServer == 'roto 1') {
      const resp = await conn.query(
        `INSERT INTO ambil_barang VALUES('','${tanggal}','${namauser}','${namaBarang}','${kuantitas}','${kepentingan}','${penanggungJawab}','${iduser}')`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/inout/ambilbarang')
      } else {
        res.json({ errmsg: 'gagal disimpan' })
      }
    } else if (lokasiServer == 'roto 2') {
      const resp = await conn.query(
        `INSERT INTO ambil_barang_roto_2 VALUES('','${tanggal}','${namauser}','${namaBarang}','${kuantitas}','${kepentingan}','${penanggungJawab}','${iduser}')`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/inout/ambilbarang')
      } else {
        res.json({ errmsg: 'gagal disimpan' })
      }
    } else if (lokasiServer == 'roto 3') {
      const resp = await conn.query(
        `INSERT INTO ambil_barang_roto_3 VALUES('','${tanggal}','${namauser}','${namaBarang}','${kuantitas}','${kepentingan}','${penanggungJawab}','${iduser}')`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/inout/ambilbarang')
      } else {
        res.json({ errmsg: 'gagal disimpan' })
      }
    } else if (lokasiServer == 'tinta') {
      const resp = await conn.query(
        `INSERT INTO ambil_barang_tinta VALUES('','${tanggal}','${namauser}','${namaBarang}','${kuantitas}','${kepentingan}','${penanggungJawab}','${iduser}')`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/inout/ambilbarang')
      } else {
        res.json({ errmsg: 'gagal disimpan' })
      }
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

const pool = require('../db.js')
// const conn = pool.getConnection()

// async function fetchConn() {
//   let conn = await pool.getConnection()
//   return conn
// }

module.exports.masterserver = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM master_Server')
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.inputmasterserver = async (req, res) => {
  let conn
  try {
    const produk = req.body.produk
    const merek = req.body.merek
    const model = req.body.model
    const processor = req.body.processor
    const memori = req.body.memori
    const internalStorage = req.body.internalStorage
    const networkController = req.body.networkController
    const storage = req.body.storage
    const sumberDayaListrik = req.body.sumberDayaListrik
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_server VALUES ('','${produk}','${merek}','${model}','${processor}','${memori}','${internalStorage}','${networkController}','${storage}','${sumberDayaListrik}','${tahun}','${garansi}')`
    )

    res.redirect('/master/server')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.deletemaster = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const nama = req.params.nama
    conn = await pool.getConnection()
    const data = await conn.query(`DELETE FROM ${nama} WHERE id=${id}`)

    res.send(data)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterrak = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM master_rak')
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterrak = async (req, res) => {
  let conn
  try {
    const tipeRak = req.body.tipeRak
    const tipePintu = req.body.tipePintu
    const namaProduk = req.body.namaProduk
    const dimensi = req.body.dimensi
    const berat = req.body.berat
    const tahun = req.body.tahun

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_rak VALUES ('','${tipeRak}','${tipePintu}','${namaProduk}','${dimensi}','${berat}','${tahun}')`
    )

    res.redirect('/master/rak')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.masterups = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM master_ups')
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterups = async (req, res) => {
  let conn
  try {
    const model = req.body.model
    const upsCriticalLoad = req.body.upsCriticalLoad
    const upsCriticalTemperature = req.body.upsCriticalTemperature
    const upsCriticalCapacity = req.body.upsCriticalCapacity
    const nomorSerial = req.body.nomorSerial
    const namaSistem = req.body.namaSistem
    const manufaktur = req.body.manufaktur
    const peringkatTegangan = req.body.peringkatTegangan
    const peringkatFrekuensi = req.body.peringkatFrekuensi
    const peringkatTeganganBaterai = req.body.peringkatTeganganBaterai
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_ups VALUES ('','${model}','${upsCriticalLoad}','${upsCriticalTemperature}','${upsCriticalCapacity}','${nomorSerial}','${namaSistem}','${manufaktur}','${peringkatTegangan}','${peringkatFrekuensi}','${peringkatTeganganBaterai}','${tahun}','${garansi}')`
    )

    res.redirect('/master/ups')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterbaterai = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM master_baterai')
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterbaterai = async (req, res) => {
  let conn
  try {
    const accu = req.body.accu
    const kuantitas = req.body.kuantitas
    const tegangan = req.body.tegangan
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_baterai VALUES ('','${accu}','${kuantitas}','${tegangan}','${tahun}','${garansi}')`
    )

    res.redirect('/master/baterai')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterac = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM master_ac')
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterac = async (req, res) => {
  let conn
  try {
    const merek = req.body.merek
    const model = req.body.model
    const sumberDayaListrik = req.body.sumberDayaListrik
    const konsumsiDaya = req.body.konsumsiDaya
    const dimensi = req.body.dimensi
    const kapasitasPendingin = req.body.kapasitasPendingin
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_ac VALUES ('','${merek}','${model}','${sumberDayaListrik}','${konsumsiDaya}','${dimensi}','${kapasitasPendingin}','${tahun}','${garansi}')`
    )

    res.redirect('/master/ac')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastercctv = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM master_cctv')
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastercctv = async (req, res) => {
  let conn
  try {
    const merek = req.body.merek
    const model = req.body.model
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_cctv VALUES ('','${merek}','${model}','${garansi}')`
    )

    res.redirect('/master/cctv')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masternetwork = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM master_network')
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasternetwork = async (req, res) => {
  let conn
  try {
    const merek = req.body.merek
    const model = req.body.model
    const tipe = req.body.tipe
    const kuantitas = req.body.kuantitas
    const kanal = req.body.kanal
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_network VALUES ('','${merek}','${model}','${tipe}','${kuantitas}','${kanal}','${tahun}','${garansi}')`
    )

    res.redirect('/master/network')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterapar = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM master_apar')
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterapar = async (req, res) => {
  let conn
  try {
    const merek = req.body.merek
    const model = req.body.model
    const tipe = req.body.tipe
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_apar VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}')`
    )

    res.redirect('/master/apar')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastermonitor = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM master_monitor')
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastermonitor = async (req, res) => {
  let conn
  try {
    const merek = req.body.merek
    const model = req.body.model
    const tipe = req.body.tipe
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_monitor VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}')`
    )

    res.redirect('/master/monitor')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterkeyboard = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM master_keyboard')
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterkeyboard = async (req, res) => {
  let conn
  try {
    const merek = req.body.merek
    const model = req.body.model
    const tipe = req.body.tipe
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_keyboard VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}')`
    )

    res.redirect('/master/keyboard')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastermouse = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM master_mouse')
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastermouse = async (req, res) => {
  let conn
  try {
    const merek = req.body.merek
    const model = req.body.model
    const tipe = req.body.tipe
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_mouse VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}')`
    )

    res.redirect('/master/mouse')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masternas = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM master_nas')
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasternas = async (req, res) => {
  let conn
  try {
    const merek = req.body.merek
    const model = req.body.model
    const processor = req.body.processor
    const storage = req.body.storage
    const tipe = req.body.tipe
    const cpu = req.body.cpu
    const raid = req.body.raid
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_nas VALUES ('','${merek}','${model}','${processor}','${storage}','${tipe}','${cpu}','${raid}','${tahun}','${garansi}')`
    )

    res.redirect('/master/nas')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastergenset = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM master_genset')
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastergenset = async (req, res) => {
  let conn
  try {
    const merek = req.body.merek
    const model = req.body.model
    const tipe = req.body.tipe
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_genset VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}')`
    )

    res.redirect('/master/genset')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterservergetdata = async (req, res) => {
  const id = req.params.id
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query(`SELECT * FROM master_server WHERE id=${id}`)
    res.send(rows)
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterserverupdate = async (req, res) => {
  let conn
  try {
    const id = req.body.id
    const produk = req.body.produk
    const merek = req.body.merek
    const model = req.body.model
    const processor = req.body.processor
    const memori = req.body.memori
    const internalStorage = req.body.internalStorage
    const networkController = req.body.networkController
    const storage = req.body.storage
    const sumberDayaListrik = req.body.sumberDayaListrik
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    const result = await conn.query(
      `UPDATE master_server SET produk='${produk}', merek='${merek}', model='${model}', processor='${processor}', memori='${memori}',internal_storage='${internalStorage}', network_controller='${networkController}', storage='${storage}', sumber_daya_listrik='${sumberDayaListrik}', tahun='${tahun}', garansi='${garansi}' WHERE id = '${id}'`
    )

    res.redirect('/master/server')
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.caribarang = async (req, res) => {
  let conn

  try {
    const value = req.query.cari

    conn = await pool.getConnection()
    const barang = await conn.query(
      `SELECT * FROM master_server WHERE merek='${value}'`
    )
    res.send(barang)
  } catch (err) {
    console.log(err)
  }
}

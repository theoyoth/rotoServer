// ============== update barang master =============
const pool = require('../../db.js')
const { check, validationResult } = require('express-validator')

module.exports.masterservergetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query(
        `SELECT * FROM master_server WHERE id_server=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query(
        `SELECT * FROM master_server_roto_2 WHERE id_server=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query(
        `SELECT * FROM master_server_roto_3 WHERE id_server=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query(
        `SELECT * FROM master_server_tinta WHERE id_server=${id}`
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
module.exports.inputmasterserverupdate = async (req, res) => {
  let conn
  try {
    const {
      idproduk,
      produk,
      merek,
      model,
      processor,
      memori,
      internalStorage,
      networkController,
      storage,
      sumberDayaListrik,
      tahun,
      garansi,
      lokasiServer,
    } = req.body

    conn = await pool.getConnection()
    if (lokasiServer == 'roto 1') {
      const resp = await conn.query(
        `UPDATE master_server SET produk='${produk}', merek='${merek}', model='${model}', processor='${processor}', memori='${memori}',internal_storage='${internalStorage}', network_controller='${networkController}', storage='${storage}', sumber_daya_listrik='${sumberDayaListrik}', tahun='${tahun}', garansi='${garansi}' WHERE id_server = ${idproduk}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        res.json({ msg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'roto 2') {
      const resp = await conn.query(
        `UPDATE master_server_roto_2 SET produk='${produk}', merek='${merek}', model='${model}', processor='${processor}', memori='${memori}',internal_storage='${internalStorage}', network_controller='${networkController}', storage='${storage}', sumber_daya_listrik='${sumberDayaListrik}', tahun='${tahun}', garansi='${garansi}' WHERE id_server = ${idproduk}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        res.json({ msg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'roto 3') {
      const resp = await conn.query(
        `UPDATE master_server_roto_3 SET produk='${produk}', merek='${merek}', model='${model}', processor='${processor}', memori='${memori}',internal_storage='${internalStorage}', network_controller='${networkController}', storage='${storage}', sumber_daya_listrik='${sumberDayaListrik}', tahun='${tahun}', garansi='${garansi}' WHERE id_server = ${idproduk}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        res.json({ msg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'tinta') {
      const resp = await conn.query(
        `UPDATE master_server_tinta SET produk='${produk}', merek='${merek}', model='${model}', processor='${processor}', memori='${memori}',internal_storage='${internalStorage}', network_controller='${networkController}', storage='${storage}', sumber_daya_listrik='${sumberDayaListrik}', tahun='${tahun}', garansi='${garansi}' WHERE id_server = ${idproduk}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        res.json({ msg: 'data tidak diupdate' })
      }
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterrakgetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query(
        `SELECT * FROM master_rak WHERE id_rak=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto_2') {
      const rows = await conn.query(
        `SELECT * FROM master_rak_roto_2 WHERE id_rak=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto_3') {
      const rows = await conn.query(
        `SELECT * FROM master_rak_roto_3 WHERE id_rak=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query(
        `SELECT * FROM master_rak_tinta WHERE id_rak=${id}`
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
module.exports.inputmasterrakupdate = async (req, res) => {
  let conn
  try {
    const id = req.body.id
    const tipeRak = req.body.tipeRak
    const tipePintu = req.body.tipePintu
    const namaProduk = req.body.namaProduk
    const dimensi = req.body.dimensi
    const berat = req.body.berat
    const tahun = req.body.tahun

    conn = await pool.getConnection()
    await conn.query(
      `UPDATE master_rak SET tipe_rak='${tipeRak}', tipe_pintu='${tipePintu}', nama_produk='${namaProduk}', dimensi='${dimensi}', berat='${berat}',tahun='${tahun}' WHERE id=${id}`
    )
    res.redirect('/master/rak')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.masterupsgetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query(
        `SELECT * FROM master_ups WHERE id_ups=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query(
        `SELECT * FROM master_ups_roto_2 WHERE id_ups=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query(
        `SELECT * FROM master_ups_roto_3 WHERE id_ups=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query(
        `SELECT * FROM master_ups_tinta WHERE id_ups=${id}`
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
module.exports.inputmasterupsupdate = async (req, res) => {
  let conn
  try {
    const id = req.body.id
    const upsCriticalLoad = req.body.upsCriticalLoad
    const upsCriticalTemperature = req.body.upsCriticalTemperature
    const upsCriticalCapacity = req.body.upsCriticalCapacity
    const nomorSerial = req.body.nomorSerial
    const namaSistem = req.body.namaSistem
    const model = req.body.model
    const manufaktur = req.body.manufaktur
    const peringkatTegangan = req.body.peringkatTegangan
    const peringkatFrekuensi = req.body.peringkatFrekuensi
    const peringkatTeganganBaterai = req.body.peringkatTeganganBaterai
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    await conn.query(
      `UPDATE master_ups SET ups_critical_load='${upsCriticalLoad}', ups_critical_temperature='${upsCriticalTemperature}', ups_critical_capacity='${upsCriticalCapacity}', nomor_serial='${nomorSerial}', nama_sistem='${namaSistem}',model='${model}',manufaktur='${manufaktur}',peringkat_tegangan='${peringkatTegangan}',peringkat_frekuensi='${peringkatFrekuensi}',peringkat_tegangan_baterai='${peringkatTeganganBaterai}',tahun='${tahun}',garansi='${garansi}' WHERE id=${id}`
    )
    res.redirect('/master/ups')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterbateraigetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query(
        `SELECT * FROM master_baterai WHERE id_baterai=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto_2') {
      const rows = await conn.query(
        `SELECT * FROM master_baterai_roto_2 WHERE id_baterai=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto_3') {
      const rows = await conn.query(
        `SELECT * FROM master_baterai_roto_3 WHERE id_baterai=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query(
        `SELECT * FROM master_baterai_tinta WHERE id_baterai=${id}`
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
module.exports.inputmasterbateraiupdate = async (req, res) => {
  let conn
  try {
    const id = req.body.id
    const accu = req.body.accu
    const kuantitas = req.body.kuantitas
    const tegangan = req.body.tegangan
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    await conn.query(
      `UPDATE master_baterai SET accu='${accu}', kuantitas='${kuantitas}',voltage='${tegangan}',tahun='${tahun}',garansi='${garansi}' WHERE id=${id}`
    )
    res.redirect('/master/baterai')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masteracgetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query(`SELECT * FROM master_ac WHERE id_ac=${id}`)
      res.send(rows)
    } else if (lokasiServer == 'roto_2') {
      const rows = await conn.query(
        `SELECT * FROM master_ac_roto_2 WHERE id_ac=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto_3') {
      const rows = await conn.query(
        `SELECT * FROM master_ac_roto_3 WHERE id_ac=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query(
        `SELECT * FROM master_ac_tinta WHERE id_ac=${id}`
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
module.exports.inputmasteracupdate = async (req, res) => {
  let conn
  try {
    const id = req.body.id
    const merek = req.body.merek
    const model = req.body.model
    const sumberDayaListrik = req.body.sumberDayaListrik
    const dimensi = req.body.dimensi
    const konsumsiDayaListrik = req.body.konsumsiDayaListrik
    const kapasitasPendingin = req.body.kapasitasPendingin
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    await conn.query(
      `UPDATE master_ac SET merek='${merek}', model='${model}',sumber_daya_listrik='${sumberDayaListrik}',dimensi='${dimensi}',konsumsi_daya_listrik='${konsumsiDayaListrik}',kapasitas_pendingin='${kapasitasPendingin}',tahun='${tahun}',garansi='${garansi}' WHERE id=${id}`
    )
    res.redirect('/master/ac')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastercctvgetdata = async (req, res) => {
  const id = req.params.id
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query(`SELECT * FROM master_cctv WHERE id=${id}`)
    res.send(rows)
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastercctvupdate = async (req, res) => {
  let conn
  try {
    const id = req.body.id
    const merek = req.body.merek
    const model = req.body.model
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    await conn.query(
      `UPDATE master_cctv SET merek='${merek}', model='${model}',garansi='${garansi}' WHERE id=${id}`
    )
    res.redirect('/master/cctv')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masternetworkgetdata = async (req, res) => {
  const id = req.params.id
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query(`SELECT * FROM master_network WHERE id=${id}`)
    res.send(rows)
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasternetworkupdate = async (req, res) => {
  let conn
  try {
    const id = req.body.id
    const merek = req.body.merek
    const model = req.body.model
    const tipe = req.body.tipe
    const kuantitas = req.body.kuantitas
    const kanal = req.body.kanal
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    await conn.query(
      `UPDATE master_network SET merek='${merek}', model='${model}',tipe='${tipe}',kuantitas='${kuantitas}',kanal='${kanal}',tahun='${tahun}',garansi='${garansi}' WHERE id=${id}`
    )
    res.redirect('/master/network')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterapargetdata = async (req, res) => {
  const id = req.params.id
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query(`SELECT * FROM master_apar WHERE id=${id}`)
    res.send(rows)
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasteraparupdate = async (req, res) => {
  let conn
  try {
    const id = req.body.id
    const merek = req.body.merek
    const model = req.body.model
    const tipe = req.body.tipe
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    await conn.query(
      `UPDATE master_apar SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}' WHERE id=${id}`
    )
    res.redirect('/master/apar')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastermonitorgetdata = async (req, res) => {
  const id = req.params.id
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query(`SELECT * FROM master_monitor WHERE id=${id}`)
    res.send(rows)
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastermonitorupdate = async (req, res) => {
  let conn
  try {
    const id = req.body.id
    const merek = req.body.merek
    const model = req.body.model
    const tipe = req.body.tipe
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    await conn.query(
      `UPDATE master_monitor SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}' WHERE id=${id}`
    )
    res.redirect('/master/monitor')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterkeyboardgetdata = async (req, res) => {
  const id = req.params.id
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query(
      `SELECT * FROM master_keyboard WHERE id=${id}`
    )
    res.send(rows)
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterkeyboardupdate = async (req, res) => {
  let conn
  try {
    const id = req.body.id
    const merek = req.body.merek
    const model = req.body.model
    const tipe = req.body.tipe
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    await conn.query(
      `UPDATE master_keyboard SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}' WHERE id=${id}`
    )
    res.redirect('/master/keyboard')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastermousegetdata = async (req, res) => {
  const id = req.params.id
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query(`SELECT * FROM master_mouse WHERE id=${id}`)
    res.send(rows)
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastermouseupdate = async (req, res) => {
  let conn
  try {
    const id = req.body.id
    const merek = req.body.merek
    const model = req.body.model
    const tipe = req.body.tipe
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    await conn.query(
      `UPDATE master_mouse SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}' WHERE id=${id}`
    )
    res.redirect('/master/mouse')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masternasgetdata = async (req, res) => {
  const id = req.params.id
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query(`SELECT * FROM master_nas WHERE id=${id}`)
    res.send(rows)
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasternasupdate = async (req, res) => {
  let conn
  try {
    const {
      id,
      merek,
      model,
      tipe,
      storage,
      processor,
      cpu,
      raid,
      tahun,
      garansi,
    } = req.body

    conn = await pool.getConnection()
    await conn.query(
      `UPDATE master_nas SET merek='${merek}',model='${model}',processor='${processor}',storage='${storage}',tipe='${tipe}',cpu='${cpu}',raid='${raid}',tahun='${tahun}',garansi='${garansi}' WHERE id=${id}`
    )
    res.redirect('/master/nas')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastergensetgetdata = async (req, res) => {
  const id = req.params.id
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query(`SELECT * FROM master_genset WHERE id=${id}`)
    res.send(rows)
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastergensetupdate = async (req, res) => {
  let conn
  try {
    const id = req.body.id
    const merek = req.body.merek
    const model = req.body.model
    const tipe = req.body.tipe
    const tahun = req.body.tahun
    const garansi = req.body.garansi

    conn = await pool.getConnection()
    await conn.query(
      `UPDATE master_genset SET '${merek}','${model}','${tipe}','${tahun}','${garansi}' WHERE id=${id}`
    )
    res.redirect('/master/genset')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

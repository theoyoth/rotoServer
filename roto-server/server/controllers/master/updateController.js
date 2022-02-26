// ============== update barang master =============
const pool = require('../../db.js')
const { check, validationResult } = require('express-validator')

module.exports.masterservergetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    let tableName = 'master_server'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_server_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_server_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_server_tinta'
    }
    const rows = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_server=${id}`
    )
    res.send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send('error')
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
      tanggal,
      merek,
      model,
      processor,
      memori,
      satuanMemori,
      internalStorage,
      satuanInternalStorage,
      networkController,
      sumberDayaListrik,
      tahun,
      garansi,
      lokasiServer,
    } = req.body

    conn = await pool.getConnection()

    let tableName = 'master_server'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_server_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_server_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_server_tinta'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET tanggal='${tanggal}', produk='${produk}', merek='${merek}', model='${model}', processor='${processor}', memori='${memori}',satuan_memori='${satuanMemori}',internal_storage='${internalStorage}',satuan_internal_storage='${satuanInternalStorage}', network_controller='${networkController}', sumber_daya_listrik='${sumberDayaListrik}', tahun='${tahun}', garansi='${garansi}' WHERE id_server = ${idproduk}`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/server')
    } else {
      res.json({ msg: 'data tidak diupdate' })
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

    let tableName = 'master_rak'

    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_rak_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_rak_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_rak_tinta'
    }
    const rows = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_rak=${id}`
    )
    res.send(rows)

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
    const {
      iduser,
      idrak,
      lokasiServer,
      tipeRak,
      tipePintu,
      namaProduk,
      dimensi,
      berat,
      tahun,
    } = req.body

    conn = await pool.getConnection()

    let tableName = 'master_rak'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_rak_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_rak_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_rak_tinta'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET tipe_rak='${tipeRak}', tipe_pintu='${tipePintu}', nama_produk='${namaProduk}', dimensi='${dimensi}', berat='${berat}',tahun='${tahun}',id_users='${iduser}' WHERE id_rak=${idrak}`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/rak')
    } else {
      res.json({ errmsg: 'data gagal di update' })
    }

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

    let tableName = 'master_ups'

    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_ups_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_ups_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_ups_tinta'
    }
    const rows = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_ups=${id}`
    )
    res.send(rows)

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
    const {
      iduser,
      idups,
      lokasiServer,
      upsCriticalLoad,
      upsCriticalTemperature,
      upsCriticalCapacity,
      nomorSerial,
      namaSistem,
      model,
      manufaktur,
      peringkatTegangan,
      peringkatFrekuensi,
      peringkatTeganganBaterai,
      tahun,
      garansi,
    } = req.body

    conn = await pool.getConnection()

    let tableName = 'master_ups'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_ups_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_ups_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_ups_tinta'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET ups_critical_load='${upsCriticalLoad}', ups_critical_temperature='${upsCriticalTemperature}', ups_critical_capacity='${upsCriticalCapacity}', nomor_serial='${nomorSerial}', nama_sistem='${namaSistem}',model='${model}',manufaktur='${manufaktur}',peringkat_tegangan='${peringkatTegangan}',peringkat_frekuensi='${peringkatFrekuensi}',peringkat_tegangan_baterai='${peringkatTeganganBaterai}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_ups=${idups}`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/ups')
    } else {
      res.json({ errmsg: 'gagal diupdate' })
    }

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

    let tableName = 'master_baterai'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_baterai_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_baterai_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_baterai_tinta'
    }

    const rows = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_baterai=${id}`
    )
    res.send(rows)

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
    const {
      iduser,
      idbaterai,
      lokasiServer,
      accu,
      kuantitas,
      voltage,
      tahun,
      garansi,
    } = req.body

    conn = await pool.getConnection()

    let tableName = 'master_baterai'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_baterai_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_baterai_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_baterai_tinta'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET accu='${accu}', kuantitas='${kuantitas}',voltage='${voltage}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_baterai=${idbaterai}`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/baterai')
    } else {
      res.json({ errmsg: 'gagal diupdate' })
    }

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

    let tableName = 'master_ac'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_ac_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_ac_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_ac_tinta'
    }
    const rows = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_ac=${id}`
    )
    res.send(rows)

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
    const {
      iduser,
      idac,
      lokasiServer,
      merek,
      model,
      sumberDayaListrik,
      dimensi,
      konsumsiDayaListrik,
      kapasitasPendingin,
      tahun,
      garansi,
    } = req.body

    conn = await pool.getConnection()

    let tableName = 'master_ac'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_ac_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_ac_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_ac_tinta'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET merek='${merek}', model='${model}',sumber_daya_listrik='${sumberDayaListrik}',dimensi='${dimensi}',konsumsi_daya_listrik='${konsumsiDayaListrik}',kapasitas_pendingin='${kapasitasPendingin}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_ac=${idac}`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/ac')
    } else {
      res.json({ errmsg: 'gagal diupdate' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastercctvgetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    let tableName = 'master_cctv'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_cctv_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_cctv_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_cctv_tinta'
    }

    const resp = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_cctv=${id}`
    )
    res.send(resp)

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
    const { iduser, lokasiServer, idcctv, merek, model, garansi } = req.body

    conn = await pool.getConnection()

    let tableName = 'master_cctv'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_cctv_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_cctv_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_cctv_tinta'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET merek='${merek}', model='${model}',garansi='${garansi}',id_users='${iduser}' WHERE id_cctv=${idcctv}`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/cctv')
    } else {
      res.json({ errmsg: 'gagal diupdate' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masternetworkgetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi

    conn = await pool.getConnection()

    let tableName = 'master_network'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_network_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_network_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_network_tinta'
    }
    const resp = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_network=${id}`
    )
    res.send(resp)

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
    const {
      iduser,
      idnetwork,
      lokasiServer,
      merek,
      model,
      tipe,
      kuantitas,
      kanal,
      tahun,
      garansi,
    } = req.body

    conn = await pool.getConnection()

    let tableName = 'master_network'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_network_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_network_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_network_tinta'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET merek='${merek}', model='${model}',tipe='${tipe}',kuantitas='${kuantitas}',kanal='${kanal}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_network=${idnetwork}`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/network')
    } else {
      res.json({ errmsg: 'gagal diupdate' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterapargetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi

    conn = await pool.getConnection()

    let tableName = 'master_apar'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_apar_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_apar_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_apar_tinta'
    }
    const resp = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_apar=${id}`
    )
    res.send(resp)

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
    const { iduser, idapar, lokasiServer, merek, model, tipe, tahun, garansi } =
      req.body

    conn = await pool.getConnection()

    let tableName = 'master_apar'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_apar_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_apar_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_apar_tinta'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_apar=${idapar}`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/apar')
    } else {
      res.json({ errmsg: 'gagal diupdate' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastermonitorgetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi

    conn = await pool.getConnection()

    let tableName = 'master_monitor'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_monitor_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_monitor_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_monitor_tinta'
    }
    const resp = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_monitor=${id}`
    )
    res.send(resp)

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
    const {
      iduser,
      idmonitor,
      lokasiServer,
      merek,
      model,
      tipe,
      tahun,
      garansi,
    } = req.body

    conn = await pool.getConnection()

    let tableName = 'master_monitor'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_monitor_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_monitor_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_monitor_tinta'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_monitor=${idmonitor}`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/monitor')
    } else {
      res.json({ errmsg: 'gagal diupdate' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterkeyboardgetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi

    conn = await pool.getConnection()

    let tableName = 'master_keyboard'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_keyboard_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_keyboard_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_keyboard_tinta'
    }
    const resp = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_keyboard=${id}`
    )
    res.send(resp)

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
    const {
      iduser,
      idkeyboard,
      lokasiServer,
      merek,
      model,
      tipe,
      tahun,
      garansi,
    } = req.body

    conn = await pool.getConnection()

    let tableName = 'master_keyboard'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_keyboard_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_keyboard_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_keyboard_tinta'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_keyboard=${idkeyboard}`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/keyboard')
    } else {
      res.json({ errmsg: 'gagal diupdate' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastermousegetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi

    conn = await pool.getConnection()

    let tableName = 'master_mouse'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_mouse_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_mouse_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_mouse_tinta'
    }
    const resp = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_mouse=${id}`
    )
    res.send(resp)

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
    const {
      iduser,
      idmouse,
      lokasiServer,
      merek,
      model,
      tipe,
      tahun,
      garansi,
    } = req.body

    conn = await pool.getConnection()

    let tableName = 'master_mouse'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_mouse_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_mouse_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_mouse_tinta'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_mouse=${idmouse}`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/mouse')
    } else {
      res.json({ errmsg: 'gagal diupdate' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masternasgetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi

    conn = await pool.getConnection()

    let tableName = 'master_nas'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_nas_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_nas_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_nas_tinta'
    }
    const resp = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_nas=${id}`
    )
    res.send(resp)

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
      iduser,
      idnas,
      lokasiServer,
      merek,
      model,
      tipe,
      storage,
      satuanStorage,
      processor,
      cpu,
      raid,
      tahun,
      garansi,
    } = req.body

    conn = await pool.getConnection()

    let tableName = 'master_nas'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_nas_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_nas_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_nas_tinta'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET merek='${merek}',model='${model}',processor='${processor}',storage='${storage}',satuan_storage='${satuanStorage}',tipe='${tipe}',cpu='${cpu}',raid='${raid}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_nas=${idnas}`
    )

    if (resp.affectedRows > 0) {
      res.redirect('/master/nas')
    } else {
      res.json({ errmsg: 'gagal diupdate' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastergensetgetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi

    conn = await pool.getConnection()

    let tableName = 'master_genset'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_genset_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_genset_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_genset_tinta'
    }
    const resp = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_genset=${id}`
    )
    res.send(resp)

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
    const {
      iduser,
      idgenset,
      lokasiServer,
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

    let tableName = 'master_genset'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_genset_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_genset_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_genset_tinta'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET merek='${merek}',model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_genset=${idgenset}`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/genset')
    } else {
      res.json({ errmsg: 'gagal diupdate' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

// ============== update barang master =============
const pool = require('../../db.js')
const { check, validationResult } = require('express-validator')

module.exports.masterservergetdata = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT * FROM master_server WHERE id_server=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT * FROM master_server_roto_2 WHERE id_server=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT * FROM master_server_roto_3 WHERE id_server=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
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
      sumberDayaListrik,
      tahun,
      garansi,
      lokasiServer,
    } = req.body

    conn = await pool.getConnection()
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE master_server SET produk='${produk}', merek='${merek}', model='${model}', processor='${processor}', memori='${memori}',internal_storage='${internalStorage}', network_controller='${networkController}', sumber_daya_listrik='${sumberDayaListrik}', tahun='${tahun}', garansi='${garansi}' WHERE id_server = ${idproduk}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        res.json({ msg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE master_server_roto_2 SET produk='${produk}', merek='${merek}', model='${model}', processor='${processor}', memori='${memori}',internal_storage='${internalStorage}', network_controller='${networkController}', sumber_daya_listrik='${sumberDayaListrik}', tahun='${tahun}', garansi='${garansi}' WHERE id_server = ${idproduk}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        res.json({ msg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE master_server_roto_3 SET produk='${produk}', merek='${merek}', model='${model}', processor='${processor}', memori='${memori}',internal_storage='${internalStorage}', network_controller='${networkController}', sumber_daya_listrik='${sumberDayaListrik}', tahun='${tahun}', garansi='${garansi}' WHERE id_server = ${idproduk}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        res.json({ msg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE master_server_tinta SET produk='${produk}', merek='${merek}', model='${model}', processor='${processor}', memori='${memori}',internal_storage='${internalStorage}', network_controller='${networkController}', sumber_daya_listrik='${sumberDayaListrik}', tahun='${tahun}', garansi='${garansi}' WHERE id_server = ${idproduk}`
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

    if (lokasiServer == 'rotogravure 1') {
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
    } else if (lokasiServer == 'rotogravure tinta') {
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE master_rak SET tipe_rak='${tipeRak}', tipe_pintu='${tipePintu}', nama_produk='${namaProduk}', dimensi='${dimensi}', berat='${berat}',tahun='${tahun}',id_users='${iduser}' WHERE id_rak=${idrak}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/rak')
      } else {
        res.json({ errmsg: 'data gagal di update' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE master_rak_roto_2 SET tipe_rak='${tipeRak}', tipe_pintu='${tipePintu}', nama_produk='${namaProduk}', dimensi='${dimensi}', berat='${berat}',tahun='${tahun}',id_users='${iduser}' WHERE id_rak=${idrak}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/rak')
      } else {
        res.json({ errmsg: 'data gagal di update' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE master_rak_roto_3 SET tipe_rak='${tipeRak}', tipe_pintu='${tipePintu}', nama_produk='${namaProduk}', dimensi='${dimensi}', berat='${berat}',tahun='${tahun}',id_users='${iduser}' WHERE id_rak=${idrak}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/rak')
      } else {
        res.json({ errmsg: 'data gagal di update' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE master_rak_tinta SET tipe_rak='${tipeRak}', tipe_pintu='${tipePintu}', nama_produk='${namaProduk}', dimensi='${dimensi}', berat='${berat}',tahun='${tahun}',id_users='${iduser}' WHERE id_rak=${idrak}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/rak')
      } else {
        res.json({ errmsg: 'data gagal di update' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT * FROM master_ups WHERE id_ups=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT * FROM master_ups_roto_2 WHERE id_ups=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT * FROM master_ups_roto_3 WHERE id_ups=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE master_ups SET ups_critical_load='${upsCriticalLoad}', ups_critical_temperature='${upsCriticalTemperature}', ups_critical_capacity='${upsCriticalCapacity}', nomor_serial='${nomorSerial}', nama_sistem='${namaSistem}',model='${model}',manufaktur='${manufaktur}',peringkat_tegangan='${peringkatTegangan}',peringkat_frekuensi='${peringkatFrekuensi}',peringkat_tegangan_baterai='${peringkatTeganganBaterai}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_ups=${idups}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/ups')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE master_ups_roto_2 SET ups_critical_load='${upsCriticalLoad}', ups_critical_temperature='${upsCriticalTemperature}', ups_critical_capacity='${upsCriticalCapacity}', nomor_serial='${nomorSerial}', nama_sistem='${namaSistem}',model='${model}',manufaktur='${manufaktur}',peringkat_tegangan='${peringkatTegangan}',peringkat_frekuensi='${peringkatFrekuensi}',peringkat_tegangan_baterai='${peringkatTeganganBaterai}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_ups=${idups}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/ups')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE master_ups_roto_3 SET ups_critical_load='${upsCriticalLoad}', ups_critical_temperature='${upsCriticalTemperature}', ups_critical_capacity='${upsCriticalCapacity}', nomor_serial='${nomorSerial}', nama_sistem='${namaSistem}',model='${model}',manufaktur='${manufaktur}',peringkat_tegangan='${peringkatTegangan}',peringkat_frekuensi='${peringkatFrekuensi}',peringkat_tegangan_baterai='${peringkatTeganganBaterai}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_ups=${idups}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/ups')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE master_ups_tinta SET ups_critical_load='${upsCriticalLoad}', ups_critical_temperature='${upsCriticalTemperature}', ups_critical_capacity='${upsCriticalCapacity}', nomor_serial='${nomorSerial}', nama_sistem='${namaSistem}',model='${model}',manufaktur='${manufaktur}',peringkat_tegangan='${peringkatTegangan}',peringkat_frekuensi='${peringkatFrekuensi}',peringkat_tegangan_baterai='${peringkatTeganganBaterai}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_ups=${idups}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/ups')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
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
    } else if (lokasiServer == 'rotogravure tinta') {
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE master_baterai SET accu='${accu}', kuantitas='${kuantitas}',voltage='${voltage}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_baterai=${idbaterai}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/baterai')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE master_baterai_roto_2 SET accu='${accu}', kuantitas='${kuantitas}',voltage='${voltage}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_baterai=${idbaterai}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/baterai')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE master_baterai_roto_3 SET accu='${accu}', kuantitas='${kuantitas}',voltage='${voltage}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_baterai=${idbaterai}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/baterai')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE master_baterai_tinta SET accu='${accu}', kuantitas='${kuantitas}',voltage='${voltage}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_baterai=${idbaterai}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/baterai')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
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
    } else if (lokasiServer == 'rotogravure tinta') {
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE master_ac SET merek='${merek}', model='${model}',sumber_daya_listrik='${sumberDayaListrik}',dimensi='${dimensi}',konsumsi_daya_listrik='${konsumsiDayaListrik}',kapasitas_pendingin='${kapasitasPendingin}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_ac=${idac}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/ac')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE master_ac_roto_2 SET merek='${merek}', model='${model}',sumber_daya_listrik='${sumberDayaListrik}',dimensi='${dimensi}',konsumsi_daya_listrik='${konsumsiDayaListrik}',kapasitas_pendingin='${kapasitasPendingin}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_ac=${idac}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/ac')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE master_ac_roto_3 SET merek='${merek}', model='${model}',sumber_daya_listrik='${sumberDayaListrik}',dimensi='${dimensi}',konsumsi_daya_listrik='${konsumsiDayaListrik}',kapasitas_pendingin='${kapasitasPendingin}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_ac=${idac}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/ac')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE master_ac_tinta SET merek='${merek}', model='${model}',sumber_daya_listrik='${sumberDayaListrik}',dimensi='${dimensi}',konsumsi_daya_listrik='${konsumsiDayaListrik}',kapasitas_pendingin='${kapasitasPendingin}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_ac=${idac}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/ac')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM master_cctv WHERE id_cctv=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM master_cctv_roto_2 WHERE id_cctv=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM master_cctv_roto_3 WHERE id_cctv=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `SELECT * FROM master_cctv_tinta WHERE id_cctv=${id}`
      )
      res.send(resp)
    }

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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE master_cctv SET merek='${merek}', model='${model}',garansi='${garansi}',id_users='${iduser}' WHERE id_cctv=${idcctv}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/cctv')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE master_cctv_roto_2 SET merek='${merek}', model='${model}',garansi='${garansi}',id_users='${iduser}' WHERE id_cctv=${idcctv}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/cctv')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE master_cctv_roto_3 SET merek='${merek}', model='${model}',garansi='${garansi}',id_users='${iduser}' WHERE id_cctv=${idcctv}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/cctv')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE master_cctv_tinta SET merek='${merek}', model='${model}',garansi='${garansi}',id_users='${iduser}' WHERE id_cctv=${idcctv}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/cctv')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM master_network WHERE id_network=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM master_network_roto_2 WHERE id_network=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM master_network_roto_3 WHERE id_network=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `SELECT * FROM master_network_tinta WHERE id_network=${id}`
      )
      res.send(resp)
    }
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE master_network SET merek='${merek}', model='${model}',tipe='${tipe}',kuantitas='${kuantitas}',kanal='${kanal}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_network=${idnetwork}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/network')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE master_network_roto_2 SET merek='${merek}', model='${model}',tipe='${tipe}',kuantitas='${kuantitas}',kanal='${kanal}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_network=${idnetwork}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/network')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE master_network_roto_3 SET merek='${merek}', model='${model}',tipe='${tipe}',kuantitas='${kuantitas}',kanal='${kanal}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_network=${idnetwork}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/network')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE master_network_tinta SET merek='${merek}', model='${model}',tipe='${tipe}',kuantitas='${kuantitas}',kanal='${kanal}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_network=${idnetwork}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/network')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM master_apar WHERE id_apar=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM master_apar_roto_2 WHERE id_apar=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM master_apar_roto_3 WHERE id_apar=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `SELECT * FROM master_apar_tinta WHERE id_apar=${id}`
      )
      res.send(resp)
    }

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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE master_apar SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_apar=${idapar}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/apar')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE master_apar_roto_2 SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_apar=${idapar}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/apar')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE master_apar_roto_3 SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_apar=${idapar}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/apar')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE master_apar_tinta SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_apar=${idapar}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/apar')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM master_monitor WHERE id_monitor=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM master_monitor_roto_2 WHERE id_monitor=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM master_monitor_roto_3 WHERE id_monitor=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `SELECT * FROM master_monitor_tinta WHERE id_monitor=${id}`
      )
      res.send(resp)
    }
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE master_monitor SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_monitor=${idmonitor}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/monitor')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE master_monitor_roto_2 SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_monitor=${idmonitor}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/monitor')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE master_monitor_roto_3 SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_monitor=${idmonitor}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/monitor')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE master_monitor_tinta SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_monitor=${idmonitor}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/monitor')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM master_keyboard WHERE id_keyboard=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM master_keyboard_roto_2 WHERE id_keyboard=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM master_keyboard_roto_3 WHERE id_keyboard=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `SELECT * FROM master_keyboard_tinta WHERE id_keyboard=${id}`
      )
      res.send(resp)
    }
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE master_keyboard SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_keyboard=${idkeyboard}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/keyboard')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE master_keyboard_roto_2 SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_keyboard=${idkeyboard}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/keyboard')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE master_keyboard_roto_3 SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_keyboard=${idkeyboard}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/keyboard')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE master_keyboard_tinta SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_keyboard=${idkeyboard}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/keyboard')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM master_mouse WHERE id_mouse=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM master_mouse_roto_2 WHERE id_mouse=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM master_mouse_roto_3 WHERE id_mouse=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `SELECT * FROM master_mouse_tinta WHERE id_mouse=${id}`
      )
      res.send(resp)
    }
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE master_mouse SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_mouse=${idmouse}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/mouse')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE master_mouse_roto_2 SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_mouse=${idmouse}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/mouse')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE master_mouse_roto_3 SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_mouse=${idmouse}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/mouse')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE master_mouse_tinta SET merek='${merek}', model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_mouse=${idmouse}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/mouse')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM master_nas WHERE id_nas=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM master_nas_roto_2 WHERE id_nas=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM master_nas_roto_3 WHERE id_nas=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `SELECT * FROM master_nas_tinta WHERE id_nas=${id}`
      )
      res.send(resp)
    }

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
      processor,
      cpu,
      raid,
      tahun,
      garansi,
    } = req.body

    conn = await pool.getConnection()
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE master_nas SET merek='${merek}',model='${model}',processor='${processor}',storage='${storage}',tipe='${tipe}',cpu='${cpu}',raid='${raid}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_nas=${idnas}`
      )

      if (resp.affectedRows > 0) {
        res.redirect('/master/nas')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE master_nas_roto_2 SET merek='${merek}',model='${model}',processor='${processor}',storage='${storage}',tipe='${tipe}',cpu='${cpu}',raid='${raid}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_nas=${idnas}`
      )

      if (resp.affectedRows > 0) {
        res.redirect('/master/nas')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE master_nas_roto_3 SET merek='${merek}',model='${model}',processor='${processor}',storage='${storage}',tipe='${tipe}',cpu='${cpu}',raid='${raid}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_nas=${idnas}`
      )

      if (resp.affectedRows > 0) {
        res.redirect('/master/nas')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE master_nas_tinta SET merek='${merek}',model='${model}',processor='${processor}',storage='${storage}',tipe='${tipe}',cpu='${cpu}',raid='${raid}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_nas=${idnas}`
      )

      if (resp.affectedRows > 0) {
        res.redirect('/master/nas')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM master_genset WHERE id_genset=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM master_genset_roto_2 WHERE id_genset=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM master_genset_roto_3 WHERE id_genset=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `SELECT * FROM master_genset_tinta WHERE id_genset=${id}`
      )
      res.send(resp)
    }
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
    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE master_genset SET merek='${merek}',model='${model}',tipe='${tipe}',tahun='${tahun}',garansi='${garansi}',id_users='${iduser}' WHERE id_genset=${idgenset}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/genset')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE master_genset_roto_2 SET '${merek}','${model}','${tipe}','${tahun}','${garansi}','${iduser}' WHERE id_genset=${idgenset}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/genset')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE master_genset_roto_3 SET '${merek}','${model}','${tipe}','${tahun}','${garansi}','${iduser}' WHERE id_genset=${idgenset}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/genset')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE master_genset_tinta SET '${merek}','${model}','${tipe}','${tahun}','${garansi}','${iduser}' WHERE id_genset=${idgenset}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/genset')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

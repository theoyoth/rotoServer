const pool = require('../../db.js')

module.exports.inputmasterserver = async (req, res) => {
  let conn
  try {
    const {
      iduser,
      lokasiServer,
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
    const data = await conn.query(
      `INSERT INTO ${tableName} VALUES ('','${tanggal}','${produk}','${merek}','${model}','${processor}','${memori}','${satuanMemori}','${internalStorage}','${satuanInternalStorage}','${networkController}','${sumberDayaListrik}','${tahun}','${garansi}','${iduser}')`
    )
    if (data.affectedRows > 0) {
      res.redirect('/master/server')
    } else {
      return res
        .json({ msg: 'gagal di input' })
        .redirect('/master/server/inputServer')
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterrak = async (req, res) => {
  let conn
  try {
    const {
      iduser,
      lokasiServer,
      tipeRak,
      tipePintu,
      namaProduk,
      dimensi,
      tahun,
      berat,
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
    const data = await conn.query(
      `INSERT INTO ${tableName} VALUES ('','${tipeRak}','${tipePintu}','${namaProduk}','${dimensi}','${berat}','${tahun}','${iduser}')`
    )
    if (data.affectedRows > 0) {
      res.redirect('/master/rak')
    } else {
      return res
        .json({ msg: 'gagal di input' })
        .redirect('/master/rak/inputRak')
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterups = async (req, res) => {
  let conn
  try {
    const {
      iduser,
      lokasiServer,
      model,
      upsCriticalLoad,
      upsCriticalTemperature,
      upsCriticalCapacity,
      nomorSerial,
      namaSistem,
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
    const data = await conn.query(
      `INSERT INTO ${tableName} VALUES ('','${model}','${upsCriticalLoad}','${upsCriticalTemperature}','${upsCriticalCapacity}','${nomorSerial}','${namaSistem}','${manufaktur}','${peringkatTegangan}','${peringkatFrekuensi}','${peringkatTeganganBaterai}','${tahun}','${garansi}','${iduser}')`
    )
    if (data.affectedRows > 0) {
      res.redirect('/master/ups')
    } else {
      return res
        .json({ msg: 'gagal di input' })
        .redirect('/master/ups/inputups')
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterbaterai = async (req, res) => {
  let conn
  try {
    const { iduser, lokasiServer, accu, kuantitas, tegangan, tahun, garansi } =
      req.body

    conn = await pool.getConnection()

    let tableName = 'master_baterai'

    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_baterai_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_baterai_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_baterai_tinta'
    }
    const data = await conn.query(
      `INSERT INTO ${tableName} VALUES ('','${accu}','${kuantitas}','${tegangan}','${tahun}','${garansi}','${iduser}')`
    )
    if (data.affectedRows > 0) {
      res.redirect('/master/baterai')
    } else {
      return res
        .json({ msg: 'gagal di input' })
        .redirect('/master/baterai/inputBaterai')
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterac = async (req, res) => {
  let conn
  try {
    const {
      iduser,
      lokasiServer,
      merek,
      model,
      sumberDayaListrik,
      dimensi,
      konsumsiDaya,
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
      `INSERT INTO ${tableName} VALUES ('','${merek}','${model}','${sumberDayaListrik}','${dimensi}','${konsumsiDaya}','${kapasitasPendingin}','${tahun}','${garansi}', '${iduser}')`
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
module.exports.inputmastercctv = async (req, res) => {
  let conn

  try {
    const { iduser, lokasiServer, merek, model, garansi } = req.body

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
      `INSERT INTO ${tableName} VALUES ('','${merek}','${model}','${garansi}','${iduser}')`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/cctv')
    } else {
      res.json({ errmsg: 'gagal ditambahkan' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasternetwork = async (req, res) => {
  let conn
  try {
    const {
      iduser,
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
    if (lokasiServer == 'rotogravure 2') {
      tableName = 'master_network_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_network_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_network_tinta'
    }
    const resp = await conn.query(
      `INSERT INTO ${tableName} VALUES ('','${merek}','${model}','${tipe}','${kuantitas}','${kanal}','${tahun}','${garansi}','${iduser}')`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/network')
    } else {
      res.json({ errmsg: 'gagal ditambahkan' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterapar = async (req, res) => {
  let conn
  try {
    const { iduser, lokasiServer, merek, model, tipe, tahun, garansi } =
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
      `INSERT INTO ${tableName} VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}','${iduser}')`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/apar')
    } else {
      res.json({ errmsg: 'gagal ditambahkan' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastermonitor = async (req, res) => {
  let conn
  try {
    const { iduser, lokasiServer, merek, model, tipe, tahun, garansi } =
      req.body

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
      `INSERT INTO ${tableName} VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}','${iduser}')`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/monitor')
    } else {
      res.json({ errmsg: 'gagal ditambahkan' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterkeyboard = async (req, res) => {
  let conn
  try {
    const { iduser, lokasiServer, merek, model, tipe, tahun, garansi } =
      req.body

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
      `INSERT INTO ${tableName} VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}','${iduser}')`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/keyboard')
    } else {
      res.json({ errmsg: 'gagal ditambahkan' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastermouse = async (req, res) => {
  let conn
  try {
    const { iduser, lokasiServer, merek, model, tipe, tahun, garansi } =
      req.body

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
      `INSERT INTO ${tableName} VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}','${iduser}')`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/mouse')
    } else {
      res.json({ errmsg: 'gagal ditambahkan' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasternas = async (req, res) => {
  let conn
  try {
    const {
      iduser,
      lokasiServer,
      merek,
      model,
      processor,
      storage,
      satuanStorage,
      tipe,
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
      `INSERT INTO ${tableName} VALUES ('','${merek}','${model}','${processor}','${storage}','${satuanStorage}','${tipe}','${cpu}','${raid}','${tahun}','${garansi}','${iduser}')`
    )
    if (resp.affectedRows > 0) {
      res.redirect('/master/nas')
    } else {
      res.json({ errmsg: 'gagal ditambahkan' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastergenset = async (req, res) => {
  let conn
  try {
    const { iduser, lokasiServer, merek, model, tipe, tahun, garansi } =
      req.body
    conn = await pool.getConnection()

    let tableName = 'master_genset'

    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_genset_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_genset_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_genset_tinta'
    }
    const data = await conn.query(
      `INSERT INTO ${tableName} VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}','${iduser}')`
    )
    if (data.affectedRows > 0) {
      res.redirect('/master/genset')
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

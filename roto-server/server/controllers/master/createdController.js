const pool = require('../../db.js')
const { check, validationResult } = require('express-validator')

module.exports.inputmasterserver = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() })
  }

  let conn
  try {
    const {
      iduser,
      lokasiServer,
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
    } = req.body

    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const data = await conn.query(
        `INSERT INTO master_server VALUES ('','${produk}','${merek}','${model}','${processor}','${memori}','${internalStorage}','${networkController}','${storage}','${sumberDayaListrik}','${tahun}','${garansi}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/server/inputServer')
      }
    } else if (lokasiServer == 'roto 2') {
      const data = await conn.query(
        `INSERT INTO master_server_roto_2 VALUES ('','${produk}','${merek}','${model}','${processor}','${memori}','${internalStorage}','${networkController}','${storage}','${sumberDayaListrik}','${tahun}','${garansi}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/server/inputServer')
      }
    } else if (lokasiServer == 'roto 3') {
      const data = await conn.query(
        `INSERT INTO master_server_roto_3 VALUES ('','${produk}','${merek}','${model}','${processor}','${memori}','${internalStorage}','${networkController}','${storage}','${sumberDayaListrik}','${tahun}','${garansi}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/server/inputServer')
      }
    } else if (lokasiServer == 'tinta') {
      const data = await conn.query(
        `INSERT INTO master_server_tinta VALUES ('','${produk}','${merek}','${model}','${processor}','${memori}','${internalStorage}','${networkController}','${storage}','${sumberDayaListrik}','${tahun}','${garansi}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/server/inputServer')
      }
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterrak = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() })
  }

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

    if (lokasiServer == 'roto 1') {
      const data = await conn.query(
        `INSERT INTO master_rak VALUES ('','${tipeRak}','${tipePintu}','${namaProduk}','${dimensi}','${berat}','${tahun}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/rak')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/rak/inputRak')
      }
    } else if (lokasiServer == 'roto 2') {
      const data = await conn.query(
        `INSERT INTO master_rak_roto_2 VALUES ('','${tipeRak}','${tipePintu}','${namaProduk}','${dimensi}','${berat}','${tahun}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/rak')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/rak/inputRak')
      }
    } else if (lokasiServer == 'roto 3') {
      const data = await conn.query(
        `INSERT INTO master_rak_roto_3 VALUES ('','${tipeRak}','${tipePintu}','${namaProduk}','${dimensi}','${berat}','${tahun}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/rak')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/rak/inputRak')
      }
    } else if (lokasiServer == 'tinta') {
      const data = await conn.query(
        `INSERT INTO master_rak_tinta VALUES ('','${tipeRak}','${tipePintu}','${namaProduk}','${dimensi}','${berat}','${tahun}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/rak')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/rak/inputRak')
      }
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterups = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() })
  }

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
    if (lokasiServer == 'roto 1') {
      const data = await conn.query(
        `INSERT INTO master_ups VALUES ('','${model}','${upsCriticalLoad}','${upsCriticalTemperature}','${upsCriticalCapacity}','${nomorSerial}','${namaSistem}','${manufaktur}','${peringkatTegangan}','${peringkatFrekuensi}','${peringkatTeganganBaterai}','${tahun}','${garansi}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/ups')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/ups/inputups')
      }
    } else if (lokasiServer == 'roto 2') {
      const data = await conn.query(
        `INSERT INTO master_ups_roto_2 VALUES ('','${model}','${upsCriticalLoad}','${upsCriticalTemperature}','${upsCriticalCapacity}','${nomorSerial}','${namaSistem}','${manufaktur}','${peringkatTegangan}','${peringkatFrekuensi}','${peringkatTeganganBaterai}','${tahun}','${garansi}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/ups')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/ups/inputups')
      }
    } else if (lokasiServer == 'roto 3') {
      const data = await conn.query(
        `INSERT INTO master_ups_roto_3 VALUES ('','${model}','${upsCriticalLoad}','${upsCriticalTemperature}','${upsCriticalCapacity}','${nomorSerial}','${namaSistem}','${manufaktur}','${peringkatTegangan}','${peringkatFrekuensi}','${peringkatTeganganBaterai}','${tahun}','${garansi}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/ups')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/ups/inputups')
      }
    } else if (lokasiServer == 'tinta') {
      const data = await conn.query(
        `INSERT INTO master_ups_tinta VALUES ('','${model}','${upsCriticalLoad}','${upsCriticalTemperature}','${upsCriticalCapacity}','${nomorSerial}','${namaSistem}','${manufaktur}','${peringkatTegangan}','${peringkatFrekuensi}','${peringkatTeganganBaterai}','${tahun}','${garansi}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/ups')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/ups/inputups')
      }
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterbaterai = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() })
  }

  let conn
  try {
    const { iduser, lokasiServer, accu, kuantitas, tegangan, tahun, garansi } =
      req.body

    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const data = await conn.query(
        `INSERT INTO master_baterai VALUES ('','${accu}','${kuantitas}','${tegangan}','${tahun}','${garansi}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/baterai')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/baterai/inputBaterai')
      }
    } else if (lokasiServer == 'roto 2') {
      const data = await conn.query(
        `INSERT INTO master_baterai_roto_2 VALUES ('','${accu}','${kuantitas}','${tegangan}','${tahun}','${garansi}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/baterai')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/baterai/inputBaterai')
      }
    } else if (lokasiServer == 'roto 3') {
      const data = await conn.query(
        `INSERT INTO master_baterai_roto_3 VALUES ('','${accu}','${kuantitas}','${tegangan}','${tahun}','${garansi}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/baterai')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/baterai/inputBaterai')
      }
    } else if (lokasiServer == 'tinta') {
      const data = await conn.query(
        `INSERT INTO master_baterai_tinta VALUES ('','${accu}','${kuantitas}','${tegangan}','${tahun}','${garansi}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/master/baterai')
      } else {
        return res
          .json({ msg: 'gagal di input' })
          .redirect('/master/baterai/inputBaterai')
      }
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterac = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() })
  }

  let conn
  try {
    const {
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
    const data = await conn.query(
      `INSERT INTO master_ac VALUES ('','${merek}','${model}','${sumberDayaListrik}','${dimensi}','${konsumsiDaya}','${kapasitasPendingin}','${tahun}','${garansi}')`
    )

    res.redirect('/master/ac')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastercctv = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() })
  }

  let conn

  try {
    const { merek, model, garansi } = req.body

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_cctv VALUES ('','${merek}','${model}','${garansi}')`
    )

    res.redirect('/master/cctv')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasternetwork = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() })
  }

  let conn
  try {
    const { merek, model, tipe, kuantitas, kanal, tahun, garansi } = req.body

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_network VALUES ('','${merek}','${model}','${tipe}','${kuantitas}','${kanal}','${tahun}','${garansi}')`
    )

    res.redirect('/master/network')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterapar = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() })
  }

  let conn
  try {
    const { merek, model, tipe, tahun, garansi } = req.body

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_apar VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}')`
    )

    res.redirect('/master/apar')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastermonitor = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() })
  }

  let conn
  try {
    const { merek, model, tipe, tahun, garansi } = req.body

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_monitor VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}')`
    )

    res.redirect('/master/monitor')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasterkeyboard = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() })
  }

  let conn
  try {
    const { merek, model, tipe, tahun, garansi } = req.body

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_keyboard VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}')`
    )

    res.redirect('/master/keyboard')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastermouse = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() })
  }

  let conn
  try {
    const { merek, model, tipe, tahun, garansi } = req.body

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_mouse VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}')`
    )

    res.redirect('/master/mouse')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmasternas = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() })
  }

  let conn
  try {
    const {
      merek,
      model,
      processor,
      storage,
      tipe,
      cpu,
      raid,
      tahun,
      garansi,
    } = req.body

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_nas VALUES ('','${merek}','${model}','${processor}','${storage}','${tipe}','${cpu}','${raid}','${tahun}','${garansi}')`
    )

    res.redirect('/master/nas')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.inputmastergenset = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() })
  }

  let conn
  try {
    const { merek, model, tipe, tahun, garansi } = req.body

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_genset VALUES ('','${merek}','${model}','${tipe}','${tahun}','${garansi}')`
    )

    res.redirect('/master/genset')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

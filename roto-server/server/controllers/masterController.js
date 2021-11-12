const pool = require('../db.js')
const { check, validationResult } = require('express-validator')

// const conn = pool.getConnection()

// async function fetchConn() {
//   let conn = await pool.getConnection()
//   return conn
// }

module.exports.masterserver = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query(
        `SELECT * FROM master_server INNER JOIN users ON master_server.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query(
        `SELECT * FROM master_server_roto_2 INNER JOIN users ON master_server_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query(
        `SELECT * FROM master_server_roto_3 INNER JOIN users ON master_server_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query(
        `SELECT * FROM master_server_tinta INNER JOIN users ON master_server_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
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
          .redirect('/master/server/inputserver')
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
          .redirect('/master/server/inputserver')
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
          .redirect('/master/server/inputserver')
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
          .redirect('/master/server/inputserver')
      }
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.masterrak = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query(
        `SELECT * FROM master_rak INNER JOIN users ON master_rak.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query(
        `SELECT * FROM master_rak_roto_2 INNER JOIN users ON master_rak_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query(
        `SELECT * FROM master_rak_roto_3 INNER JOIN users ON master_rak_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query(
        `SELECT * FROM master_rak_tinta INNER JOIN users ON master_rak_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
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
module.exports.masterups = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.query.lokasi
    conn = await pool.getConnection()
    if (lokasiServer == 'roto 1') {
      const rows = await conn.query('SELECT * FROM master_ups')
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query('SELECT * FROM master_ups_roto_2')
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query('SELECT * FROM master_ups_roto_3')
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query('SELECT * FROM master_ups_tinta')
      res.send(rows)
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
    const data = await conn.query(
      `INSERT INTO master_ups VALUES ('','${model}','${upsCriticalLoad}','${upsCriticalTemperature}','${upsCriticalCapacity}','${nomorSerial}','${namaSistem}','${manufaktur}','${peringkatTegangan}','${peringkatFrekuensi}','${peringkatTeganganBaterai}','${tahun}','${garansi}')`
    )

    res.redirect('/master/ups')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterbaterai = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.query.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query('SELECT * FROM master_baterai')
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query('SELECT * FROM master_baterai_roto_2')
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query('SELECT * FROM master_baterai_roto_3')
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query('SELECT * FROM master_baterai_tinta')
      res.send(rows)
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
    const { accu, kuantitas, tegangan, tahun, garansi } = req.body

    conn = await pool.getConnection()
    const data = await conn.query(
      `INSERT INTO master_baterai VALUES ('','${accu}','${kuantitas}','${tegangan}','${tahun}','${garansi}')`
    )
    if (data.affectedRows) {
      return res.json({ msg: 'data berhasil di input' })
    }
    res.redirect('/master/baterai')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterac = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.query.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query('SELECT * FROM master_ac')
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query('SELECT * FROM master_ac_roto_2')
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query('SELECT * FROM master_ac_roto_3')
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query('SELECT * FROM master_ac_tinta')
      res.send(rows)
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

module.exports.mastercctv = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.query.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query('SELECT * FROM master_cctv')
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query('SELECT * FROM master_cctv_roto_2')
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query('SELECT * FROM master_cctv_roto_3')
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query('SELECT * FROM master_cctv_tinta')
      res.send(rows)
    }
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

module.exports.masternetwork = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.query.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query('SELECT * FROM master_network')
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query('SELECT * FROM master_network_roto_2')
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query('SELECT * FROM master_network_roto_3')
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query('SELECT * FROM master_network_tinta')
      res.send(rows)
    }
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

module.exports.masterapar = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.query.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query('SELECT * FROM master_apar')
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query('SELECT * FROM master_apar_roto_2')
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query('SELECT * FROM master_apar_roto_3')
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query('SELECT * FROM master_apar_tinta')
      res.send(rows)
    }
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

module.exports.mastermonitor = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.query.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query('SELECT * FROM master_monitor')
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query('SELECT * FROM master_monitor_roto_2')
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query('SELECT * FROM master_monitor_roto_3')
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query('SELECT * FROM master_monitor_tinta')
      res.send(rows)
    }
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

module.exports.masterkeyboard = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.query.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query('SELECT * FROM master_keyboard')
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query('SELECT * FROM master_keyboard_roto_2')
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query('SELECT * FROM master_keyboard_roto_3')
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query('SELECT * FROM master_keyboard_tinta')
      res.send(rows)
    }
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

module.exports.mastermouse = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.query.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query('SELECT * FROM master_mouse')
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query('SELECT * FROM master_mouse_roto_2')
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query('SELECT * FROM master_mouse_roto_3')
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query('SELECT * FROM master_mouse_tinta')
      res.send(rows)
    }
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

module.exports.masternas = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.query.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query('SELECT * FROM master_nas')
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query('SELECT * FROM master_nas_roto_2')
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query('SELECT * FROM master_nas_roto_3')
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query('SELECT * FROM master_nas_tinta')
      res.send(rows)
    }
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

module.exports.mastergenset = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.query.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query('SELECT * FROM master_genset')
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query('SELECT * FROM master_genset_roto_2')
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query('SELECT * FROM master_genset_roto_3')
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query('SELECT * FROM master_genset_tinta')
      res.send(rows)
    }
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

// delete master ====================================

module.exports.deletemasterserver = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const data = await conn.query(
        `DELETE FROM master_server WHERE id_server=${id}`
      )

      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ msg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'roto 2') {
      const data = await conn.query(
        `DELETE FROM master_server_roto_2 WHERE id_server_roto_2=${id}`
      )

      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ msg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'roto 3') {
      const data = await conn.query(
        `DELETE FROM master_server_roto_3 WHERE id_server_roto_3=${id}`
      )

      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ msg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'tinta') {
      const data = await conn.query(
        `DELETE FROM master_server_tinta WHERE id_server_tinta=${id}`
      )

      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ msg: 'data tidak terhapus' })
      }
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.deletemasterrak = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    conn = await pool.getConnection()
    const data = await conn.query(`DELETE FROM master_rak WHERE id=${id}`)

    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ msg: 'data tidak terhapus' })
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.deletemasterups = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    conn = await pool.getConnection()
    const data = await conn.query(`DELETE FROM master_ups WHERE id=${id}`)

    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ msg: 'data tidak terhapus' })
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.deletemasterbaterai = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    conn = await pool.getConnection()
    const data = await conn.query(`DELETE FROM master_baterai WHERE id=${id}`)

    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ msg: 'data tidak terhapus' })
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.deletemasterac = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    conn = await pool.getConnection()
    const data = await conn.query(`DELETE FROM master_ac WHERE id=${id}`)

    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ msg: 'data tidak terhapus' })
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.deletemastercctv = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    conn = await pool.getConnection()
    const data = await conn.query(`DELETE FROM master_cctv WHERE id=${id}`)

    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ msg: 'data tidak terhapus' })
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.deletemasternetwork = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    conn = await pool.getConnection()
    const data = await conn.query(`DELETE FROM master_network WHERE id=${id}`)

    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ msg: 'data tidak terhapus' })
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.deletemasterapar = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    conn = await pool.getConnection()
    const data = await conn.query(`DELETE FROM master_apar WHERE id=${id}`)

    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ msg: 'data tidak terhapus' })
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.deletemastermonitor = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    conn = await pool.getConnection()
    const data = await conn.query(`DELETE FROM master_monitor WHERE id=${id}`)

    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ msg: 'data tidak terhapus' })
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.deletemasterkeyboard = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    conn = await pool.getConnection()
    const data = await conn.query(`DELETE FROM master_keyboard WHERE id=${id}`)

    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ msg: 'data tidak terhapus' })
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.deletemastermouse = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    conn = await pool.getConnection()
    const data = await conn.query(`DELETE FROM master_mouse WHERE id=${id}`)

    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ msg: 'data tidak terhapus' })
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.deletemasternas = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    conn = await pool.getConnection()
    const data = await conn.query(`DELETE FROM master_nas WHERE id=${id}`)

    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ msg: 'data tidak terhapus' })
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.deletemastergenset = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const id = req.params.id
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const data = await conn.query(`DELETE FROM master_genset WHERE id=${id}`)
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
        // res.json(data)
      } else {
        res.json({ err: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'roto 2') {
      const data = await conn.query(
        `DELETE FROM master_genset_roto_2 WHERE id=${id}`
      )
      if (data.affectedRows > 0) {
        // res.json({ msg: 'data dihapus' })
        res.json(data)
      } else {
        res.json({ msg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'roto 3') {
      const data = await conn.query(
        `DELETE FROM master_genset_roto_3 WHERE id=${id}`
      )
      if (data.affectedRows > 0) {
        // res.json({ msg: 'data dihapus' })
        res.json(data)
      } else {
        res.json({ msg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'tinta') {
      const data = await conn.query(
        `DELETE FROM master_genset_tinta WHERE id=${id}`
      )
      if (data.affectedRows > 0) {
        // res.json({ msg: 'data dihapus' })
        res.json(data)
      } else {
        res.json({ msg: 'data tidak terhapus' })
      }
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

// ============== update barang master =============
module.exports.masterservergetdata = async (req, res) => {
  const id = req.params.id
  const lokasiServer = req.params.lokasi
  console.log(id)
  console.log(lokasiServer)
  let conn
  try {
    conn = await pool.getConnection()
    if (lokasiServer == 'roto 1') {
      const rows = await conn.query(
        `SELECT * FROM master_server WHERE id_server=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query(
        `SELECT * FROM master_server_roto_2 WHERE id_server_roto_2=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query(
        `SELECT * FROM master_server_roto_3 WHERE id_server_roto_3=${id}`
      )
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query(
        `SELECT * FROM master_server_tinta WHERE id_server_tinta=${id}`
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
        `UPDATE master_server_roto_2 SET produk='${produk}', merek='${merek}', model='${model}', processor='${processor}', memori='${memori}',internal_storage='${internalStorage}', network_controller='${networkController}', storage='${storage}', sumber_daya_listrik='${sumberDayaListrik}', tahun='${tahun}', garansi='${garansi}' WHERE id_server_roto_2 = ${idproduk}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        res.json({ msg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'roto 3') {
      const resp = await conn.query(
        `UPDATE master_server_roto_3 SET produk='${produk}', merek='${merek}', model='${model}', processor='${processor}', memori='${memori}',internal_storage='${internalStorage}', network_controller='${networkController}', storage='${storage}', sumber_daya_listrik='${sumberDayaListrik}', tahun='${tahun}', garansi='${garansi}' WHERE id_server_roto_3 = ${idproduk}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        res.json({ msg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'tinta') {
      const resp = await conn.query(
        `UPDATE master_server_tinta SET produk='${produk}', merek='${merek}', model='${model}', processor='${processor}', memori='${memori}',internal_storage='${internalStorage}', network_controller='${networkController}', storage='${storage}', sumber_daya_listrik='${sumberDayaListrik}', tahun='${tahun}', garansi='${garansi}' WHERE id_server_tinta = ${idproduk}`
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
  const id = req.params.id
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query(`SELECT * FROM master_rak WHERE id=${id}`)
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
  const id = req.params.id
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query(`SELECT * FROM master_ups WHERE id=${id}`)
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
  const id = req.params.id
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query(`SELECT * FROM master_baterai WHERE id=${id}`)
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
  const id = req.params.id
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query(`SELECT * FROM master_ac WHERE id=${id}`)
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

// ============ fitur cari barang master =============
module.exports.caribarangserver = async (req, res) => {
  let conn

  try {
    const value = req.query.cari

    conn = await pool.getConnection()
    const barang = await conn.query(
      `SELECT * FROM master_server WHERE merek LIKE '${value}%'`
    )
    res.send(barang)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}
module.exports.caribarangrak = async (req, res) => {
  let conn
  try {
    const value = req.query.cari

    conn = await pool.getConnection()
    const barang = await conn.query(
      `SELECT * FROM master_rak WHERE nama_produk LIKE '${value}%'`
    )
    res.send(barang)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}
module.exports.caribarangups = async (req, res) => {
  let conn

  try {
    const value = req.query.cari

    conn = await pool.getConnection()
    const barang = await conn.query(
      `SELECT * FROM master_ups WHERE model LIKE '${value}%'`
    )
    res.send(barang)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}
module.exports.caribarangbaterai = async (req, res) => {
  let conn

  try {
    const value = req.query.cari

    conn = await pool.getConnection()
    const barang = await conn.query(
      `SELECT * FROM master_baterai WHERE accu LIKE '${value}%' OR voltage LIKE '${value}%'`
    )
    res.send(barang)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}
module.exports.caribarangac = async (req, res) => {
  let conn

  try {
    const value = req.query.cari

    conn = await pool.getConnection()
    const barang = await conn.query(
      `SELECT * FROM master_ac WHERE model LIKE '${value}%' OR merek LIKE '${value}%'`
    )
    res.send(barang)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}
module.exports.caribarangcctv = async (req, res) => {
  let conn
  try {
    const value = req.query.cari

    conn = await pool.getConnection()
    // conn = await mariadb.createConnection(config)
    const data = await conn.query(
      `SELECT * FROM master_cctv WHERE model LIKE '${value}%' OR merek LIKE '${value}%'`
    )
    res.send(data)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}
module.exports.caribarangnetwork = async (req, res) => {
  let conn
  try {
    const value = req.query.cari

    conn = await pool.getConnection()
    // const conn = await mariadb.createConnection(config)
    const barang = await conn.query(
      `SELECT * FROM master_network WHERE model LIKE '${value}%' OR merek LIKE '${value}%'`
    )
    res.send(barang)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}
module.exports.caribarangapar = async (req, res) => {
  let conn
  try {
    const value = req.query.cari

    conn = await pool.getConnection()
    // const conn = await mariadb.createConnection(config)
    const data = await conn.query(
      `SELECT * FROM master_apar WHERE model LIKE '${value}%' OR merek LIKE '${value}%'`
    )
    res.send(data)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}
module.exports.caribarangmonitor = async (req, res) => {
  let conn
  try {
    const value = req.query.cari

    conn = await pool.getConnection()
    // const conn = await mariadb.createConnection(config)
    const data = await conn.query(
      `SELECT * FROM master_monitor WHERE model LIKE '${value}%' OR merek LIKE '${value}%'`
    )
    res.send(data)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}
module.exports.caribarangkeyboard = async (req, res) => {
  let conn
  try {
    const value = req.query.cari

    conn = await pool.getConnection()
    const data = await conn.query(
      `SELECT * FROM master_keyboard WHERE model LIKE '${value}%' OR merek LIKE '${value}%'`
    )
    res.send(data)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}
module.exports.caribarangmouse = async (req, res) => {
  let conn
  try {
    const value = req.query.cari

    conn = await pool.getConnection()
    const data = await conn.query(
      `SELECT * FROM master_mouse WHERE model LIKE '${value}%' OR merek LIKE '${value}%'`
    )
    res.send(data)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}
module.exports.caribarangnas = async (req, res) => {
  let conn
  try {
    const value = req.query.cari

    conn = await pool.getConnection()
    const data = await conn.query(
      `SELECT * FROM master_nas WHERE model LIKE '${value}%' OR merek LIKE '${value}%'`
    )
    res.send(data)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}
module.exports.caribaranggenset = async (req, res) => {
  let conn
  try {
    const value = req.query.cari

    conn = await pool.getConnection()
    const data = await conn.query(
      `SELECT * FROM master_genset WHERE model LIKE '${value}%' OR merek LIKE '${value}%'`
    )
    res.send(data)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}

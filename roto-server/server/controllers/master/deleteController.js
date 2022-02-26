const pool = require('../../db.js')

module.exports.deletemasterserver = async (req, res) => {
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

    const data = await conn.query(
      `DELETE FROM ${tableName} WHERE id_server=${id}`
    )

    if (data.affectedRows > 0) {
      res.json({ msg: 'sudah di hapus' })
    } else {
      res.json({ errmsg: 'data tidak terhapus' })
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

    const data = await conn.query(`DELETE FROM ${tableName} WHERE id_rak=${id}`)
    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ errmsg: 'data tidak terhapus' })
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

    const data = await conn.query(`DELETE FROM ${tableName} WHERE id_ups=${id}`)
    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ errmsg: 'data tidak terhapus' })
    }

    conn.release()
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

    const data = await conn.query(
      `DELETE FROM ${tableName} WHERE id_baterai=${id}`
    )
    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ errmsg: 'data tidak terhapus' })
    }

    conn.release()
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

    const data = await conn.query(`DELETE FROM ${tableName} WHERE id_ac=${id}`)
    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ errmsg: 'data tidak terhapus' })
    }

    conn.release()
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

    const data = await conn.query(
      `DELETE FROM ${tableName} WHERE id_cctv=${id}`
    )
    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ errmsg: 'data tidak terhapus' })
    }

    conn.release()
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

    const data = await conn.query(
      `DELETE FROM ${tableName} WHERE id_network=${id}`
    )
    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ errmsg: 'data tidak terhapus' })
    }

    conn.release()
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

    const data = await conn.query(
      `DELETE FROM ${tableName} WHERE id_apar=${id}`
    )
    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ errmsg: 'data tidak terhapus' })
    }

    conn.release()
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

    const data = await conn.query(
      `DELETE FROM ${tableName} WHERE id_monitor=${id}`
    )
    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ errmsg: 'data tidak terhapus' })
    }

    conn.release()
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

    const data = await conn.query(
      `DELETE FROM ${tableName} WHERE id_keyboard=${id}`
    )
    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ errmsg: 'data tidak terhapus' })
    }

    conn.release()
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

    const data = await conn.query(
      `DELETE FROM ${tableName} WHERE id_mouse=${id}`
    )
    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ errmsg: 'data tidak terhapus' })
    }

    conn.release()
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

    const data = await conn.query(`DELETE FROM ${tableName} WHERE id_nas=${id}`)
    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ errmsg: 'data tidak terhapus' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.deletemastergenset = async (req, res) => {
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

    const data = await conn.query(
      `DELETE FROM ${tableName} WHERE id_genset=${id}`
    )
    if (data.affectedRows > 0) {
      res.json({ msg: 'data dihapus' })
    } else {
      res.json({ errmsg: 'data tidak terhapus' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

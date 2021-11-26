const pool = require('../../db.js')

module.exports.deletemasterserver = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(
        `DELETE FROM master_server WHERE id_server=${id}`
      )

      if (data.affectedRows > 0) {
        // res.redirect('/master/server')
        res.json({ msg: 'sudah di hapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM master_server_roto_2 WHERE id_server=${id}`
      )

      if (data.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM master_server_roto_3 WHERE id_server=${id}`
      )

      if (data.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM master_server_tinta WHERE id_server=${id}`
      )

      if (data.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
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
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(`DELETE FROM master_rak WHERE id_rak=${id}`)
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM master_rak_roto_2 WHERE id_rak=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM master_rak_roto_3 WHERE id_rak=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM master_rak_tinta WHERE id_rak=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(`DELETE FROM master_ups WHERE id_ups=${id}`)
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM master_ups_roto_2 WHERE id_ups=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM master_ups_roto_3 WHERE id_ups=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM master_ups_tinta WHERE id_ups=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(
        `DELETE FROM master_baterai WHERE id_baterai=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM master_baterai_roto_2 WHERE id_baterai=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM master_baterai_roto_3 WHERE id_baterai=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM master_baterai_tinta WHERE id_baterai=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(`DELETE FROM master_ac WHERE id_ac=${id}`)
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM master_ac_roto_2 WHERE id_ac=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM master_ac_roto_3 WHERE id_ac=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM master_ac_tinta WHERE id_ac=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(
        `DELETE FROM master_cctv WHERE id_cctv=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM master_cctv_roto_2 WHERE id_cctv=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM master_cctv_roto_3 WHERE id_cctv=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM master_cctv_tinta WHERE id_cctv=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(
        `DELETE FROM master_network WHERE id_network=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM master_network_roto_2 WHERE id_network=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM master_network_roto_3 WHERE id_network=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM master_network_tinta WHERE id_network=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(
        `DELETE FROM master_apar WHERE id_apar=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM master_apar_roto_2 WHERE id_apar=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM master_apar_roto_3 WHERE id_apar=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM master_apar_tinta WHERE id_apar=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(
        `DELETE FROM master_monitor WHERE id_monitor=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM master_monitor_roto_2 WHERE id_monitor=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM master_monitor_roto_3 WHERE id_monitor=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM master_monitor_tinta WHERE id_monitor=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(
        `DELETE FROM master_keyboard WHERE id_keyboard=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM master_keyboard_roto_2 WHERE id_keyboard=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM master_keyboard_roto_3 WHERE id_keyboard=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM master_keyboard_tinta WHERE id_keyboard=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(
        `DELETE FROM master_mouse WHERE id_mouse=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM master_mouse_roto_2 WHERE id_mouse=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM master_mouse_roto_3 WHERE id_mouse=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM master_mouse_tinta WHERE id_mouse=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(`DELETE FROM master_nas WHERE id_nas=${id}`)
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM master_nas_roto_2 WHERE id_nas=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM master_nas_roto_3 WHERE id_nas=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM master_nas_tinta WHERE id_nas=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
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

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(
        `DELETE FROM master_genset WHERE id_genset=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM master_genset_roto_2 WHERE id_genset=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM master_genset_roto_3 WHERE id_genset=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM master_genset_tinta WHERE id_genset=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }

      conn.release()
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

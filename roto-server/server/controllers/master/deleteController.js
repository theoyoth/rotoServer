const pool = require('../../db.js')

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
        res.redirect('/master/server')
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'roto 2') {
      const data = await conn.query(
        `DELETE FROM master_server_roto_2 WHERE id_server=${id}`
      )

      if (data.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'roto 3') {
      const data = await conn.query(
        `DELETE FROM master_server_roto_3 WHERE id_server=${id}`
      )

      if (data.affectedRows > 0) {
        res.redirect('/master/server')
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'tinta') {
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

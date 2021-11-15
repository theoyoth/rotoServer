const pool = require('../../db.js')
const { check, validationResult } = require('express-validator')

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

module.exports.masterups = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()
    if (lokasiServer == 'roto 1') {
      const rows = await conn.query(
        `SELECT * FROM master_ups INNER JOIN users ON master_ups.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query(
        `SELECT * FROM master_ups_roto_2 INNER JOIN users ON master_ups_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query(
        `SELECT * FROM master_ups_roto_3 INNER JOIN users ON master_ups_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query(
        `SELECT * FROM master_ups_tinta INNER JOIN users ON master_ups_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
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

module.exports.masterbaterai = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query(
        `SELECT * FROM master_baterai INNER JOIN users ON master_baterai.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query(
        `SELECT * FROM master_baterai_roto_2 INNER JOIN users ON master_baterai_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query(
        `SELECT * FROM master_baterai_roto_3 INNER JOIN users ON master_baterai_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query(
        `SELECT * FROM master_baterai_tinta INNER JOIN users ON master_baterai_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
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

// detail master server ===============================
module.exports.detailmasterserver = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const resp = await conn.query(
        `SELECT * FROM master_server WHERE id_server=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak ada data' })
      }
    } else if (lokasiServer == 'roto 2') {
      const resp = await conn.query(
        `SELECT * FROM master_server_roto_2 WHERE id_server=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'roto 3') {
      const resp = await conn.query(
        `SELECT * FROM master_server_roto_3 WHERE id_server=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'tinta') {
      const resp = await conn.query(
        `SELECT * FROM master_server_tinta WHERE id_server=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    }

    conn.release()
  } catch (err) {
    console.log(err)
  }
}

module.exports.detailmasterups = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const resp = await conn.query(
        `SELECT * FROM master_ups WHERE id_ups=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak ada data' })
      }
    } else if (lokasiServer == 'roto 2') {
      const resp = await conn.query(
        `SELECT * FROM master_ups_roto_2 WHERE id_ups=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'roto 3') {
      const resp = await conn.query(
        `SELECT * FROM master_ups_roto_3 WHERE id_ups=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'tinta') {
      const resp = await conn.query(
        `SELECT * FROM master_ups_tinta WHERE id_ups=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    }

    conn.release()
  } catch (err) {
    console.log(err)
  }
}

module.exports.detailmasternas = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const resp = await conn.query(
        `SELECT * FROM master_nas WHERE id_nas=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak ada data' })
      }
    } else if (lokasiServer == 'roto 2') {
      const resp = await conn.query(
        `SELECT * FROM master_nas_roto_2 WHERE id_nas=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'roto 3') {
      const resp = await conn.query(
        `SELECT * FROM master_nas_roto_3 WHERE id_nas=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'tinta') {
      const resp = await conn.query(
        `SELECT * FROM master_nas_tinta WHERE id_nas=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    }

    conn.release()
  } catch (err) {
    console.log(err)
  }
}

module.exports.detailmasterac = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const resp = await conn.query(`SELECT * FROM master_ac WHERE id_ac=${id}`)
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak ada data' })
      }
    } else if (lokasiServer == 'roto 2') {
      const resp = await conn.query(
        `SELECT * FROM master_ac_roto_2 WHERE id_ac=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'roto 3') {
      const resp = await conn.query(
        `SELECT * FROM master_ac_roto_3 WHERE id_ac=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'tinta') {
      const resp = await conn.query(
        `SELECT * FROM master_ac_tinta WHERE id_ac=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    }

    conn.release()
  } catch (err) {
    console.log(err)
  }
}

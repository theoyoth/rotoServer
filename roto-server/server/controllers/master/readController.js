const pool = require('../../db.js')
const { check, validationResult } = require('express-validator')

module.exports.masterserver = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
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
      `SELECT id_server,tanggal,produk,merek,model,processor,memori,satuan_memori,internal_storage,satuan_internal_storage,network_controller,sumber_daya_listrik,tahun,garansi,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin}`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
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

    let tableName = 'master_rak'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_rak_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_rak_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_rak_tinta'
    }

    const rows = await conn.query(
      `SELECT id_rak,tipe_rak,tipe_pintu,nama_produk,dimensi,berat,tahun,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin}`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
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

    let tableName = 'master_ups'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_ups_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_ups_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_ups_tinta'
    }
    const rows = await conn.query(
      `SELECT id_ups,model,ups_critical_load,ups_critical_temperature,ups_critical_capacity,nomor_serial,nama_sistem,manufaktur,peringkat_tegangan,peringkat_frekuensi,peringkat_tegangan_baterai,tahun,garansi,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin}`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
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

    let tableName = 'master_baterai'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_baterai_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_baterai_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_baterai_tinta'
    }

    const rows = await conn.query(
      `SELECT id_baterai,accu,kuantitas,voltage,tahun,garansi,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin}`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterac = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
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
      `SELECT id_ac,merek,model,sumber_daya_listrik,dimensi,konsumsi_daya_listrik,kapasitas_pendingin,tahun,garansi,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin}`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastercctv = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    let tableName = 'master_cctv'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_cctv_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_cctv_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_cctv_tinta'
    }

    const rows = await conn.query(
      `SELECT id_cctv,merek,model,garansi,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin}`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masternetwork = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    let tableName = 'master_network'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_network_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_network_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_network_tinta'
    }
    const rows = await conn.query(
      `SELECT id_network,merek,model,tipe,kuantitas,kanal,tahun,garansi,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin}`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterapar = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    let tableName = 'master_apar'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_apar_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_apar_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_apar_tinta'
    }

    const rows = await conn.query(
      `SELECT id_apar,merek,model,tipe,tahun,garansi,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin}`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastermonitor = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    let tableName = 'master_monitor'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_monitor_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_monitor_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_monitor_tinta'
    }

    const rows = await conn.query(
      `SELECT id_monitor,merek,model,tipe,tahun,garansi,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin}`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masterkeyboard = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    let tableName = 'master_keyboard'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_keyboard_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_keyboard_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_keyboard_tinta'
    }

    const rows = await conn.query(
      `SELECT id_keyboard,merek,model,tipe,tahun,garansi,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin}`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastermouse = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    let tableName = 'master_mouse'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_mouse_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_mouse_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_mouse_tinta'
    }
    const rows = await conn.query(
      `SELECT id_mouse,merek,model,tipe,tahun,garansi,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin}`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.masternas = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    let tableName = 'master_nas'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_nas_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_nas_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_nas_tinta'
    }

    const rows = await conn.query(
      `SELECT id_nas,merek,model,processor,storage,satuan_storage,tipe,cpu,raid,tahun,garansi,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin}`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mastergenset = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    let tableName = 'master_genset'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_genset_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_genset_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_genset_tinta'
    }

    const rows = await conn.query(
      `SELECT id_genset,merek,model,tipe,tahun,garansi,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin}`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

// detail master server ===============================
module.exports.detailmasterserver = async (req, res) => {
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

    const resp = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_server=${id}`
    )
    if (resp.length > 0) {
      res.send(resp)
    } else {
      res.json({ err: 'tidak ada data' })
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

    let tableName = 'master_ups'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_ups_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_ups_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_ups_tinta'
    }

    const resp = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_ups=${id}`
    )
    if (resp.length > 0) {
      res.send(resp)
    } else {
      res.json({ err: 'tidak ada data' })
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
    if (resp.length > 0) {
      res.send(resp)
    } else {
      res.json({ err: 'tidak ada data' })
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

    let tableName = 'master_ac'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'master_ac_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'master_ac_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'master_ac_tinta'
    }

    const resp = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_ac=${id}`
    )
    if (resp.length > 0) {
      res.send(resp)
    } else {
      res.json({ err: 'tidak ada data' })
    }

    conn.release()
  } catch (err) {
    console.log(err)
  }
}

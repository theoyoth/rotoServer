const pool = require('../../db.js')
const { check, validationResult } = require('express-validator')

module.exports.masterserver = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    const idlogin = req.params.id
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT id_server,tanggal,produk,merek,model,processor,memori,satuan_memori,internal_storage,satuan_internal_storage,network_controller,sumber_daya_listrik,tahun,garansi,id_users,id_user FROM master_server INNER JOIN users ON master_server.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT id_server,tanggal,produk,merek,model,processor,memori,satuan_memori,internal_storage,satuan_internal_storage,network_controller,sumber_daya_listrik,tahun,garansi,id_users,id_user FROM master_server_roto_2 INNER JOIN users ON master_server_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT id_server,tanggal,produk,merek,model,processor,memori,satuan_memori,internal_storage,satuan_internal_storage,network_controller,sumber_daya_listrik,tahun,garansi,id_users,id_user FROM master_server_roto_3 INNER JOIN users ON master_server_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT id_server,tanggal,produk,merek,model,processor,memori,satuan_memori,internal_storage,satuan_internal_storage,network_controller,sumber_daya_listrik,tahun,garansi,id_users,id_user FROM master_server_tinta INNER JOIN users ON master_server_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    }
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

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT id_rak,tipe_rak,tipe_pintu,nama_produk,dimensi,berat,tahun,id_users,id_user FROM master_rak INNER JOIN users ON master_rak.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT id_rak,tipe_rak,tipe_pintu,nama_produk,dimensi,berat,tahun,id_users,id_user FROM master_rak_roto_2 INNER JOIN users ON master_rak_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT id_rak,tipe_rak,tipe_pintu,nama_produk,dimensi,berat,tahun,id_users,id_user FROM master_rak_roto_3 INNER JOIN users ON master_rak_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT id_rak,tipe_rak,tipe_pintu,nama_produk,dimensi,berat,tahun,id_users,id_user FROM master_rak_tinta INNER JOIN users ON master_rak_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    }
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
    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT id_ups,model,ups_critical_load,ups_critical_temperature,ups_critical_capacity,nomor_serial,nama_sistem,manufaktur,peringkat_tegangan,peringkat_frekuensi,peringkat_tegangan_baterai,tahun,garansi,id_users,id_user FROM master_ups INNER JOIN users ON master_ups.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT id_ups,model,ups_critical_load,ups_critical_temperature,ups_critical_capacity,nomor_serial,nama_sistem,manufaktur,peringkat_tegangan,peringkat_frekuensi,peringkat_tegangan_baterai,tahun,garansi,id_users,id_user FROM master_ups_roto_2 INNER JOIN users ON master_ups_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT id_ups,model,ups_critical_load,ups_critical_temperature,ups_critical_capacity,nomor_serial,nama_sistem,manufaktur,peringkat_tegangan,peringkat_frekuensi,peringkat_tegangan_baterai,tahun,garansi,id_users,id_user FROM master_ups_roto_3 INNER JOIN users ON master_ups_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT id_ups,model,ups_critical_load,ups_critical_temperature,ups_critical_capacity,nomor_serial,nama_sistem,manufaktur,peringkat_tegangan,peringkat_frekuensi,peringkat_tegangan_baterai,tahun,garansi,id_users,id_user FROM master_ups_tinta INNER JOIN users ON master_ups_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    }
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

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT id_baterai,accu,kuantitas,voltage,tahun,garansi,id_users,id_user FROM master_baterai INNER JOIN users ON master_baterai.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT id_baterai,accu,kuantitas,voltage,tahun,garansi,id_users,id_user FROM master_baterai_roto_2 INNER JOIN users ON master_baterai_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT id_baterai,accu,kuantitas,voltage,tahun,garansi,id_users,id_user FROM master_baterai_roto_3 INNER JOIN users ON master_baterai_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT id_baterai,accu,kuantitas,voltage,tahun,garansi,id_users,id_user FROM master_baterai_tinta INNER JOIN users ON master_baterai_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    }
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

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT id_ac,merek,model,sumber_daya_listrik,dimensi,konsumsi_daya_listrik,kapasitas_pendingin,tahun,garansi,id_users,id_user FROM master_ac INNER JOIN users ON master_ac.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT id_ac,merek,model,sumber_daya_listrik,dimensi,konsumsi_daya_listrik,kapasitas_pendingin,tahun,garansi,id_users,id_user FROM master_ac_roto_2 INNER JOIN users ON master_ac_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT id_ac,merek,model,sumber_daya_listrik,dimensi,konsumsi_daya_listrik,kapasitas_pendingin,tahun,garansi,id_users,id_user FROM master_ac_roto_3 INNER JOIN users ON master_ac_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT id_ac,merek,model,sumber_daya_listrik,dimensi,konsumsi_daya_listrik,kapasitas_pendingin,tahun,garansi,id_users,id_user FROM master_ac_tinta INNER JOIN users ON master_ac_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    }
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

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT id_cctv,merek,model,garansi,id_users,id_user FROM master_cctv INNER JOIN users ON master_cctv.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT id_cctv,merek,model,garansi,id_users,id_user FROM master_cctv_roto_2 INNER JOIN users ON master_cctv_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT id_cctv,merek,model,garansi,id_users,id_user FROM master_cctv_roto_3 INNER JOIN users ON master_cctv_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT id_cctv,merek,model,garansi,id_users,id_user FROM master_cctv_tinta INNER JOIN users ON master_cctv_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    }
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

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT id_network,merek,model,tipe,kuantitas,kanal,tahun,garansi,id_users,id_user FROM master_network INNER JOIN users ON master_network.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT id_network,merek,model,tipe,kuantitas,kanal,tahun,garansi,id_users,id_user FROM master_network_roto_2 INNER JOIN users ON master_network_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT id_network,merek,model,tipe,kuantitas,kanal,tahun,garansi,id_users,id_user FROM master_network_roto_3 INNER JOIN users ON master_network_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT id_network,merek,model,tipe,kuantitas,kanal,tahun,garansi,id_users,id_user FROM master_network_tinta INNER JOIN users ON master_network_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    }
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

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT id_apar,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_apar INNER JOIN users ON master_apar.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT id_apar,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_apar_roto_2 INNER JOIN users ON master_apar_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT id_apar,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_apar_roto_3 INNER JOIN users ON master_apar_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT id_apar,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_apar_tinta INNER JOIN users ON master_apar_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    }
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

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT id_monitor,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_monitor INNER JOIN users ON master_monitor.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT id_monitor,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_monitor_roto_2 INNER JOIN users ON master_monitor_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT id_monitor,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_monitor_roto_3 INNER JOIN users ON master_monitor_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT id_monitor,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_monitor_tinta INNER JOIN users ON master_monitor_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    }
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

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT id_keyboard,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_keyboard INNER JOIN users ON master_keyboard.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT id_keyboard,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_keyboard_roto_2 INNER JOIN users ON master_keyboard_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT id_keyboard,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_keyboard_roto_3 INNER JOIN users ON master_keyboard_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT id_keyboard,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_keyboard_tinta INNER JOIN users ON master_keyboard_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    }
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

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT id_mouse,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_mouse INNER JOIN users ON master_mouse.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT id_mouse,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_mouse_roto_2 INNER JOIN users ON master_mouse_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT id_mouse,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_mouse_roto_3 INNER JOIN users ON master_mouse_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT id_mouse,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_mouse_tinta INNER JOIN users ON master_mouse_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    }
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

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT id_nas,merek,model,processor,storage,satuan_storage,tipe,cpu,raid,tahun,garansi,id_users,id_user FROM master_nas INNER JOIN users ON master_nas.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT id_nas,merek,model,processor,storage,satuan_storage,tipe,cpu,raid,tahun,garansi,id_users,id_user FROM master_nas_roto_2 INNER JOIN users ON master_nas_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT id_nas,merek,model,processor,storage,satuan_storage,tipe,cpu,raid,tahun,garansi,id_users,id_user FROM master_nas_roto_3 INNER JOIN users ON master_nas_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT id_nas,merek,model,processor,storage,satuan_storage,tipe,cpu,raid,tahun,garansi,id_users,id_user FROM master_nas_tinta INNER JOIN users ON master_nas_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    }
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

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT id_genset,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_genset INNER JOIN users ON master_genset.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT id_genset,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_genset_roto_2 INNER JOIN users ON master_genset_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT id_genset,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_genset_roto_3 INNER JOIN users ON master_genset_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT id_genset,merek,model,tipe,tahun,garansi,id_users,id_user FROM master_genset_tinta INNER JOIN users ON master_genset_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.status(200).send(rows)
    }
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

    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM master_server WHERE id_server=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak ada data' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM master_server_roto_2 WHERE id_server=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM master_server_roto_3 WHERE id_server=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
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

    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM master_ups WHERE id_ups=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak ada data' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM master_ups_roto_2 WHERE id_ups=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM master_ups_roto_3 WHERE id_ups=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
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

    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM master_nas WHERE id_nas=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak ada data' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM master_nas_roto_2 WHERE id_nas=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM master_nas_roto_3 WHERE id_nas=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
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

    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(`SELECT * FROM master_ac WHERE id_ac=${id}`)
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak ada data' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM master_ac_roto_2 WHERE id_ac=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM master_ac_roto_3 WHERE id_ac=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
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

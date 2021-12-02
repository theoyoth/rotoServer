const pool = require('../db.js')

module.exports.inputmaintenance = async (req, res) => {
  let conn
  try {
    const {
      iduser,
      lokasiServer,
      nama,
      tanggal,
      suhu,
      kelembapan,
      ac,
      ups,
      baterai,
      server,
      keterangan,
    } = req.body

    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(
        `INSERT INTO maintenance VALUES ('','${nama}','${tanggal}','${suhu}','${kelembapan}','${ac}','${ups}','${baterai}','${server}','${keterangan}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/maintenance')
      } else {
        return res.json({ msg: 'gagal di input' }).redirect('/inputmaintenance')
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `INSERT INTO maintenance_roto_2 VALUES ('','${nama}','${tanggal}','${suhu}','${kelembapan}','${ac}','${ups}','${baterai}','${server}','${keterangan}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/maintenance')
      } else {
        return res.json({ msg: 'gagal di input' }).redirect('/inputmaintenance')
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `INSERT INTO maintenance_roto_3 VALUES ('','${nama}','${tanggal}','${suhu}','${kelembapan}','${ac}','${ups}','${baterai}','${server}','${keterangan}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/maintenance')
      } else {
        return res.json({ msg: 'gagal di input' }).redirect('/inputmaintenance')
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `INSERT INTO maintenance_tinta VALUES ('','${nama}','${tanggal}','${suhu}','${kelembapan}','${ac}','${ups}','${baterai}','${server}','${keterangan}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/maintenance')
      } else {
        return res.json({ msg: 'gagal di input' }).redirect('/inputmaintenance')
      }
    }

    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.getAllMaintenance = async (req, res) => {
  let conn
  try {
    const idlogin = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        `SELECT * FROM maintenance INNER JOIN users ON maintenance.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        `SELECT * FROM maintenance_roto_2 INNER JOIN users ON maintenance_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        `SELECT * FROM maintenance_roto_3 INNER JOIN users ON maintenance_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        `SELECT * FROM maintenance_tinta INNER JOIN users ON maintenance_tinta.id_users=users.id_user WHERE users.id_user=${idlogin}`
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
module.exports.deleteMaintenance = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    const conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const data = await conn.query(
        `DELETE FROM maintenance WHERE id_maintenance=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const data = await conn.query(
        `DELETE FROM maintenance_roto_2 WHERE id_maintenance=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const data = await conn.query(
        `DELETE FROM maintenance_roto_3 WHERE id_maintenance=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ errmsg: 'data tidak terhapus' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const data = await conn.query(
        `DELETE FROM maintenance_tinta WHERE id_maintenance=${id}`
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

module.exports.updateMaintenance = async (req, res) => {
  let conn
  try {
    const {
      iduser,
      lokasiServer,
      idmaintenance,
      nama,
      tanggal,
      suhu,
      kelembapan,
      ac,
      ups,
      baterai,
      server,
      keterangan,
    } = req.body

    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `UPDATE maintenance SET nama_pemeriksa='${nama}',tanggal='${tanggal}',suhu='${suhu}',kelembapan='${kelembapan}',ac='${ac}',ups='${ups}',baterai='${baterai}',server='${server}',keterangan='${keterangan}',id_users='${iduser}' WHERE id_maintenance=${idmaintenance}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/maintenance')
      } else {
        res.json({ errmsg: 'gagal diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `UPDATE maintenance_roto_2 SET nama_pemeriksa='${nama}',tanggal='${tanggal}',suhu='${suhu}',kelembapan='${kelembapan}',ac='${ac}',ups='${ups}',baterai='${baterai}',server='${server}',keterangan='${keterangan}',id_users='${iduser}' WHERE id_maintenance=${idmaintenance}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/maintenance')
      } else {
        res.json({ msg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `UPDATE maintenance_roto_3 SET nama_pemeriksa='${nama}',tanggal='${tanggal}',suhu='${suhu}',kelembapan='${kelembapan}',ac='${ac}',ups='${ups}',baterai='${baterai}',server='${server}',keterangan='${keterangan}',id_users='${iduser}' WHERE id_maintenance=${idmaintenance}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/maintenance')
      } else {
        res.json({ msg: 'data tidak diupdate' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `UPDATE maintenance_tinta SET nama_pemeriksa='${nama}',tanggal='${tanggal}',suhu='${suhu}',kelembapan='${kelembapan}',ac='${ac}',ups='${ups}',baterai='${baterai}',server='${server}',keterangan='${keterangan}',id_users='${iduser}' WHERE id_maintenance=${idmaintenance}`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/maintenance')
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

module.exports.getdatamaintenanceupdate = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM maintenance WHERE id_maintenance=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM maintenance_roto_2 WHERE id_maintenance=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM maintenance_roto_3 WHERE id_maintenance=${id}`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `SELECT * FROM maintenance_tinta WHERE id_maintenance=${id}`
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

module.exports.detailMaintenance = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM maintenance WHERE id_maintenance=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak ada data' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM maintenance_roto_2 WHERE id_maintenance=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM maintenance_roto_3 WHERE id_maintenance=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `SELECT * FROM maintenance_tinta WHERE id_maintenance=${id}`
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
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.mainteananceuser = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi

    conn = await pool.getConnection()
    // menggabungkan tabel maintenance dengan tabel users lalu cocokan id users di maintenance dengan id user di users lalu cari yang id role-nya 6
    // id role 6 adalah security
    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        'SELECT suhu,kelembapan,ups FROM maintenance INNER JOIN users ON maintenance.id_users = users.id_user WHERE id_role=6 ORDER BY maintenance.id_maintenance DESC LIMIT 1'
      )
      if (rows) {
        res.send(rows)
      } else {
        res.json({ msg: 'no data' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        'SELECT suhu,kelembapan,ups FROM maintenance_roto_2 INNER JOIN users ON maintenance_roto_2.id_users = users.id_user WHERE id_role=6 ORDER BY maintenance_roto_2.id_maintenance DESC LIMIT 1'
      )
      if (rows) {
        res.send(rows)
      } else {
        res.json({ msg: 'no data' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        'SELECT suhu,kelembapan,ups FROM maintenance_roto_3 INNER JOIN users ON maintenance_roto_3.id_users = users.id_user WHERE id_role=6 ORDER BY maintenance_roto_3.id_maintenance DESC LIMIT 1'
      )
      if (rows) {
        res.send(rows)
      } else {
        res.json({ msg: 'no data' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        'SELECT suhu,kelembapan,ups FROM maintenance_tinta INNER JOIN users ON maintenance_tinta.id_users = users.id_user WHERE id_role=6 ORDER BY maintenance_tinta.id_maintenance DESC LIMIT 1'
      )
      if (rows) {
        res.send(rows)
      } else {
        res.json({ msg: 'no data' })
      }
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.allMaintenanceResultSecurity = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const rows = await conn.query(
        'SELECT suhu,kelembapan,tanggal FROM maintenance INNER JOIN users ON maintenance.id_users = users.id_user WHERE id_role=6'
      )
      if (rows) {
        res.send(rows)
      } else {
        res.json({ msg: 'no data' })
      }
    } else if (lokasiServer == 'rotogravure 2') {
      const rows = await conn.query(
        'SELECT suhu,kelembapan,tanggal FROM maintenance_roto_2 INNER JOIN users ON maintenance_roto_2.id_users = users.id_user WHERE id_role=6'
      )
      if (rows) {
        res.send(rows)
      } else {
        res.json({ msg: 'no data' })
      }
    } else if (lokasiServer == 'rotogravure 3') {
      const rows = await conn.query(
        'SELECT suhu,kelembapan,tanggal FROM maintenance_roto_3 INNER JOIN users ON maintenance_roto_3.id_users = users.id_user WHERE id_role=6'
      )
      if (rows) {
        res.send(rows)
      } else {
        res.json({ msg: 'no data' })
      }
    } else if (lokasiServer == 'rotogravure tinta') {
      const rows = await conn.query(
        'SELECT suhu,kelembapan,tanggal FROM maintenance_tinta INNER JOIN users ON maintenance_tinta.id_users = users.id_user WHERE id_role=6'
      )
      if (rows) {
        res.send(rows)
      } else {
        res.json({ msg: 'no data' })
      }
    }
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.getDataTeknisilistrik = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi

    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM maintenance INNER JOIN users ON maintenance.id_users = users.id_user WHERE id_role=4`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM maintenance_roto_2 INNER JOIN users ON maintenance_roto_2.id_users = users.id_user WHERE id_role=4`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM maintenance_roto_3 INNER JOIN users ON maintenance_roto_3.id_users = users.id_user WHERE id_role=4`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `SELECT * FROM maintenance_tinta INNER JOIN users ON maintenance_tinta.id_users = users.id_user WHERE id_role=4`
      )
      res.send(resp)
    }
    conn.release()
  } catch (err) {
    throw err
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.getDataTeknisiac = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi

    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1') {
      const resp = await conn.query(
        `SELECT * FROM maintenance INNER JOIN users ON maintenance.id_users = users.id_user WHERE id_role=5`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 2') {
      const resp = await conn.query(
        `SELECT * FROM maintenance_roto_2 INNER JOIN users ON maintenance_roto_2.id_users = users.id_user WHERE id_role=5`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure 3') {
      const resp = await conn.query(
        `SELECT * FROM maintenance_roto_3 INNER JOIN users ON maintenance_roto_3.id_users = users.id_user WHERE id_role=5`
      )
      res.send(resp)
    } else if (lokasiServer == 'rotogravure tinta') {
      const resp = await conn.query(
        `SELECT * FROM maintenance_tinta INNER JOIN users ON maintenance_tinta.id_users = users.id_user WHERE id_role=5`
      )
      res.send(resp)
    }
    conn.release()
  } catch (err) {
    throw err
  } finally {
    if (conn) return conn.end()
  }
}

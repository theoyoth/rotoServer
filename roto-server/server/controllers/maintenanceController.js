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
      network,
      server,
      keterangan,
    } = req.body

    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const data = await conn.query(
        `INSERT INTO maintenance VALUES ('','${nama}','${tanggal}','${suhu}','${kelembapan}','${ac}','${ups}','${baterai}','${network}','${server}','${keterangan}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/maintenance')
      } else {
        return res.json({ msg: 'gagal di input' }).redirect('/inputmaintenance')
      }
    } else if (lokasiServer == 'roto 2') {
      const data = await conn.query(
        `INSERT INTO maintenance_roto_2 VALUES ('','${nama}','${tanggal}','${suhu}','${kelembapan}','${ac}','${ups}','${baterai}','${network}','${server}','${keterangan}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/maintenance')
      } else {
        return res.json({ msg: 'gagal di input' }).redirect('/inputmaintenance')
      }
    } else if (lokasiServer == 'roto 3') {
      const data = await conn.query(
        `INSERT INTO maintenance_roto_3 VALUES ('','${nama}','${tanggal}','${suhu}','${kelembapan}','${ac}','${ups}','${baterai}','${network}','${server}','${keterangan}','${iduser}')`
      )
      if (data.affectedRows > 0) {
        res.redirect('/maintenance')
      } else {
        return res.json({ msg: 'gagal di input' }).redirect('/inputmaintenance')
      }
    } else if (lokasiServer == 'tinta') {
      const data = await conn.query(
        `INSERT INTO maintenance_tinta VALUES ('','${nama}','${tanggal}','${suhu}','${kelembapan}','${ac}','${ups}','${baterai}','${network}','${server}','${keterangan}','${iduser}')`
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

    if (lokasiServer == 'roto 1') {
      const rows = await conn.query(
        `SELECT * FROM maintenance INNER JOIN users ON maintenance.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query(
        `SELECT * FROM maintenance_roto_2 INNER JOIN users ON maintenance_roto_2.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query(
        `SELECT * FROM maintenance_roto_3 INNER JOIN users ON maintenance_roto_3.id_users=users.id_user WHERE users.id_user=${idlogin}`
      )
      res.send(rows)
    } else if (lokasiServer == 'tinta') {
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

    if (lokasiServer == 'roto 1') {
      const data = await conn.query(
        `DELETE FROM maintenance WHERE id_maintenance=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ msg: 'data tidak terhapus' })
      }
      res.redirect('/maintenance')
    } else if (lokasiServer == 'roto 2') {
      const data = await conn.query(
        `DELETE FROM maintenance_roto_2 WHERE id_maintenance=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ msg: 'data tidak terhapus' })
      }
      res.redirect('/maintenance')
    } else if (lokasiServer == 'roto 3') {
      const data = await conn.query(
        `DELETE FROM maintenance_roto_3 WHERE id_maintenance=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ msg: 'data tidak terhapus' })
      }
      res.redirect('/maintenance')
    } else if (lokasiServer == 'tinta') {
      const data = await conn.query(
        `DELETE FROM maintenance_tinta WHERE id_maintenance=${id}`
      )
      if (data.affectedRows > 0) {
        res.json({ msg: 'data dihapus' })
      } else {
        res.json({ msg: 'data tidak terhapus' })
      }
      res.redirect('/maintenance')
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
    const id = req.body.id
    const nama = req.body.nama
    const tanggal = req.body.tanggal
    const suhu = req.body.suhu
    const kelembapan = req.body.kelembapan
    const ac = req.body.ac
    const ups = req.body.ups
    const baterai = req.body.baterai
    const network = req.body.network
    const server = req.body.server
    const keterangan = req.body.keterangan

    conn = await pool.getConnection()
    await conn.query(
      `UPDATE maintenance SET nama_pemeriksa='${nama}',tanggal='${tanggal}',suhu='${suhu}',kelembapan='${kelembapan}',ac='${ac}',ups='${ups}',baterai='${baterai}',network='${network}',server='${server}',keterangan='${keterangan}' WHERE id_maintenance=${id}`
    )

    res.redirect('/maintenance')
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.carimaintenance = async (req, res) => {
  let conn
  try {
    const value = req.params.value
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const carimaint = await conn.query(
        `SELECT * FROM maintenance WHERE id_users=${id} AND suhu LIKE '${value}%' OR kelembapan LIKE '${value}%'`
      )
      res.send(carimaint)
    } else if (lokasiServer == 'roto 2') {
      const carimaint = await conn.query(
        `SELECT * FROM maintenance_roto_2 WHERE id_users=${id} AND kelembapan LIKE '${value}%' OR suhu LIKE '${value}%'`
      )
      res.send(carimaint)
    } else if (lokasiServer == 'roto 3') {
      const carimaint = await conn.query(
        `SELECT * FROM maintenance_roto_3 WHERE id_users=${id} AND kelembapan LIKE '${value}%' OR suhu LIKE '${value}%'`
      )
      res.send(carimaint)
    } else if (lokasiServer == 'tinta') {
      const carimaint = await conn.query(
        `SELECT * FROM maintenance_tinta WHERE id_users=${id} AND kelembapan LIKE '${value}%' OR suhu LIKE '${value}%'`
      )
      res.send(carimaint)
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

    conn = await pool.getConnection()
    const resp = await conn.query(
      `SELECT * FROM maintenance WHERE id_maintenance=${id}`
    )
    res.send(resp)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}

module.exports.detailMaintenance = async (req, res) => {
  let conn
  try {
    const id = req.params.id
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'roto 1') {
      const resp = await conn.query(
        `SELECT * FROM maintenance WHERE id_maintenance=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak ada data' })
      }
    } else if (lokasiServer == 'roto 2') {
      const resp = await conn.query(
        `SELECT * FROM maintenance_roto_2 WHERE id_maintenance=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'roto 3') {
      const resp = await conn.query(
        `SELECT * FROM maintenance_roto_3 WHERE id_maintenance=${id}`
      )
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.json({ err: 'tidak bisa data' })
      }
    } else if (lokasiServer == 'tinta') {
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
  }
}

module.exports.mainteananceuser = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi

    conn = await pool.getConnection()
    // menggabungkan tabel maintenance dengan tabel users lalu cocokan id users di maintenance dengan id user di users lalu cari yang id role-nya 6
    // id role 6 adalah security
    if (lokasiServer == 'roto 1') {
      const rows = await conn.query(
        'SELECT suhu,kelembapan,baterai FROM maintenance INNER JOIN users ON maintenance.id_users = users.id_user WHERE id_role=6 ORDER BY maintenance.id_maintenance DESC LIMIT 1'
      )
      if (rows) {
        res.send(rows)
      } else {
        res.json({ msg: 'no data' })
      }
    } else if (lokasiServer == 'roto 2') {
      const rows = await conn.query(
        'SELECT suhu,kelembapan,baterai FROM maintenance_roto_2 INNER JOIN users ON maintenance_roto_2.id_users = users.id_user WHERE id_role=6 ORDER BY maintenance_roto_2.id_maintenance DESC LIMIT 1'
      )
      if (rows) {
        res.send(rows)
      } else {
        res.json({ msg: 'no data' })
      }
    } else if (lokasiServer == 'roto 3') {
      const rows = await conn.query(
        'SELECT suhu,kelembapan,baterai FROM maintenance_roto_3 INNER JOIN users ON maintenance_roto_3.id_users = users.id_user WHERE id_role=6 ORDER BY maintenance_roto_3.id_maintenance DESC LIMIT 1'
      )
      if (rows) {
        res.send(rows)
      } else {
        res.json({ msg: 'no data' })
      }
    } else if (lokasiServer == 'tinta') {
      const rows = await conn.query(
        'SELECT suhu,kelembapan,baterai FROM maintenance_tinta INNER JOIN users ON maintenance_tinta.id_users = users.id_user WHERE id_role=6 ORDER BY maintenance_tinta.id_maintenance DESC LIMIT 1'
      )
      if (rows) {
        res.send(rows)
      } else {
        res.json({ msg: 'no data' })
      }
    }
  } catch (err) {
    console.log(err)
  }
}

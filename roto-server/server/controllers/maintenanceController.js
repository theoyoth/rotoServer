const pool = require('../db.js')
import moment from 'moment'

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
      jaringan,
      panelListrik,
      pipa,
      cctv,
      keterangan,
      keteranganAc,
      keteranganUps,
      keteranganBaterai,
      keteranganServer,
      keteranganJaringan,
      keteranganPanellistrik,
      keteranganPipa,
      keteranganCctv,
    } = req.body

    conn = await pool.getConnection()
    let tableName = 'maintenance'
    if (lokasiServer === 'rotogravure 2') {
      tableName = 'maintenance_roto_2'
    } else if (lokasiServer === 'rotogravure 3') {
      tableName = 'maintenance_roto_3'
    } else if (lokasiServer === 'rotogravure tinta') {
      tableName = 'maintenance_tinta'
    }
    const data = await conn.query(
      `INSERT INTO ${tableName} VALUES ('','${nama}','${tanggal}','${suhu}','${kelembapan}','${ac}','${keteranganAc}','${ups}','${keteranganUps}','${baterai}','${keteranganBaterai}','${server}','${keteranganServer}','${jaringan}','${keteranganJaringan}','${panelListrik}','${keteranganPanellistrik}','${pipa}','${keteranganPipa}','${cctv}','${keteranganCctv}','${keterangan}','${iduser}')`
    )
    if (data.affectedRows > 0) {
      res.status(200).send('success')
    } else {
      res.status(500).send('error')
    }

    conn.release()
  } catch (err) {
    res.status(500).send(err)
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
    let tableName = 'maintenance'

    if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      tableName = 'maintenance_roto_2'
    }

    const rows = await conn.query(
      `SELECT id_maintenance,nama_pemeriksa,tanggal,suhu,kelembapan,ac,keterangan_ac,ups,keterangan_ups,baterai,keterangan_baterai,server,keterangan_server,jaringan,keterangan_jaringan,panel_listrik,keterangan_panel_listrik,pipa,keterangan_pipa,cctv,keterangan_cctv,keterangan,id_users,id_user FROM ${tableName} INNER JOIN users ON ${tableName}.id_users=users.id_user WHERE users.id_user=${idlogin}`
    )
    res.status(200).send(rows)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
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
    let tableName = 'maintenance'

    if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      tableName = 'maintenance_roto_2'
    }
    const data = await conn.query(
      `DELETE FROM ${tableName} WHERE id_maintenance=${id}`
    )
    if (data.affectedRows > 0) {
      res.status(200).send('success')
    } else {
      res.status(500).send('error')
    }

    conn.release()
  } catch (err) {
    res.status(500).send(err)
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
      jaringan,
      panelListrik,
      pipa,
      cctv,
      keterangan,
      keteranganAc,
      keteranganUps,
      keteranganBaterai,
      keteranganServer,
      keteranganJaringan,
      keteranganPanellistrik,
      keteranganPipa,
      keteranganCctv,
    } = req.body

    conn = await pool.getConnection()
    let tableName = 'maintenance'

    if (
      lokasiServer === 'rotogravure 2' ||
      lokasiServer === 'rotogravure tinta'
    ) {
      tableName = 'maintenance_roto_2'
    }
    const resp = await conn.query(
      `UPDATE ${tableName} SET nama_pemeriksa='${nama}',tanggal='${tanggal}',suhu='${suhu}',kelembapan='${kelembapan}',ac='${ac}',keterangan_ac='${keteranganAc}',ups='${ups}',keterangan_ups='${keteranganUps}',baterai='${baterai}',keterangan_baterai='${keteranganBaterai}',server='${server}',keterangan_server='${keteranganServer}',jaringan='${jaringan}',keterangan_jaringan='${keteranganJaringan}',panel_listrik='${panelListrik}',keterangan_panel_listrik='${keteranganPanellistrik}',pipa='${pipa}',keterangan_pipa='${keteranganPipa}',cctv='${cctv}',keterangan_cctv='${keteranganCctv}',keterangan='${keterangan}',id_users='${iduser}' WHERE id_maintenance=${idmaintenance}`
    )
    if (resp.affectedRows > 0) {
      res.status(200).send('success')
    } else {
      res.status(500).send('error')
    }

    conn.release()
  } catch (err) {
    res.status(500).send(err)
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

    let tableName = 'maintenance'
    if (
      lokasiServer === 'rotogravure 2' ||
      lokasiServer === 'rotogravure tinta'
    ) {
      tableName = 'maintenance_roto_2'
    }
    const resp = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_maintenance=${id}`
    )
    res.status(200).send(resp)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
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

    let tableName = 'maintenance'
    if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      tableName = 'maintenance_roto_2'
    }
    const resp = await conn.query(
      `SELECT * FROM ${tableName} WHERE id_maintenance=${id}`
    )
    if (resp.length > 0) {
      res.status(200).send(resp)
    } else {
      res.status(500).send('error')
    }

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.allMaintenanceEdpSecurity = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()
    let tableName = 'maintenance'
    if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      tableName = 'maintenance_roto_2'
    }
    const rowsSecurity = await conn.query(
      `SELECT suhu,kelembapan,tanggal,ups,nama FROM ${tableName} INNER JOIN users ON ${tableName}.id_users = users.id_user WHERE id_role=6`
    )
    const rowsEdp = await conn.query(
      `SELECT suhu,kelembapan,tanggal,ups,nama FROM ${tableName} INNER JOIN users ON ${tableName}.id_users = users.id_user WHERE id_role=1`
    )
    let rows = [...rowsSecurity, ...rowsEdp]
    rows.sort((i, j) => i.tanggal - j.tanggal)

    if (rows) {
      res.status(200).send(rows)
    } else {
      res.status(500).send('error')
    }

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

// data maintenance untuk admin teknisi
module.exports.getDataTeknisilistrik = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi

    conn = await pool.getConnection()
    let tableName = 'maintenance'
    if (
      lokasiServer === 'rotogravure 2' ||
      lokasiServer === 'rotogravure tinta'
    ) {
      tableName = 'maintenance_roto_2'
    }
    const resp = await conn.query(
      `SELECT * FROM ${tableName} INNER JOIN users ON ${tableName}.id_users = users.id_user WHERE id_role=4`
    )
    res.status(200).send(resp)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

// data maintenance untuk admin teknisi
module.exports.getDataTeknisiac = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi

    conn = await pool.getConnection()
    let tableName = 'maintenance'
    if (
      lokasiServer === 'rotogravure 2' ||
      lokasiServer === 'rotogravure tinta'
    ) {
      tableName = 'maintenance_roto_2'
    }
    const resp = await conn.query(
      `SELECT * FROM ${tableName} INNER JOIN users ON ${tableName}.id_users = users.id_user WHERE id_role=5`
    )
    res.status(200).send(resp)

    conn.release()
  } catch (err) {
    res.status(500).send(err)
  } finally {
    if (conn) return conn.end()
  }
}

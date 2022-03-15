const pool = require('../db.js')

module.exports.getListServer = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1' || lokasiServer == 'rotogravure 3') {
      const rows = await conn.query('SELECT * FROM master_server')
      res.send(rows)
    } else if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      const rows = await conn.query('SELECT * FROM master_server_roto_2')
      res.send(rows)
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.getListRak = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1' || lokasiServer == 'rotogravure 3') {
      const rows = await conn.query('SELECT * FROM master_rak')
      res.send(rows)
    } else if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      const rows = await conn.query('SELECT * FROM master_rak_roto_2')
      res.send(rows)
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.getListUps = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1' || lokasiServer == 'rotogravure 3') {
      const rows = await conn.query('SELECT * FROM master_ups')
      res.send(rows)
    } else if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      const rows = await conn.query('SELECT * FROM master_ups_roto_2')
      res.send(rows)
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.getListBaterai = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1' || lokasiServer == 'rotogravure 3') {
      const rows = await conn.query('SELECT * FROM master_baterai')
      res.send(rows)
    } else if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      const rows = await conn.query('SELECT * FROM master_baterai_roto_2')
      res.send(rows)
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.getListAc = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1' || lokasiServer == 'rotogravure 3') {
      const rows = await conn.query('SELECT * FROM master_ac')
      res.send(rows)
    } else if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      const rows = await conn.query('SELECT * FROM master_ac_roto_2')
      res.send(rows)
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.getListCctv = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1' || lokasiServer == 'rotogravure 3') {
      const rows = await conn.query('SELECT * FROM master_cctv')
      res.send(rows)
    } else if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      const rows = await conn.query('SELECT * FROM master_cctv_roto_2')
      res.send(rows)
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.getListApar = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1' || lokasiServer == 'rotogravure 3') {
      const rows = await conn.query('SELECT * FROM master_apar')
      res.send(rows)
    } else if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      const rows = await conn.query('SELECT * FROM master_apar_roto_2')
      res.send(rows)
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.getListKeyboard = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1' || lokasiServer == 'rotogravure 3') {
      const rows = await conn.query('SELECT * FROM master_keyboard')
      res.send(rows)
    } else if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      const rows = await conn.query('SELECT * FROM master_keyboard_roto_2')
      res.send(rows)
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.getListMouse = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1' || lokasiServer == 'rotogravure 3') {
      const rows = await conn.query('SELECT * FROM master_mouse')
      res.send(rows)
    } else if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      const rows = await conn.query('SELECT * FROM master_mouse_roto_2')
      res.send(rows)
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.getListMonitor = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1' || lokasiServer == 'rotogravure 3') {
      const rows = await conn.query('SELECT * FROM master_monitor')
      res.send(rows)
    } else if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      const rows = await conn.query('SELECT * FROM master_monitor_roto_2')
      res.send(rows)
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.getListNetwork = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1' || lokasiServer == 'rotogravure 3') {
      const rows = await conn.query('SELECT * FROM master_network')
      res.send(rows)
    } else if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      const rows = await conn.query('SELECT * FROM master_network_roto_2')
      res.send(rows)
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.getListNas = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1' || lokasiServer == 'rotogravure 3') {
      const rows = await conn.query('SELECT * FROM master_nas')
      res.send(rows)
    } else if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      const rows = await conn.query('SELECT * FROM master_nas_roto_2')
      res.send(rows)
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}
module.exports.getListGenset = async (req, res) => {
  let conn
  try {
    const lokasiServer = req.params.lokasi
    conn = await pool.getConnection()

    if (lokasiServer == 'rotogravure 1' || lokasiServer == 'rotogravure 3') {
      const rows = await conn.query('SELECT * FROM master_genset')
      res.send(rows)
    } else if (
      lokasiServer == 'rotogravure 2' ||
      lokasiServer == 'rotogravure tinta'
    ) {
      const rows = await conn.query('SELECT * FROM master_genset_roto_2')
      res.send(rows)
    }
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

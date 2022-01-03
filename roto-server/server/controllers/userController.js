const pool = require('../db.js')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

module.exports.getAllUsers = async (req, res) => {
  let conn
  const lokasiServer = req.params.lokasi

  try {
    conn = await pool.getConnection()

    const rows = await conn.query(
      `SELECT id_user,nama,role FROM users WHERE lokasi = '${lokasiServer}'`
    )
    res.send(rows)
    conn.release()
  } catch (err) {
    console.log(err)
  }
}

module.exports.addUser = async (req, res) => {
  let conn
  try {
    const { namauser, roleuser, sandi, lokasi } = req.body
    const hasSandi = bcrypt.hashSync(sandi, salt)

    conn = await pool.getConnection()
    const data = await conn.query('SELECT * FROM users')
    if (namauser === data[0].nama) {
      res.json({ errmsg: 'data yang dimasukkan sudah terdaftar' })
    } else {
      if (roleuser == 'EDP') {
        const resp = await conn.query(
          `INSERT INTO users VALUES ('','${namauser}','${hasSandi}','','${roleuser}','1','${lokasi}')`
        )
        if (resp.affectedRows > 0) {
          res.send('/infouser')
        } else {
          res.json({ errmsg: 'gagal menambah user' })
        }
      } else if (roleuser == 'PA') {
        const resp = await conn.query(
          `INSERT INTO users VALUES ('','${namauser}','${hasSandi}','','${roleuser}','2','${lokasi}')`
        )
        if (resp.affectedRows > 0) {
          res.send('/infouser')
        } else {
          res.json({ errmsg: 'gagal menambah user' })
        }
      } else if (roleuser == 'Admin teknisi') {
        const resp = await conn.query(
          `INSERT INTO users VALUES ('','${namauser}','${hasSandi}','','${roleuser}','3','${lokasi}')`
        )
        if (resp.affectedRows > 0) {
          res.send('/infouser')
        } else {
          res.json({ errmsg: 'gagal menambah user' })
        }
      } else if (roleuser == 'Teknisi listrik') {
        const resp = await conn.query(
          `INSERT INTO users VALUES ('','${namauser}','${hasSandi}','','${roleuser}','4','${lokasi}')`
        )
        if (resp.affectedRows > 0) {
          res.send('/infouser')
        } else {
          res.json({ errmsg: 'gagal menambah user' })
        }
      } else if (roleuser == 'Teknisi ac') {
        const resp = await conn.query(
          `INSERT INTO users VALUES ('','${namauser}','${hasSandi}','','${roleuser}','5','${lokasi}')`
        )
        if (resp.affectedRows > 0) {
          res.send('/infouser')
        } else {
          res.json({ errmsg: 'gagal menambah user' })
        }
      } else if (roleuser == 'Security') {
        const resp = await conn.query(
          `INSERT INTO users VALUES ('','${namauser}','${hasSandi}','','${roleuser}','6','${lokasi}')`
        )
        if (resp.affectedRows > 0) {
          res.send('/infouser')
        } else {
          res.json({ errmsg: 'gagal menambah user' })
        }
      }
    }

    conn.release()
  } catch (err) {
    console.log(err)
  }
}

module.exports.deleteUser = async (req, res) => {
  let conn
  try {
    const { id, lokasi } = req.params
    conn = await pool.getConnection()

    const resp = await conn.query(
      `DELETE FROM users WHERE id_user=${id} AND lokasi='${lokasi}'`
    )
    if (resp.affectedRows > 0) {
      res.send('/infouser')
    } else {
      res.json({ errmsg: 'gagal menghapus user' })
    }
    conn.release()
  } catch (err) {
    console.log(err)
  }
}

module.exports.getUser = async (req, res) => {
  let conn
  try {
    const id = req.params.id

    conn = await pool.getConnection()
    const resp = await conn.query(`SELECT * FROM users WHERE id_user='${id}'`)
    res.send(resp)
  } catch (err) {
    throw err
  }
}

module.exports.updateUser = async (req, res) => {
  let conn
  try {
    const { iduser, nama, role } = req.body

    conn = await pool.getConnection()
    if (role == 'EDP') {
      const resp = await conn.query(
        `UPDATE users SET nama='${nama}',role='${role}',id_role='1' WHERE id_user='${iduser}'`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/infouser')
      } else {
        res.json({ errmsg: 'user gagal diupdate' })
      }
    } else if (role == 'PA') {
      const resp = await conn.query(
        `UPDATE users SET nama='${nama}',role='${role}',id_role='2' WHERE id_user='${iduser}'`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/infouser')
      } else {
        res.json({ errmsg: 'user gagal diupdate' })
      }
    } else if (role == 'Admin teknisi') {
      const resp = await conn.query(
        `UPDATE users SET nama='${nama}',role='${role}',id_role='3' WHERE id_user='${iduser}'`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/infouser')
      } else {
        res.json({ errmsg: 'user gagal diupdate' })
      }
    } else if (role == 'Teknisi listrik') {
      const resp = await conn.query(
        `UPDATE users SET nama='${nama}',role='${role}',id_role='4' WHERE id_user='${iduser}'`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/infouser')
      } else {
        res.json({ errmsg: 'user gagal diupdate' })
      }
    } else if (role == 'Teknisi ac') {
      const resp = await conn.query(
        `UPDATE users SET nama='${nama}',role='${role}',id_role='5' WHERE id_user='${iduser}'`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/infouser')
      } else {
        res.json({ errmsg: 'user gagal diupdate' })
      }
    } else if (role == 'Security') {
      const resp = await conn.query(
        `UPDATE users SET nama='${nama}',role='${role}',id_role='6' WHERE id_user='${iduser}'`
      )
      if (resp.affectedRows > 0) {
        res.redirect('/infouser')
      } else {
        res.json({ errmsg: 'user gagal diupdate' })
      }
    }
    conn.release()
  } catch (err) {
    throw err
  }
}

module.exports.getUserPa = async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    // id PA adalah 2
    const resp = await conn.query('SELECT nama FROM users WHERE id_role=2')
    if (resp) {
      res.send(resp)
      console.log('resp')
    } else {
      res.end()
    }

    conn.release()
  } catch (err) {
    console.log('tidak bisa mengambil user PA', err)
  } finally {
    if (conn) {
      return conn.end()
    }
  }
}

const fs = require('fs')
const fsPromises = require('fs').promises
const https = require('https')
const path = require('path')
const formidable = require('formidable')
const mv = require('mv')
const pool = require('../../db.js')

module.exports.uploadFiledoc = async (req, res) => {
  let conn

  conn = await pool.getConnection()

  var folder = req.headers.folder
  var deskripsi = req.headers.deskripsi
  var lokasiServer = req.headers.lokasi
  var filedata = new formidable.IncomingForm()

  filedata.parse(req, function (err, fields, files) {
    var oldpath = files.file._writeStream.path

    let newpath =
      `./static/uploads/roto1/${folder}/` + files.file.originalFilename
    let tableName = 'dokumen'

    if (lokasiServer === 'rotogravure 2') {
      newpath =
        `./static/uploads/roto2/${folder}/` + files.file.originalFilename
      tableName = 'dokumen_roto_2'
    }
    if (lokasiServer === 'rotogravure 3') {
      newpath =
        `./static/uploads/roto3/${folder}/` + files.file.originalFilename
      tableName = 'dokumen_roto_3'
    }
    if (lokasiServer === 'rotogravure tinta') {
      newpath =
        `./static/uploads/rototinta/${folder}/` + files.file.originalFilename
      tableName = 'dokumen_tinta'
    }

    let fileName = files.file.originalFilename

    mv(oldpath, newpath, function (err) {
      if (err) {
        console.log(err)
      }
    })
    conn
      .query(
        `INSERT INTO ${tableName} VALUES ('','${fileName}','${folder}','${deskripsi}')`
      )
      .then((dok) => {
        return res.status(200).send('success')
      })
      .catch((err) => {
        return res.status(500).send('error')
      })
  })
}

module.exports.getAllFiles = async (req, res) => {
  let conn

  try {
    const lokasiServer = req.params.lokasi
    const folder = req.params.folder

    conn = await pool.getConnection()

    let tableName = 'dokumen'

    if (lokasiServer === 'rotogravure 2') {
      tableName = 'dokumen_roto_2'
    }
    if (lokasiServer === 'rotogravure 3') {
      tableName = 'dokumen_roto_3'
    }
    if (lokasiServer === 'rotogravure tinta') {
      tableName = 'dokumen_tinta'
    }

    const getFile = await conn.query(
      `SELECT nama_dokumen,folder,deskripsi FROM ${tableName} WHERE folder='${folder}'`
    )
    console.log(getFile)
    res.status(200).send(getFile)
    conn.release()
  } catch (err) {
    console.log(err)
  } finally {
    if (conn) return conn.end()
  }
}

module.exports.deleteFile = async (req, res) => {
  const filename = req.params.name
  const lokasiServer = req.params.lokasi
  const folder = req.params.folder
  let conn

  conn = await pool.getConnection()

  let directoryPath = `./static/uploads/roto1/${folder}/${filename}`
  let tableName = 'dokumen'

  if (lokasiServer === 'rotogravure 2') {
    directoryPath = `./static/uploads/roto2/${folder}/${filename}`
    tableName = 'dokumen_roto_2'
  } else if (lokasiServer === 'rotogravure 3') {
    directoryPath = `./static/uploads/roto3/${folder}/${filename}`
    tableName = 'dokumen_roto_3'
  } else if (lokasiServer === 'rotogravure tinta') {
    directoryPath = `./static/uploads/rototinta/${folder}/${filename}`
    tableName = 'dokumen_tinta'
  }

  const dataDelete = await conn.query(
    `DELETE FROM ${tableName} WHERE nama_dokumen='${filename}'`
  )
  try {
    fs.unlinkSync(directoryPath)
  } catch (err) {
    console.error(err)
  }

  if (dataDelete.affectedRows > 0) {
    res.status(200).send('success')
  } else {
    res.status(500).send('error')
  }
}

module.exports.addFolder = async (req, res) => {
  const { namaDir, lokasiServer } = req.body

  let folderName = `./static/uploads/roto1/${namaDir}/`

  if (lokasiServer === 'rotogravure 2') {
    folderName = `./static/uploads/roto2/${namaDir}/`
  }
  if (lokasiServer === 'rotogravure 3') {
    folderName = `./static/uploads/roto3/${namaDir}/`
  }
  if (lokasiServer === 'rotogravure tinta') {
    folderName = `./static/uploads/rototinta/${namaDir}/`
  }

  try {
    fs.mkdir(folderName, (err) => {
      if (err) {
        throw err
      }
    })
    return res.status(200).json({ msg: 'success' })
  } catch (err) {
    return res.status(500).send('error')
  }
}

module.exports.readDirectory = async (req, res) => {
  const lokasiServer = req.params.lokasi

  let folder = `./static/uploads/roto1/`

  if (lokasiServer === 'rotogravure 2') {
    folder = `./static/uploads/roto2/`
  }
  if (lokasiServer === 'rotogravure 3') {
    folder = `./static/uploads/roto3/`
  }
  if (lokasiServer === 'rotogravure tinta') {
    folder = `./static/uploads/rototinta/`
  }

  fs.readdir(folder, (err, files) => {
    if (err) return console.error(err)
    return res.status(200).json(files)
  })
}
module.exports.deleteFolder = async (req, res) => {
  const foldername = req.params.foldername
  const lokasi = req.params.lokasi

  let folder = `./static/uploads/roto1/${foldername}`

  if (lokasi === 'rotogravure 2') {
    folder = `./static/uploads/roto2/${foldername}`
  }
  if (lokasi === 'rotogravure 3') {
    folder = `./static/uploads/roto3/${foldername}`
  }
  if (lokasi === 'rotogravure tinta') {
    folder = `./static/uploads/rototinta/${foldername}`
  }

  fs.rmdir(folder, (err) => {
    if (err) {
      return res.status(500)
    }
    return res.status(200).send('success')
  })
  // try {
  //   await fsPromises.rmdir(folder, { recursive: true })
  // } catch (err) {
  //   console.log(err)
  // }
  // fs.rmdirSync(folder, { recursive: true })
}

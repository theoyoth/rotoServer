const fs = require('fs')
const https = require('https')
const path = require('path')
const formidable = require('formidable')
const mv = require('mv')

module.exports.uploadFiledoc = async (req, res) => {
  const lokasiServer = req.params.lokasi
  var form = new formidable.IncomingForm()

  form.parse(req, function (err, fields, files) {
    var oldpath = files.file._writeStream.path
    // console.log(oldpath)
    if (lokasiServer === 'rotogravure 1') {
      var newpath = './static/uploads/roto1/' + files.file.originalFilename
    } else if (lokasiServer === 'rotogravure 2') {
      var newpath = './static/uploads/roto2/' + files.file.originalFilename
    } else if (lokasiServer === 'rotogravure 3') {
      var newpath = './static/uploads/roto3/' + files.file.originalFilename
    } else if (lokasiServer === 'rotogravure tinta') {
      var newpath = './static/uploads/rototinta/' + files.file.originalFilename
    }

    mv(oldpath, newpath, function (err) {
      if (err) {
        throw err
      }
      return res.status(200).send('success')
    })
  })
}

module.exports.getAllFiles = async (req, res) => {
  const lokasiServer = req.params.lokasi

  let directoryPath = './static/uploads/roto1'

  if (lokasiServer === 'rotogravure 2') {
    directoryPath = './static/uploads/roto2'
  } else if (lokasiServer === 'rotogravure 3') {
    directoryPath = './static/uploads/roto3'
  } else if (lokasiServer === 'rotogravure tinta') {
    directoryPath = './static/uploads/rototinta'
  }

  await fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: 'Unable to scan files!',
      })
    }

    let fileInfos = []

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: directoryPath + file,
      })
    })

    res.status(200).send(fileInfos)
  })
}

module.exports.deleteFile = async (req, res) => {
  const filename = req.params.name
  const lokasiServer = req.params.lokasi

  let directoryPath = './static/uploads/roto1/'

  if (lokasiServer === 'rotogravure 2') {
    directoryPath = './static/uploads/roto2/'
  } else if (lokasiServer === 'rotogravure 3') {
    directoryPath = './static/uploads/roto3/'
  } else if (lokasiServer === 'rotogravure tinta') {
    directoryPath = './static/uploads/rototinta/'
  }

  fs.unlink(directoryPath + filename, (err) => {
    if (err) {
      res.status(404).send('error')
    } else {
      return res.status(200).send('success')
    }
  })
}

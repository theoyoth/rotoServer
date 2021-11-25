const fs = require('fs')
const https = require('https')
const path = require('path')
const multer = require('multer')
const baseUrl = 'http://localhost:3000/server/document/list/'

module.exports.uploadFiledoc = async (req, res) => {
  try {
    return res.json({ status: 200, msg: 'data berhasil di upload' })
  } catch (err) {
    return res.json({ errmsg: 'data tidak ter-upload' })
  }
}

module.exports.getAllFiles = async (req, res) => {
  const directoryPath = './uploads/'
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
        url: baseUrl + file,
      })
    })

    res.send(fileInfos)
  })
}

module.exports.downloadFile = async (req, res) => {
  const filename = req.params.name
  const directoryPath = './uploads/'
  res.download(directoryPath + filename, filename, (err) => {
    if (err) {
      res.status(404).send({
        errmsg: 'tidak bisa menemukan file' + err,
      })
    }
  })
}

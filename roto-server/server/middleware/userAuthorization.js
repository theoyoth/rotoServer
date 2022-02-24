const jwt = require('jsonwebtoken')
const pool = require('../db.js')
const dotenv = require('dotenv')
dotenv.config()

module.exports.isAuthent = async (req, res, next) => {
  if (req.headers.authorization) next()
  else return res.send('no authenticated')
}

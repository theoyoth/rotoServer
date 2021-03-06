const express = require('express')
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const rute = require('./routes/route')
const app = express()
app.use(cookieParser())

global.__basedir = __dirname

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
)
app.use(
  session({
    secret: 'codesecretforauth',
    saveUninitialized: true,
    resave: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(rute)

module.exports = {
  path: '/server',
  handler: app,
}

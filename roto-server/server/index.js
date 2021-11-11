const express = require('express')
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser')
// const { loadNuxt, build } = require('nuxt')
// const { flash } = require('express-flash-message')
const flash = require('connect-flash')
const rute = require('./routes/route')
const app = express()
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
)
// app.use(
//   session({
//     secret: 'codesecretforauth',
//     saveUninitialized: true,
//     resave: true,
//     cookie: {
//       maxAge: 3600000,
//     },
//   })
// )
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUT, PATCH, DELETE'
//   )
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, authorization')
//   next()
// })
app.use(rute)
app.use(flash())

module.exports = {
  path: '/server',
  handler: app,
}

// if(require.main === module){
//     const port = 3001
//     app.listen(port,() => console.log(`live on port ${port}`))
// }

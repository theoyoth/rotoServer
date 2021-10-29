const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { loadNuxt, build } = require('nuxt')
const { flash } = require('express-flash-message')
const rute = require('./routes/route')
const app = express()
const isDev = 'development' !== 'production'
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(rute)

// async function start() {
// // We get Nuxt instance
// const nuxt = await loadNuxt('dev')

// // Render every route with Nuxt
// app.use(nuxt.render)

// // Build only in dev mode with hot-reloading
// if (isDev) {
//   build(nuxt)
// }
// }
// start()

module.exports = {
  path: '/server',
  handler: app,
}

// if(require.main === module){
//     const port = 3001
//     app.listen(port,() => console.log(`live on port ${port}`))
// }

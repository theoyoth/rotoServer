const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const rute = require('./routes/route')
const app = express()
// const bodyParser = require('body-parser')

app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
)

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(rute)

module.exports = {
  path: '/server',
  handler: app,
}

// if(require.main === module){
//     const port = 3001
//     app.listen(port,() => console.log(`live on port ${port}`))
// }

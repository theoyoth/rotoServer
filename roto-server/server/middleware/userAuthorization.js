const jwt = require('jsonwebtoken')
const pool = require('../db.js')
const dotenv = require('dotenv')
dotenv.config()

module.exports.isAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  console.log(req.headers)
  // if (!authHeader) {
  //   const error = new Error('No authenticated.')
  //   error.statusCode = 401
  //   throw error
  // }

  // const token = authHeader.split('')[1]
  // try {
  //   const verified = jwt.verify(token, process.env.TOKEN_KEY)
  // } catch (err) {
  //   err.statusCode = 500
  //   throw err
  // }

  // if (!verified) {
  //   const error = new Error('Not authenticated.')
  //   error.statusCode = 401
  //   throw error
  // }
  // req.nama = verified.nama
  if (authHeader) {
    jwt.verify(
      authHeader.replace(/^Bearer\s/, ''),
      process.env.TOKEN_KEY,
      function (err, decoded) {
        if (err) {
          return res.status(401).json({ message: 'unauthorized' })
        } else {
          return res.json({ user: decoded })
        }
      }
    )
  } else {
    return res.status(401).json({ message: 'no unauthorized' })
  }
  next()

  // console.log('masuk middle')
  // next()
  // if (!verified) return res.status(401).send('unAuthenticated')
  // let conn = await pool.getConnection()
  // const user = await conn.query(`SELECT * FROM users WHERE id=${verified.id}`)
  // const { sandi, ...data } = await user[0]
  // res.send(data)
  // next()
  //   const authHeader = req.headers.authorization
  //   console.log(req.headers)
  //   if (!authHeader) {
  //     const error = new Error('Not authenticated.')
  //     error.statusCode = 401
  //     throw error
  //     res.redirect('/')
  //   }
  //   const token = authHeader.split(' ')[1]
  //   let decodedToken
  //   try {
  //     decodedToken = jwt.verify(token, process.env.TOKEN_KEY)
  //   } catch (err) {
  //     err.statusCode = 500
  //     throw err
  //   }
  //   if (!decodedToken) {
  //     const error = new Error('Not authenticated.')
  //     error.statusCode = 401
  //     throw error
  //   }
  //   req.userId = decodedToken.userId
  //   next()
}

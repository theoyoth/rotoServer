const pool = require('../db.js')
const nuxt = require('nuxt')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports.login = async (req, res) => {
    let conn
    const jwtToken= '********************';
    try{
        const nama = req.body.nama
        const sandi = req.body.sandi
        conn = await pool.getConnection() 
        const data = await conn.query(`SELECT * FROM users WHERE nama='${nama}'`) 
        if (data) {
            res.send({
              type: 'success',
              message: 'User logged in.',
              user: {nama: data[0].nama},
              token: jwt.sign({nama: data[0].nama}, jwtToken)
            })
          } else res.status(403)

        // if(nama === data[0].nama && sandi === data[0].sandi){
        //     res.redirect('/homepage')
        // }
        // else{
        //     res.redirect('/')
        // }
    }
    catch(err){
        console.log(err)
    } finally {
        if (conn) return conn.end()
    }
}

module.exports.loginget = async (req, res)=>{
    const token = req.headers['x-access-token']
    if (!token) return res.status(400).json({type: 'error', message: 'x-access-token header not found.'})
    
}
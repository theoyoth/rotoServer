const pool = require('../db.js')

// module.exports.loginForm = (req, res) => {
//     const username = req.body.username
//     const password = req.body.password

//     const user = {
//         name: username,
//         password: password
//     }
//     res.json(user)

    // pool.getConnection()
    //     .then(conn => {
    //         conn.query("SELECT * FROM user")
    //         .then(rows => {
    //             res.json(rows)
    //         })
    //         .catch(err => {
    //             return err
    //         })   
    //     })
// }

module.exports.users = async (req, res) => {
    try{
        const conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM users")

        res.send(rows)
        
    }
    catch(err){
        throw err
    }
}
module.exports.lokasiserver = async (req, res) => {
    try{
        const conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM lokasi_server")

        res.send(rows)
        
    }
    catch(err){
        throw err
    }
}


module.exports.inputmaintenance = async (req, res) => {
    try{
        const nama = req.body.nama
        const tanggal = req.body.tanggal
        const suhu = req.body.suhu
        const kelembapan = req.body.kelembapan
        const ac = req.body.ac
        const ups = req.body.ups
        const baterai = req.body.baterai
        const network = req.body.network
        const server = req.body.server
        const keterangan = req.body.keterangan
        const conn = await pool.getConnection();
        const data = conn.query(`INSERT INTO maintenance VALUES ('','${nama}','${tanggal}','${suhu}','${kelembapan}','${ac}','${ups}','${baterai}','${network}','${server}','${keterangan}')`)
        res.redirect('/maintenance')
        

    }
    catch(err){
        throw err
    }
}

module.exports.getInputMaintenance = async (req, res) => {
    try{
        const conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM maintenance")

        res.send(rows)
        
    }
    catch(err){
        throw err
    }
}
module.exports.deleteMaintenance = async (req, res) => {
    try{
        const conn = await pool.getConnection();
        await conn.query(`DELETE FROM maintenance WHERE id=${req.params.id}`)

        res.redirect('/maintenance')
        
    }
    catch(err){
        throw err
    }
}

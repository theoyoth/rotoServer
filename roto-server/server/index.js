const express = require('express')
const rute = require('./routes/route')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(rute)
// app.get("/", (req,res) =>{
//     pool.getConnection()
//     .then(conn => {
//         conn.query("SELECT * FROM tb_mahasiswa")
//         .then(rows => {
//             // res.send(rows)
//             res.json(rows)
//         })
//         .catch(err => {
//             return err
//         })     
//     })

//     // pool.then(conn => {
//     //     conn.query("SELECT * FROM tb_mahasiswa")
//     //     .then(rows => {
//     //         res.send(rows)
//     //     })
//     //     .catch(err => {
//     //         throw err
//     //     })
//     // })
// })
// app.get("/delete/:id", (req,res) =>{
//     pool.getConnection()
//     .then(conn => {
//         conn.query("DELETE FROM tb_mahasiswa WHERE id = "+req.params.id)
//         .then(rows => {
//             res.send(rows)
//         })
//         .catch(err => {
//             return err
//         })     
//     })
// })
// app.get("/find/:id", (req,res) =>{
//     pool.getConnection()
//     .then(conn => {
//         conn.query("SELECT * FROM tb_mahasiswa WHERE id = "+req.params.id)
//         .then(rows => {
//             res.send(rows)
//         })
//         .catch(err => {
//             return err
//         })     
//     })
// })

module.exports = {
    path:'/server',
    handler: app
}
// if(require.main === module){
//     const port = 3001
//     app.listen(port,() => console.log(`live on port ${port}`))
// }
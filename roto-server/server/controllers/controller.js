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
// module.exports.users = (req, res) => {
//     pool.getConnection()
//         .then(conn => {
//             conn.query("SELECT * FROM tb_mahasiswa")
//             .then(rows => {
//                 // res.send(rows)
//                 res.json(rows)
//             })
//             .catch(err => {
//                 return err
//             })   
//         })
// }

module.exports.users = async (req, res) => {
    try{
        const conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM tb_mahasiswa")

        res.send(rows)
    }
    catch(err){
        throw err
    }
}

module.exports.delete = (req, res) => {
    pool.getConnection()
        .then(conn => {
            conn.query("DELETE FROM tb_mahasiswa WHERE id ="+req.params.id)
            .then(rows => {
                // res.send(rows)
                res.json(rows)
            })
            .catch(err => {
                return err
            })   
        })
}
module.exports.findOne = (req, res) => {
    pool.getConnection()
        .then(conn => {
            conn.query("SELECT * FROM tb_mahasiswa WHERE id ="+req.params.id)
            .then(rows => {
                // res.send(rows)
                res.json(rows)
            })
            .catch(err => {
                return err
            })   
        })
}
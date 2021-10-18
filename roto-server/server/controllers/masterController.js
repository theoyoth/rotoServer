const pool = require('../db.js')

module.exports.masterserver = async (req, res) => {
    try{
        const conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM master_Server")

        res.send(rows)
        
    }
    catch(err){
        throw err
    }
}
module.exports.inputmasterserver = async (req, res) => {
    try{
        const produk = req.body.produk
        const merek = req.body.merek
        const model = req.body.model
        const processor = req.body.processor
        const memori = req.body.memori
        const internalStorage = req.body.internalStorage
        const networkController = req.body.networkController
        const storage = req.body.storage
        const sumberDayaListrik = req.body.sumberDayaListrik
        const tahun = req.body.tahun
        const garansi = req.body.garansi

        const conn = await pool.getConnection();
        const data = conn.query(`INSERT INTO master_server VALUES ('','${produk}','${merek}','${model}','${processor}','${memori}','${internalStorage}','${networkController}','${storage}','${sumberDayaListrik}','${tahun}','${garansi}')`)

        res.redirect('/master/server')
        
    }
    catch(err){
        throw err
    }
}
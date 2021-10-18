const pathController = require('../controllers/controller.js')
const masterController = require('../controllers/masterController.js')
const express = require('express')
const app = express()

app.get('/', pathController.users)
app.get('/lokasiserver', pathController.lokasiserver)
app.get('/masterserver', masterController.masterserver)
app.post('/inputmaintenance', pathController.inputmaintenance)
app.get('/inputmaintenance', pathController.getInputMaintenance)
// app.post('/inputmaintenance/hapus/:id', pathController.deleteMaintenance)
app.post('/master/inputserver', masterController.inputmasterserver)

module.exports = app

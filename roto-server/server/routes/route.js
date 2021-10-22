const pathController = require('../controllers/controller.js')
const masterController = require('../controllers/masterController.js')
const loginController = require('../controllers/loginController.js')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.get('/', pathController.users)
app.get('/lokasiserver', pathController.lokasiserver)
app.get('/masterserver', masterController.masterserver)
app.post('/inputmaintenance', pathController.inputmaintenance)
app.get('/inputmaintenance', pathController.getInputMaintenance)
// app.post('/inputmaintenance/hapus/:id', pathController.deleteMaintenance)
app.post('/master/inputserver', masterController.inputmasterserver)
app.get('/masterrak', masterController.masterrak)
app.post('/master/inputrak', masterController.inputmasterrak)
app.get('/masterups', masterController.masterups)
app.post('/master/inputups', masterController.inputmasterups)
app.get('/masterbaterai', masterController.masterbaterai)
app.post('/master/inputbaterai', masterController.inputmasterbaterai)
app.get('/masterac', masterController.masterac)
app.post('/master/inputac', masterController.inputmasterac)
app.get('/mastercctv', masterController.mastercctv)
app.post('/master/inputcctv', masterController.inputmastercctv)
app.get('/masternetwork', masterController.masternetwork)
app.post('/master/inputnetwork', masterController.inputmasternetwork)
app.get('/masterapar', masterController.masterapar)
app.post('/master/inputapar', masterController.inputmasterapar)
app.get('/mastermonitor', masterController.mastermonitor)
app.post('/master/inputmonitor', masterController.inputmastermonitor)
app.get('/masterkeyboard', masterController.masterkeyboard)
app.post('/master/inputkeyboard', masterController.inputmasterkeyboard)
app.get('/mastermouse', masterController.mastermouse)
app.post('/master/inputmouse', masterController.inputmastermouse)
app.get('/masternas', masterController.masternas)
app.post('/master/inputnas', masterController.inputmasternas)
app.get('/mastergenset', masterController.mastergenset)
app.post('/master/inputgenset', masterController.inputmastergenset)

app.post('/master/delete/:id/:nama', masterController.deletemaster)

app.get('/master/update/updateserver/:id', masterController.masterservergetdata)
app.post(
  '/master/serve/update/updateserver',
  masterController.inputmasterserverupdate
)

// login
app.post('/login', loginController.login)
module.exports = app
app.get('/login', loginController.loginget)
module.exports = app

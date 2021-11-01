const maintenanceController = require('../controllers/maintenanceController.js')
const masterController = require('../controllers/masterController.js')
const authController = require('../controllers/authController.js')
const { auth } = require('../verifyToken.js')
const { userEdp } = require('../middleware/userAuthorization')
const { check, validationResult } = require('express-validator')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

// app.get('/', maintenanceController.users)
// app.get('/lokasiserver', maintenanceController.lokasiserver)
app.get('/masterserver', masterController.masterserver)
app.post('/inputmaintenance', maintenanceController.inputmaintenance)
app.get('/inputmaintenance', maintenanceController.getInputMaintenance)
// app.post('/inputmaintenance/hapus/:id', maintenanceController.deleteMaintenance)
app.post(
  '/master/inputserver',
  [
    check('produk').isAlpha().withMessage('harus berupa huruf'),
    check('merek').isAlpha().withMessage('harus berupa huruf'),
    check('model')
      .isAlphanumeric()
      .withMessage('harus berupa angka dan huruf bukan simbol'),
    check('processor')
      .isAlpha()
      .withMessage('harus berupa angka dan huruf bukan simbol'),
    check('memori').isNumeric().withMessage('harus berupa angka'),
    check('internalStorage').isNumeric().withMessage('harus angka'),
    check('networkController')
      .isAlphanumeric()
      .withMessage('harus berupa huruf'),
    check('storage').isNumeric().withMessage('harus berupa angka'),
    check('sumberDayaListrik').isNumeric().withMessage('harus berupa angka'),
    check('tahun').isDate(),
    check('garansi').isDate(),
  ],
  masterController.inputmasterserver
)
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

// update master
app.get('/master/update/updateserver/:id', masterController.masterservergetdata)
app.post(
  '/master/server/update/updateserver',
  masterController.inputmasterserverupdate
)
app.get('/master/update/updaterak/:id', masterController.masterrakgetdata)
app.post('/master/rak/update/updaterak', masterController.inputmasterrakupdate)

app.get('/master/update/updateups/:id', masterController.masterupsgetdata)
app.post('/master/ups/update/updateups', masterController.inputmasterupsupdate)

app.get(
  '/master/update/updatebaterai/:id',
  masterController.masterbateraigetdata
)
app.post(
  '/master/baterai/update/updatebaterai',
  masterController.inputmasterbateraiupdate
)

app.get('/master/update/updateac/:id', masterController.masteracgetdata)
app.post('/master/ac/update/updateac', masterController.inputmasteracupdate)

app.get('/master/update/updatecctv/:id', masterController.mastercctvgetdata)
app.post(
  '/master/cctv/update/updatecctv',
  masterController.inputmastercctvupdate
)

app.get(
  '/master/update/updatenetwork/:id',
  masterController.masternetworkgetdata
)
app.post(
  '/master/network/update/updatenetwork',
  masterController.inputmasternetworkupdate
)

app.get('/master/update/updateapar/:id', masterController.masterapargetdata)
app.post(
  '/master/apar/update/updateapar',
  masterController.inputmasteraparupdate
)

app.get(
  '/master/update/updatemonitor/:id',
  masterController.mastermonitorgetdata
)
app.post(
  '/master/monitor/update/updatemonitor',
  masterController.inputmastermonitorupdate
)

app.get(
  '/master/update/updatekeyboard/:id',
  masterController.masterkeyboardgetdata
)
app.post(
  '/master/keyboard/update/updatekeyboard',
  masterController.inputmasterkeyboardupdate
)

app.get('/master/update/updatemouse/:id', masterController.mastermousegetdata)
app.post(
  '/master/mouse/update/updatemouse',
  masterController.inputmastermouseupdate
)

app.get('/master/update/updatenas/:id', masterController.masternasgetdata)
app.post('/master/nas/update/updatenas', masterController.inputmasternasupdate)

app.get('/master/update/updategenset/:id', masterController.mastergensetgetdata)
app.post(
  '/master/genset/update/updategenset',
  masterController.inputmastergensetupdate
)
// ===============================================================
// login
app.post('/login', authController.login)
// homepage when login success
app.get('/homepage', authController.homepage)
// logout
app.post('/logout', async (req, res) => {
  res.cookie('authtoken', '', { maxAge: 0 })
  res.send({
    message: 'you are success to logout',
  })
})

// cari barang
app.get('/cariserver', masterController.caribarangserver)
app.get('/carirak', masterController.caribarangrak)
app.get('/cariups', masterController.caribarangups)
app.get('/caribaterai', masterController.caribarangbaterai)
app.get('/cariac', masterController.caribarangac)
app.get('/caricctv', masterController.caribarangcctv)
app.get('/carinetwork', masterController.caribarangnetwork)
app.get('/cariapar', masterController.caribarangapar)
app.get('/carimonitor', masterController.caribarangmonitor)
app.get('/carikeyboard', masterController.caribarangkeyboard)
app.get('/carimouse', masterController.caribarangmouse)
app.get('/carinas', masterController.caribarangnas)
app.get('/carigenset', masterController.caribaranggenset)

module.exports = app

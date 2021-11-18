const maintenanceController = require('../controllers/maintenanceController.js')
const authController = require('../controllers/authController.js')
const userController = require('../controllers/userController.js')
const deleteController = require('../controllers/master/deleteController.js')
const updateController = require('../controllers/master/updateController.js')
const createdController = require('../controllers/master/createdController.js')
const readController = require('../controllers/master/readController.js')
const lokasiServer = require('../controllers/lokasiServer.js')
const { isAuthent } = require('../middleware/userAuthorization.js')
const { body, check, validationResult } = require('express-validator')
const express = require('express')
const router = express.Router()
// const app = express()

router.get('/masterserver/:lokasi/:id', readController.masterserver)

router.post('/master/inputserver', createdController.inputmasterserver)
router.get('/masterrak/:lokasi/:id', readController.masterrak)
router.post('/master/inputrak', createdController.inputmasterrak)
router.get('/masterups/:lokasi/:id', readController.masterups)
router.post('/master/inputups', createdController.inputmasterups)
router.get('/masterbaterai/:lokasi/:id', readController.masterbaterai)
router.post('/master/inputbaterai', createdController.inputmasterbaterai)
router.get('/masterac', readController.masterac)
router.post('/master/inputac', createdController.inputmasterac)
router.get('/mastercctv', readController.mastercctv)

router.post('/master/inputcctv', createdController.inputmastercctv)

router.get('/masternetwork', readController.masternetwork)
router.post('/master/inputnetwork', createdController.inputmasternetwork)
router.get('/masterapar', readController.masterapar)
router.post('/master/inputapar', createdController.inputmasterapar)
router.get('/mastermonitor', readController.mastermonitor)
router.post('/master/inputmonitor', createdController.inputmastermonitor)
router.get('/masterkeyboard', readController.masterkeyboard)
router.post('/master/inputkeyboard', createdController.inputmasterkeyboard)
router.get('/mastermouse', readController.mastermouse)
router.post('/master/inputmouse', createdController.inputmastermouse)
router.get('/masternas', readController.masternas)
router.post('/master/inputnas', createdController.inputmasternas)
router.get('/mastergenset', readController.mastergenset)
router.post('/master/inputgenset', createdController.inputmastergenset)
// detail master server =======================
router.get(
  '/master/server/detail/:lokasi/:id',
  readController.detailmasterserver
)
router.get('/master/ups/detail/:lokasi/:id', readController.detailmasterups)
router.get('/master/nas/detail/:lokasi/:id', readController.detailmasternas)
router.get('/master/ac/detail/:lokasi/:id', readController.detailmasterac)

// delete master ========================================
router.delete(
  '/master/server/delete/:id/:lokasi',
  deleteController.deletemasterserver
)
router.delete('/master/deleterak/:id/:lokasi', deleteController.deletemasterrak)
router.delete('/master/deleteups/:id/:lokasi', deleteController.deletemasterups)
router.delete(
  '/master/deletebaterai/:id/:lokasi',
  deleteController.deletemasterbaterai
)
router.delete('/master/deleteac/:id/:lokasi', deleteController.deletemasterac)
router.delete(
  '/master/deletecctv/:id/:lokasi',
  deleteController.deletemastercctv
)
router.delete(
  '/master/deletenetwork/:id/:lokasi',
  deleteController.deletemasternetwork
)
router.delete(
  '/master/deleteapar/:id/:lokasi',
  deleteController.deletemasterapar
)
router.delete(
  '/master/deletemonitor/:id/:lokasi',
  deleteController.deletemastermonitor
)
router.delete(
  '/master/deletekeyboard/:id/:lokasi',
  deleteController.deletemasterkeyboard
)
router.delete(
  '/master/deletemouse/:id/:lokasi',
  deleteController.deletemastermouse
)
router.delete('/master/deletenas/:id/:lokasi', deleteController.deletemasternas)
router.delete(
  '/master/deletegenset/:lokasi/:id/:lokasi',
  isAuthent,
  deleteController.deletemastergenset
)

// update master ========================================
router.get(
  '/master/update/updateserver/:id/:lokasi',
  updateController.masterservergetdata
)
router.post('/master/server/update', updateController.inputmasterserverupdate)
router.get(
  '/master/update/updaterak/:id/:lokasi',
  updateController.masterrakgetdata
)
router.post(
  '/master/rak/update/updaterak/:id',
  updateController.inputmasterrakupdate
)

router.get(
  '/master/update/updateups/:id/:lokasi',
  updateController.masterupsgetdata
)
router.post(
  '/master/ups/update/updateups',
  updateController.inputmasterupsupdate
)

router.get(
  '/master/update/updatebaterai/:id/:lokasi',
  updateController.masterbateraigetdata
)
router.post(
  '/master/baterai/update/updatebaterai',
  updateController.inputmasterbateraiupdate
)

router.get(
  '/master/update/updateac/:id/:lokasi',
  updateController.masteracgetdata
)
router.post('/master/ac/update/updateac', updateController.inputmasteracupdate)

router.get('/master/update/updatecctv/:id', updateController.mastercctvgetdata)
router.post(
  '/master/cctv/update/updatecctv',
  updateController.inputmastercctvupdate
)

router.get(
  '/master/update/updatenetwork/:id',
  updateController.masternetworkgetdata
)
router.post(
  '/master/network/update/updatenetwork',
  updateController.inputmasternetworkupdate
)

router.get('/master/update/updateapar/:id', updateController.masterapargetdata)
router.post(
  '/master/apar/update/updateapar',
  updateController.inputmasteraparupdate
)

router.get(
  '/master/update/updatemonitor/:id',
  updateController.mastermonitorgetdata
)
router.post(
  '/master/monitor/update/updatemonitor',
  updateController.inputmastermonitorupdate
)

router.get(
  '/master/update/updatekeyboard/:id',
  updateController.masterkeyboardgetdata
)
router.post(
  '/master/keyboard/update/updatekeyboard',
  updateController.inputmasterkeyboardupdate
)

router.get(
  '/master/update/updatemouse/:id',
  updateController.mastermousegetdata
)
router.post(
  '/master/mouse/update/updatemouse',
  updateController.inputmastermouseupdate
)

router.get('/master/update/updatenas/:id', updateController.masternasgetdata)
router.post(
  '/master/nas/update/updatenas',
  updateController.inputmasternasupdate
)

router.get(
  '/master/update/updategenset/:id',
  updateController.mastergensetgetdata
)
router.post(
  '/master/genset/update/updategenset',
  updateController.inputmastergensetupdate
)
// ===============================================================
// login
router.post('/login', authController.login)
// homepage when login success
router.get('/homepage', isAuthent, authController.homepage)
// logout
router.post('/logout', authController.logout)

// cari barang ===================================================
router.get('/cariserver/:cari/:lokasi', readController.caribarangserver)
router.get('/carirak/:cari/:lokasi', readController.caribarangrak)
router.get('/cariups', readController.caribarangups)
router.get('/caribaterai', readController.caribarangbaterai)
router.get('/cariac', readController.caribarangac)
router.get('/caricctv', readController.caribarangcctv)
router.get('/carinetwork', readController.caribarangnetwork)
router.get('/cariapar', readController.caribarangapar)
router.get('/carimonitor', readController.caribarangmonitor)
router.get('/carikeyboard', readController.caribarangkeyboard)
router.get('/carimouse', readController.caribarangmouse)
router.get('/carinas', readController.caribarangnas)
router.get('/carigenset', readController.caribaranggenset)

// ===============================================
// MAINTENANCE SERVER
router.post('/inputmaintenance', maintenanceController.inputmaintenance)
router.get(
  '/inputmaintenance/:lokasi/:id',
  maintenanceController.getAllMaintenance
)
router.delete(
  '/maintenance/delete/:id/:lokasi',
  maintenanceController.deleteMaintenance
)
router.get(
  '/maintenance/carimaintenance/:value/:lokasi/:id',
  maintenanceController.carimaintenance
)
router.get(
  '/maintenance/getdatamaintenanceupdate/:id/:lokasi',
  maintenanceController.getdatamaintenanceupdate
)
router.post(
  '/maintenance/update/updatemaintenance',
  maintenanceController.updateMaintenance
)
router.get(
  '/maintenance/detail/:lokasi/:id',
  maintenanceController.detailMaintenance
)
router.get(
  '/maintenance/security/:lokasi',
  maintenanceController.mainteananceuser
)

router.get('/lokasi', lokasiServer.lokasiserver)
router.get('/users', userController.getAllUsers)
router.get('/cariuser', userController.cariuser)

module.exports = router

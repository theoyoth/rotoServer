const maintenanceController = require('../controllers/maintenanceController.js')
const authController = require('../controllers/authController.js')
const userController = require('../controllers/userController.js')
const deleteController = require('../controllers/master/deleteController.js')
const updateController = require('../controllers/master/updateController.js')
const createdController = require('../controllers/master/createdController.js')
const readController = require('../controllers/master/readController.js')
// == TAMBAH BARANG
const readtambahController = require('../controllers/inout/tambah/readController.js')
const createdtambahController = require('../controllers/inout/tambah/createdController.js')
const updatetambahController = require('../controllers/inout/tambah/updateController.js')
const deletetambahController = require('../controllers/inout/tambah/deleteController.js')
// == AMBIL BARANG
const readambilController = require('../controllers/inout/ambil/readController.js')
const createdambilController = require('../controllers/inout/ambil/createdController.js')
const updateambilController = require('../controllers/inout/ambil/updateController.js')
const deleteambilController = require('../controllers/inout/ambil/deleteController.js')
// ===================================
// == GANTI BARANG
const readgantiController = require('../controllers/inout/ganti/readController.js')
const createdgantiController = require('../controllers/inout/ganti/createdController.js')
const updategantiController = require('../controllers/inout/ganti/updateController.js')
const deletegantiController = require('../controllers/inout/ganti/deleteController.js')
// ===================================
// == UPLOAD FILE
const fileController = require('../controllers/file/fileController.js')
// ===================================
const lokasiServer = require('../controllers/lokasiServer.js')
const { isAuthent } = require('../middleware/userAuthorization.js')
const { body, check, validationResult } = require('express-validator')

const express = require('express')
const router = express.Router()

// MAP
const mapController = require('../controllers/mapController.js')

// get master ==========================
router.get('/masterserver/:lokasi/:id', isAuthent, readController.masterserver)
router.get('/masterrak/:lokasi/:id', isAuthent, readController.masterrak)
router.get('/masterups/:lokasi/:id', isAuthent, readController.masterups)
router.get(
  '/masterbaterai/:lokasi/:id',
  isAuthent,
  readController.masterbaterai
)
router.get('/masterac/:lokasi/:id', isAuthent, readController.masterac)
router.get('/mastercctv/:lokasi/:id', isAuthent, readController.mastercctv)
router.get(
  '/masternetwork/:lokasi/:id',
  isAuthent,
  readController.masternetwork
)
router.get('/masterapar/:lokasi/:id', isAuthent, readController.masterapar)
router.get(
  '/mastermonitor/:lokasi/:id',
  isAuthent,
  readController.mastermonitor
)
router.get(
  '/masterkeyboard/:lokasi/:id',
  isAuthent,
  readController.masterkeyboard
)
router.get('/mastermouse/:lokasi/:id', isAuthent, readController.mastermouse)
router.get('/masternas/:lokasi/:id', isAuthent, readController.masternas)
router.get('/mastergenset/:lokasi/:id', isAuthent, readController.mastergenset)

// ==========================
// input master
router.post(
  '/master/inputserver',
  isAuthent,
  createdController.inputmasterserver
)
router.post('/master/inputrak', isAuthent, createdController.inputmasterrak)
router.post('/master/inputups', isAuthent, createdController.inputmasterups)
router.post(
  '/master/inputbaterai',
  isAuthent,
  createdController.inputmasterbaterai
)
router.post('/master/inputac', isAuthent, createdController.inputmasterac)
router.post('/master/inputcctv', isAuthent, createdController.inputmastercctv)
router.post(
  '/master/inputnetwork',
  isAuthent,
  createdController.inputmasternetwork
)
router.post('/master/inputapar', isAuthent, createdController.inputmasterapar)
router.post(
  '/master/inputmonitor',
  isAuthent,
  createdController.inputmastermonitor
)
router.post(
  '/master/inputkeyboard',
  isAuthent,
  createdController.inputmasterkeyboard
)
router.post('/master/inputmouse', isAuthent, createdController.inputmastermouse)
router.post('/master/inputnas', isAuthent, createdController.inputmasternas)
router.post(
  '/master/inputgenset',
  isAuthent,
  createdController.inputmastergenset
)
// detail master server =======================
router.get(
  '/master/server/detail/:lokasi/:id',
  isAuthent,
  readController.detailmasterserver
)
router.get(
  '/master/ups/detail/:lokasi/:id',
  isAuthent,
  readController.detailmasterups
)
router.get(
  '/master/nas/detail/:lokasi/:id',
  isAuthent,
  readController.detailmasternas
)
router.get(
  '/master/ac/detail/:lokasi/:id',
  isAuthent,
  readController.detailmasterac
)

// delete master ========================================
router.delete(
  '/master/server/delete/:id/:lokasi',
  isAuthent,
  deleteController.deletemasterserver
)
router.delete(
  '/master/deleterak/:id/:lokasi',
  isAuthent,
  deleteController.deletemasterrak
)
router.delete(
  '/master/deleteups/:id/:lokasi',
  isAuthent,
  deleteController.deletemasterups
)
router.delete(
  '/master/deletebaterai/:id/:lokasi',
  isAuthent,
  deleteController.deletemasterbaterai
)
router.delete(
  '/master/deleteac/:id/:lokasi',
  isAuthent,
  deleteController.deletemasterac
)
router.delete(
  '/master/deletecctv/:id/:lokasi',
  isAuthent,
  deleteController.deletemastercctv
)
router.delete(
  '/master/deletenetwork/:id/:lokasi',
  isAuthent,
  deleteController.deletemasternetwork
)
router.delete(
  '/master/deleteapar/:id/:lokasi',
  isAuthent,
  deleteController.deletemasterapar
)
router.delete(
  '/master/deletemonitor/:id/:lokasi',
  isAuthent,
  deleteController.deletemastermonitor
)
router.delete(
  '/master/deletekeyboard/:id/:lokasi',
  isAuthent,
  deleteController.deletemasterkeyboard
)
router.delete(
  '/master/deletemouse/:id/:lokasi',
  isAuthent,
  deleteController.deletemastermouse
)
router.delete(
  '/master/nas/delete/:id/:lokasi',
  isAuthent,
  deleteController.deletemasternas
)
router.delete(
  '/master/genset/delete/:id/:lokasi',
  isAuthent,
  deleteController.deletemastergenset
)

// update master ========================================
router.get(
  '/master/update/updateserver/:id/:lokasi',
  isAuthent,
  updateController.masterservergetdata
)
router.post(
  '/master/server/update',
  isAuthent,
  updateController.inputmasterserverupdate
)
router.get(
  '/master/rak/update/:id/:lokasi',
  isAuthent,
  updateController.masterrakgetdata
)
router.post(
  '/master/rak/update/',
  isAuthent,
  updateController.inputmasterrakupdate
)

router.get(
  '/master/ups/update/:id/:lokasi',
  isAuthent,
  updateController.masterupsgetdata
)
router.post(
  '/master/ups/update',
  isAuthent,
  updateController.inputmasterupsupdate
)

router.get(
  '/master/baterai/update/:id/:lokasi',
  isAuthent,
  updateController.masterbateraigetdata
)
router.post(
  '/master/baterai/update',
  isAuthent,
  updateController.inputmasterbateraiupdate
)

router.get(
  '/master/ac/update/:id/:lokasi',
  isAuthent,
  updateController.masteracgetdata
)
router.post(
  '/master/ac/update',
  isAuthent,
  updateController.inputmasteracupdate
)

router.get(
  '/master/cctv/update/:id/:lokasi',
  isAuthent,
  updateController.mastercctvgetdata
)
router.post(
  '/master/cctv/update',
  isAuthent,
  updateController.inputmastercctvupdate
)

router.get(
  '/master/network/update/:id/:lokasi',
  isAuthent,
  updateController.masternetworkgetdata
)
router.post(
  '/master/network/update',
  isAuthent,
  updateController.inputmasternetworkupdate
)

router.get(
  '/master/apar/update/:id/:lokasi',
  isAuthent,
  updateController.masterapargetdata
)
router.post(
  '/master/apar/update',
  isAuthent,
  updateController.inputmasteraparupdate
)

router.get(
  '/master/monitor/update/:id/:lokasi',
  isAuthent,
  updateController.mastermonitorgetdata
)
router.post(
  '/master/monitor/update',
  isAuthent,
  updateController.inputmastermonitorupdate
)

router.get(
  '/master/keyboard/update/:id/:lokasi',
  isAuthent,
  updateController.masterkeyboardgetdata
)
router.post(
  '/master/keyboard/update',
  isAuthent,
  updateController.inputmasterkeyboardupdate
)

router.get(
  '/master/mouse/update/:id/:lokasi',
  isAuthent,
  updateController.mastermousegetdata
)
router.post(
  '/master/mouse/update',
  isAuthent,
  updateController.inputmastermouseupdate
)

router.get(
  '/master/nas/update/:id/:lokasi',
  isAuthent,
  updateController.masternasgetdata
)
router.post(
  '/master/nas/update',
  isAuthent,
  updateController.inputmasternasupdate
)

router.get(
  '/master/genset/update/:id/:lokasi',
  isAuthent,
  updateController.mastergensetgetdata
)
router.post(
  '/master/genset/update',
  isAuthent,
  updateController.inputmastergensetupdate
)
// ===============================================================
// login
router.post('/login', authController.login)
// homepage when login success
router.get('/home', isAuthent, authController.homepage)
// logout
router.get('/logout', authController.logout)
// forgot password
router.post('/forgotpassword', authController.forgotPassword)
router.post('/resetpassword', authController.resetPassword)

// ===============================================
// MAINTENANCE SERVER
router.post(
  '/inputmaintenance',
  isAuthent,
  maintenanceController.inputmaintenance
)
router.get(
  '/inputmaintenance/:lokasi/:id',
  isAuthent,
  maintenanceController.getAllMaintenance
)
router.delete(
  '/maintenance/delete/:id/:lokasi',
  isAuthent,
  maintenanceController.deleteMaintenance
)
router.get(
  '/maintenance/getdatamaintenanceupdate/:id/:lokasi',
  isAuthent,
  maintenanceController.getdatamaintenanceupdate
)
router.post(
  '/maintenance/update/updatemaintenance',
  isAuthent,
  maintenanceController.updateMaintenance
)
router.get(
  '/maintenance/detail/:lokasi/:id',
  isAuthent,
  maintenanceController.detailMaintenance
)
router.get(
  '/maintenance/alldata/:lokasi',
  isAuthent,
  maintenanceController.allMaintenanceEdpSecurity
)
// hasil maintenance teknisi listrik dan ac untuk admin teknisi
router.get(
  '/maintenance/teknisilistrik/:lokasi',
  isAuthent,
  maintenanceController.getDataTeknisilistrik
)
router.get(
  '/maintenance/teknisiac/:lokasi',
  isAuthent,
  maintenanceController.getDataTeknisiac
)

router.get('/lokasi', isAuthent, lokasiServer.lokasiserver)

// USER
router.get('/users/:lokasi', userController.getAllUsersByLocation)
router.get('/users', userController.getAllUsers)

// mengatur user oleh PA
// tambah user
router.post('/user/tambah', isAuthent, userController.addUser)
// hapus user
router.delete('/user/delete/:id/:lokasi', isAuthent, userController.deleteUser)
// ambil data user tertentu
router.get('/user/:id', isAuthent, userController.getUser)
// update data user
router.post('/user/update', isAuthent, userController.updateUser)
// ambil nama user dengan role PA
router.get('/users/pa/:lokasi', isAuthent, userController.getUserPa)

// =====================================
// ==============IN-OUT BARANG==========
// TAMBAH BARANG
// ambil barang
router.get(
  '/inout/tambahbarang/:lokasi/:id',
  isAuthent,
  readtambahController.getTambahBarang
)
// input barang
router.post('/tambahbarang/input', isAuthent, createdtambahController.addBarang)
// delete
router.delete(
  '/inout/tambahbarang/delete/:id/:lokasi',
  isAuthent,
  deletetambahController.deleteBarang
)
// update
router.get(
  '/inout/tambahbarang/update/:id/:lokasi',
  isAuthent,
  updatetambahController.getDataBarang
)
router.post(
  '/inout/tambahbarang/update',
  isAuthent,
  updatetambahController.updateDataBarang
)

// ===========================================
// AMBIL BARANG
// ambil barang
router.get(
  '/inout/ambilbarang/:lokasi/:id',
  isAuthent,
  readambilController.getAmbilBarang
)
// input barang
router.post(
  '/inout/ambilbarang/input',
  isAuthent,
  createdambilController.addBarang
)
// delete
router.delete(
  '/inout/ambilbarang/delete/:id/:lokasi',
  isAuthent,
  deleteambilController.deleteBarang
)
// update
router.get(
  '/inout/ambilbarang/update/:id/:lokasi',
  isAuthent,
  updateambilController.getDataBarang
)
router.post(
  '/inout/ambilbarang/update',
  isAuthent,
  updateambilController.updateDataBarang
)

// ===========================================
// GANTI BARANG
// ambil barang
router.get(
  '/inout/gantibarang/:lokasi/:id',
  isAuthent,
  readgantiController.getGantiBarang
)
// input barang
router.post(
  '/inout/gantibarang/input',
  isAuthent,
  createdgantiController.addBarang
)
// delete
router.delete(
  '/inout/gantibarang/delete/:id/:lokasi',
  isAuthent,
  deletegantiController.deleteBarang
)
// update
router.get(
  '/inout/gantibarang/update/:id/:lokasi',
  isAuthent,
  updategantiController.getDataBarang
)
router.post(
  '/inout/gantibarang/update',
  isAuthent,
  updategantiController.updateDataBarang
)

// detail ganti barang ==========
router.get(
  '/inout/gantibarang/detail/:lokasi/:id',
  isAuthent,
  readgantiController.detailGantiBarang
)
// document
router.post('/document/upload', isAuthent, fileController.uploadFiledoc)

router.get(
  '/document/list/:lokasi/:folder',
  isAuthent,
  fileController.getAllFiles
)

// router.get('/document/list/:name', fileController.downloadFile)
router.delete(
  '/document/list/:name/:lokasi/:folder',
  isAuthent,
  fileController.deleteFile
)
// adding folder
router.post('/document/addFolder', isAuthent, fileController.addFolder)

// list folder
router.get(
  '/document/listDirectory/:lokasi',
  isAuthent,
  fileController.readDirectory
)
// delete folder
router.delete(
  '/document/folder/:foldername/:lokasi',
  isAuthent,
  fileController.deleteFolder
)

// MAP
router.get('/masterserver/:lokasi', isAuthent, mapController.getListServer)
router.get('/masterups/:lokasi', isAuthent, mapController.getListUps)
router.get('/masterrak/:lokasi', isAuthent, mapController.getListRak)
router.get('/masterbaterai/:lokasi', isAuthent, mapController.getListBaterai)
router.get('/masterac/:lokasi', isAuthent, mapController.getListAc)
router.get('/mastercctv/:lokasi', isAuthent, mapController.getListCctv)
router.get('/masterapar/:lokasi', isAuthent, mapController.getListApar)
router.get('/masternetwork/:lokasi', isAuthent, mapController.getListNetwork)
router.get('/mastermouse/:lokasi', isAuthent, mapController.getListMouse)
router.get('/mastermonitor/:lokasi', isAuthent, mapController.getListMonitor)
router.get('/masterkeyboard/:lokasi', isAuthent, mapController.getListKeyboard)
router.get('/masternas/:lokasi', isAuthent, mapController.getListNas)
router.get('/mastergenset/:lokasi', isAuthent, mapController.getListGenset)

module.exports = router

const multer = require('multer')
const path = require('path')

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
// const app = express()

// get master ==========================
router.get('/masterserver/:lokasi/:id', readController.masterserver)
router.get('/masterrak/:lokasi/:id', readController.masterrak)
router.get('/masterups/:lokasi/:id', readController.masterups)
router.get('/masterbaterai/:lokasi/:id', readController.masterbaterai)
router.get('/masterac/:lokasi/:id', readController.masterac)
router.get('/mastercctv/:lokasi/:id', readController.mastercctv)
router.get('/masternetwork/:lokasi/:id', readController.masternetwork)
router.get('/masterapar/:lokasi/:id', readController.masterapar)
router.get('/mastermonitor/:lokasi/:id', readController.mastermonitor)
router.get('/masterkeyboard/:lokasi/:id', readController.masterkeyboard)
router.get('/mastermouse/:lokasi/:id', readController.mastermouse)
router.get('/masternas/:lokasi/:id', readController.masternas)
router.get('/mastergenset/:lokasi/:id', readController.mastergenset)

// ==========================
// input master
router.post('/master/inputserver', createdController.inputmasterserver)
router.post('/master/inputrak', createdController.inputmasterrak)
router.post('/master/inputups', createdController.inputmasterups)
router.post('/master/inputbaterai', createdController.inputmasterbaterai)
router.post('/master/inputac', createdController.inputmasterac)
router.post('/master/inputcctv', createdController.inputmastercctv)
router.post('/master/inputnetwork', createdController.inputmasternetwork)
router.post('/master/inputapar', createdController.inputmasterapar)
router.post('/master/inputmonitor', createdController.inputmastermonitor)
router.post('/master/inputkeyboard', createdController.inputmasterkeyboard)
router.post('/master/inputmouse', createdController.inputmastermouse)
router.post('/master/inputnas', createdController.inputmasternas)
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
router.delete(
  '/master/nas/delete/:id/:lokasi',
  deleteController.deletemasternas
)
router.delete(
  '/master/genset/delete/:id/:lokasi',
  deleteController.deletemastergenset
)

// update master ========================================
router.get(
  '/master/update/updateserver/:id/:lokasi',
  updateController.masterservergetdata
)
router.post('/master/server/update', updateController.inputmasterserverupdate)
router.get('/master/rak/update/:id/:lokasi', updateController.masterrakgetdata)
router.post('/master/rak/update/', updateController.inputmasterrakupdate)

router.get('/master/ups/update/:id/:lokasi', updateController.masterupsgetdata)
router.post('/master/ups/update', updateController.inputmasterupsupdate)

router.get(
  '/master/baterai/update/:id/:lokasi',
  updateController.masterbateraigetdata
)
router.post('/master/baterai/update', updateController.inputmasterbateraiupdate)

router.get('/master/ac/update/:id/:lokasi', updateController.masteracgetdata)
router.post('/master/ac/update', updateController.inputmasteracupdate)

router.get(
  '/master/cctv/update/:id/:lokasi',
  updateController.mastercctvgetdata
)
router.post('/master/cctv/update', updateController.inputmastercctvupdate)

router.get(
  '/master/network/update/:id/:lokasi',
  updateController.masternetworkgetdata
)
router.post('/master/network/update', updateController.inputmasternetworkupdate)

router.get(
  '/master/apar/update/:id/:lokasi',
  updateController.masterapargetdata
)
router.post('/master/apar/update', updateController.inputmasteraparupdate)

router.get(
  '/master/monitor/update/:id/:lokasi',
  updateController.mastermonitorgetdata
)
router.post('/master/monitor/update', updateController.inputmastermonitorupdate)

router.get(
  '/master/keyboard/update/:id/:lokasi',
  updateController.masterkeyboardgetdata
)
router.post(
  '/master/keyboard/update',
  updateController.inputmasterkeyboardupdate
)

router.get(
  '/master/mouse/update/:id/:lokasi',
  updateController.mastermousegetdata
)
router.post('/master/mouse/update', updateController.inputmastermouseupdate)

router.get('/master/nas/update/:id/:lokasi', updateController.masternasgetdata)
router.post('/master/nas/update', updateController.inputmasternasupdate)

router.get(
  '/master/genset/update/:id/:lokasi',
  updateController.mastergensetgetdata
)
router.post('/master/genset/update', updateController.inputmastergensetupdate)
// ===============================================================
// login
router.post('/login', authController.login)
// homepage when login success
router.get('/homepage', isAuthent, authController.homepage)
// logout
router.post('/logout', authController.logout)

// cari barang ===================================================
router.get('/cariserver/:cari/:lokasi/:id', readController.caribarangserver)
router.get('/carirak/:cari/:lokasi/:id', readController.caribarangrak)
router.get('/cariups/:cari/:lokasi/:id', readController.caribarangups)
router.get('/caribaterai/:cari/:lokasi/:id', readController.caribarangbaterai)
router.get('/cariac/:cari/:lokasi/:id', readController.caribarangac)
router.get('/caricctv/:cari/:lokasi/:id', readController.caribarangcctv)
router.get('/carinetwork/:cari/:lokasi/:id', readController.caribarangnetwork)
router.get('/cariapar/:cari/:lokasi/:id', readController.caribarangapar)
router.get('/carimonitor/:cari/:lokasi/:id', readController.caribarangmonitor)
router.get('/carikeyboard/:cari/:lokasi/:id', readController.caribarangkeyboard)
router.get('/carimouse/:cari/:lokasi/:id', readController.caribarangmouse)
router.get('/carinas/:cari/:lokasi/:id', readController.caribarangnas)
router.get('/carigenset/:cari/:lokasi/:id', readController.caribaranggenset)

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
router.get(
  '/maintenance/security/alldata/:lokasi',
  maintenanceController.allMaintenanceResultSecurity
)
// hasil maintenance teknisi listrik dan ac untuk admin teknisi
router.get(
  '/maintenance/teknisilistrik/:lokasi',
  maintenanceController.getDataTeknisilistrik
)
router.get(
  '/maintenance/teknisiac/:lokasi',
  maintenanceController.getDataTeknisiac
)

router.get('/lokasi', lokasiServer.lokasiserver)

// USER
router.get('/users', userController.getAllUsers)
router.get('/cariuser', userController.cariuser)

// mengatur user oleh PA
// tambah user
router.post('/user/tambah', userController.addUser)
// hapus user
router.delete('/user/delete/:id', userController.deleteUser)
// ambil data user tertentu
router.get('/user/:id', userController.getUser)
// update data user
router.post('/user/update', userController.updateUser)
// ambil nama user dengan role PA
router.get('/users/pa', userController.getUserPa)

// =====================================
// ==============IN-OUT BARANG==========
// TAMBAH BARANG
// ambil barang
router.get(
  '/inout/tambahbarang/:lokasi/:id',
  readtambahController.getTambahBarang
)
// input barang
router.post('/tambahbarang/input', createdtambahController.addBarang)
// delete
router.delete(
  '/inout/tambahbarang/delete/:id/:lokasi',
  deletetambahController.deleteBarang
)
// update
router.get(
  '/inout/tambahbarang/update/:id/:lokasi',
  updatetambahController.getDataBarang
)
router.post(
  '/inout/tambahbarang/update',
  updatetambahController.updateDataBarang
)
// cari ==================
router.get(
  '/inout/tambahbarang/caribarang/:cari/:lokasi/:id',
  readtambahController.caridataTambahBarang
)
// ===========================================
// AMBIL BARANG
// ambil barang
router.get('/inout/ambilbarang/:lokasi/:id', readambilController.getAmbilBarang)
// input barang
router.post('/inout/ambilbarang/input', createdambilController.addBarang)
// delete
router.delete(
  '/inout/ambilbarang/delete/:id/:lokasi',
  deleteambilController.deleteBarang
)
// update
router.get(
  '/inout/ambilbarang/update/:id/:lokasi',
  updateambilController.getDataBarang
)
router.post('/inout/ambilbarang/update', updateambilController.updateDataBarang)
// cari ==================
router.get(
  '/inout/ambilbarang/caribarang/:cari/:lokasi/:id',
  readambilController.caridataAmbilBarang
)
// ===========================================
// GANTI BARANG
// ambil barang
router.get('/inout/gantibarang/:lokasi/:id', readgantiController.getGantiBarang)
// input barang
router.post('/inout/gantibarang/input', createdgantiController.addBarang)
// delete
router.delete(
  '/inout/gantibarang/delete/:id/:lokasi',
  deletegantiController.deleteBarang
)
// update
router.get(
  '/inout/gantibarang/update/:id/:lokasi',
  updategantiController.getDataBarang
)
router.post('/inout/gantibarang/update', updategantiController.updateDataBarang)
// cari ==================
router.get(
  '/inout/gantibarang/caribarang/:cari/:lokasi/:id',
  readgantiController.caridataGantiBarang
)
// detail ganti barang ==========
router.get(
  '/inout/gantibarang/detail/:lokasi/:id',
  readgantiController.detailGantiBarang
)

// FORM UPLOAD DOKUMEN
// upload dokumen
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.originalname.split('.')[0] +
        '_' +
        Date.now() +
        path.extname(file.originalname)
    )
  },
})
const multerFilter = (req, file, cb) => {
  // file.mimetype.slice('/')[1] = 'pdf'

  if (!file.originalname.match(/.pdf$/)) {
    cb(new Error('bukan file yang diminta'), false)
  } else {
    cb(null, true)
  }
}
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
})

router.post('/document', upload.single('file'), fileController.uploadFiledoc)

router.get('/document/list', fileController.getAllFiles)

router.get('/document/list/:name', fileController.downloadFile)
router.delete('/document/list/:name', fileController.deleteFile)

module.exports = router

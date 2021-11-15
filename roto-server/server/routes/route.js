const maintenanceController = require('../controllers/maintenanceController.js')
const authController = require('../controllers/authController.js')
const deleteController = require('../controllers/master/deleteController.js')
const updateController = require('../controllers/master/updateController.js')
const createdController = require('../controllers/master/createdController.js')
const readController = require('../controllers/master/readController.js')
const lokasiServer = require('../controllers/lokasiServer.js')
const { isAuthent } = require('../middleware/userAuthorization.js')
const { check, validationResult } = require('express-validator')
const express = require('express')
const router = express.Router()
// const app = express()

// app.get('/', maintenanceController.users)
// app.get('/lokasiserver', maintenanceController.lokasiserver)
router.get('/masterserver/:lokasi/:id', readController.masterserver)

router.post(
  '/master/inputserver',
  [
    body('produk')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('produk harus berupa huruf'),
    body('merek')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('merek harus berupa huruf'),
    body('model')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('model harus berupa angka dan huruf bukan simbol'),
    body('processor')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('processor harus berupa angka dan huruf bukan simbol'),
    body('memori')
      .isLength({ min: 1, max: 4 })
      .withMessage('memori maksimal 4 digit')
      .isNumeric()
      .withMessage('memori harus berupa angka'),
    body('internalStorage')
      .isLength({ min: 1, max: 4 })
      .withMessage('internal storage maksimal 4 digit')
      .isNumeric()
      .withMessage('internal storage harus berupa angka'),
    body('networkController')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('network controller harus berupa huruf'),
    body('storage')
      .isLength({ min: 1, max: 4 })
      .withMessage('storage maksimal 4 digit')
      .isNumeric()
      .withMessage('storage harus berupa angka'),
    body('sumberDayaListrik')
      .isNumeric()
      .withMessage('power supply harus berupa angka'),
    body('tahun').isDate().notEmpty().withMessage('tahun tidak boleh kosong'),
    body('garansi')
      .isDate()
      .notEmpty()
      .withMessage('garansi tidak boleh kosong'),
  ],
  createdController.inputmasterserver
)
router.get('/masterrak/:lokasi/:id', readController.masterrak)
router.post(
  '/master/inputrak',
  [
    check('tipeRak')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('tipe rak berupa huruf dan angka bukan simbol')
      .notEmpty()
      .withMessage('tipe rak tidak boleh kosong'),
    check('tipePintu')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('tipe pintu berupa angka dan huruf bukan simbol')
      .notEmpty()
      .withMessage('tipe pintu tidak boleh kosong'),
    check('namaProduk')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('nama produk berupa huruf dan angka bukan simbol')
      .notEmpty()
      .withMessage('nama produk tidak boleh kosong'),
    check('dimensi')
      .isNumeric()
      .withMessage('dimensi berupa angka')
      .notEmpty()
      .withMessage('dimensi tidak boleh kosong'),
    check('tahun').notEmpty().withMessage('tahun harap di isi'),
    check('berat')
      .isNumeric()
      .withMessage('berat berupa angka')
      .notEmpty()
      .withMessage('berat harap di isi'),
  ],
  createdController.inputmasterrak
)
router.get('/masterups/:lokasi/:id', readController.masterups)
router.post(
  '/master/inputups',
  [
    check('model')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('model berupa angka dan huruf bukan simbol')
      .notEmpty()
      .withMessage('model tidak boleh kosong')
      .escape(),
    check('upsCriticalLoad')
      .isNumeric()
      .withMessage('ups critical load berupa angka')
      .notEmpty()
      .withMessage('ups critical load tidak boleh kosong')
      .escape(),
    check('upsCriticalCapacity')
      .isNumeric()
      .withMessage('ups critical capacity berupa angka')
      .notEmpty()
      .withMessage('ups critical capacity tidak boleh kosong')
      .escape(),
    check('upsCriticalTemperature')
      .isNumeric()
      .withMessage('ups critical temperature berupa angka')
      .notEmpty()
      .withMessage('ups critical temperature tidak boleh kosong')
      .escape(),
    check('upsCriticalCapacity')
      .isNumeric()
      .withMessage('ups critical capacity berupa angka')
      .notEmpty()
      .withMessage('ups critical capacity tidak boleh kosong')
      .escape(),
    check('peringkatTegangan')
      .isNumeric()
      .withMessage('peringkat tegangan berupa angka')
      .notEmpty()
      .withMessage('peringkat tegangan tidak boleh kosong')
      .escape(),
    check('peringkatFrekuensi')
      .isNumeric()
      .withMessage('peringkat frekuensi berupa angka')
      .notEmpty()
      .withMessage('peringkat frekuensi tidak boleh kosong')
      .escape(),
    check('peringkatTeganganBaterai')
      .isNumeric()
      .withMessage('peringkat tegangan baterai berupa angka')
      .notEmpty()
      .withMessage('peringkat tegangan baterai tidak boleh kosong')
      .escape(),
    check('manufaktur')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('manufaktur berupa huruf')
      .notEmpty()
      .withMessage('manufaktur tidak boleh kosong')
      .escape(),
    check('nomorSerial')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('nomor serial berupa angka dan huruf')
      .notEmpty()
      .withMessage('nomor serial tidak boleh kosong')
      .escape(),
    check('namaSistem')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('nama sistem berupa huruf')
      .notEmpty()
      .withMessage('nama sistem tidak boleh kosong')
      .escape(),
    check('tahun').notEmpty().withMessage('tahun harap di isi').escape(),
    check('garansi')
      .notEmpty()
      .withMessage('tahun garansi harap di isi')
      .escape(),
  ],
  createdController.inputmasterups
)
router.get('/masterbaterai/:lokasi/:id', readController.masterbaterai)
router.post(
  '/master/inputbaterai',
  [
    check('accu')
      .isNumeric()
      .withMessage('accu berupa angka')
      .notEmpty()
      .withMessage('accu tidak boleh kosong')
      .escape(),
    check('kuantitas')
      .isNumeric()
      .withMessage('kuantitas berupa angka')
      .notEmpty()
      .withMessage('kuantitas tidak boleh kosong')
      .escape(),
    check('tegangan')
      .isNumeric()
      .withMessage('tegangan berupa angka')
      .notEmpty()
      .withMessage('tegangan tidak boleh kosong')
      .escape(),
    check('tahun').notEmpty().withMessage('tahun harap di isi').escape(),
    check('garansi')
      .notEmpty()
      .withMessage('tahun garansi harap di isi')
      .escape(),
  ],
  createdController.inputmasterbaterai
)
router.get('/masterac', readController.masterac)
router.post(
  '/master/inputac',
  [
    check('merek')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('merek berupa huruf')
      .notEmpty()
      .withMessage('merek tidak boleh kosong'),
    check('model')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('model berupa angka dan huruf bukan simbol')
      .notEmpty()
      .withMessage('model tidak boleh kosong'),
    check('sumberDayaListrik')
      .isNumeric()
      .withMessage('sumber daya listrik berupa angka')
      .notEmpty()
      .withMessage('sumber daya listrik tidak boleh kosong'),
    check('dimensi')
      .isNumeric()
      .withMessage('dimensi berupa angka')
      .notEmpty()
      .withMessage('dimensi tidak boleh kosong'),
    check('konsumsiDaya')
      .isNumeric()
      .withMessage('konsumsi daya berupa angka')
      .notEmpty()
      .withMessage('konsumsi daya tidak boleh kosong'),
    check('kapasitasPendingin')
      .isNumeric()
      .withMessage('kapasitas pendingin berupa angka')
      .notEmpty()
      .withMessage('kapasitas pendingin tidak boleh kosong'),
    check('tahun').notEmpty().withMessage('tahun harap di isi'),
    check('garansi').notEmpty().withMessage('garansi harap di isi'),
  ],
  createdController.inputmasterac
)
router.get('/mastercctv', readController.mastercctv)

router.post(
  '/master/inputcctv',
  [
    check('merek')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('merek harus berupa huruf dan angka bukan simbol')
      .notEmpty()
      .withMessage('merek harap di isi')
      .escape(),
    check('model')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('model masukan huruf dan angka jangan simbol')
      .notEmpty()
      .withMessage('model harap di isi')
      .escape(),
  ],
  createdController.inputmastercctv
)

router.get('/masternetwork', readController.masternetwork)
router.post(
  '/master/inputnetwork',
  [
    check('merek')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('merek berupa huruf')
      .notEmpty()
      .withMessage('merek tidak boleh kosong')
      .escape(),
    check('model')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('model berupa angka dan huruf bukan simbol')
      .notEmpty()
      .withMessage('model tidak boleh kosong')
      .escape(),
    check('tipe')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('tipe berupa huruf dan angka bukan simbol')
      .notEmpty()
      .withMessage('tipe tidak boleh kosong')
      .escape(),
    check('kuantitas')
      .isNumeric()
      .withMessage('kuantitas berupa angka')
      .notEmpty()
      .withMessage('kuantitas tidak boleh kosong')
      .escape(),
    check('kanal')
      .isNumeric()
      .withMessage('kanal di isi dengan angka')
      .notEmpty()
      .withMessage('kanal tidak boleh kosong')
      .escape(),
    check('tahun').notEmpty().withMessage('tahun harap di isi'),
    check('garansi').notEmpty().withMessage('garansi harap di isi'),
  ],
  createdController.inputmasternetwork
)
router.get('/masterapar', readController.masterapar)
router.post(
  '/master/inputapar',
  [
    check('merek')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('merek berupa huruf')
      .notEmpty()
      .withMessage('merek tidak boleh kosong'),
    check('model')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('model berupa angka dan huruf bukan simbol')
      .notEmpty()
      .withMessage('model tidak boleh kosong'),
    check('tipe')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('tipe berupa huruf dan angka bukan simbol')
      .notEmpty()
      .withMessage('tipe tidak boleh kosong'),
    check('tahun').notEmpty().withMessage('tahun harap di isi'),
    check('garansi').notEmpty().withMessage('garansi harap di isi'),
  ],
  createdController.inputmasterapar
)
router.get('/mastermonitor', readController.mastermonitor)
router.post(
  '/master/inputmonitor',
  [
    check('merek')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('merek berupa huruf')
      .notEmpty()
      .withMessage('merek tidak boleh kosong')
      .escape(),
    check('model')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('model berupa angka dan huruf bukan simbol')
      .notEmpty()
      .withMessage('model tidak boleh kosong')
      .escape(),
    check('tipe')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('tipe berupa huruf dan angka bukan simbol')
      .notEmpty()
      .withMessage('tipe tidak boleh kosong')
      .escape(),
    check('tahun').notEmpty().withMessage('tahun harap di isi').escape(),
    check('garansi').notEmpty().withMessage('garansi harap di isi').escape(),
  ],
  createdController.inputmastermonitor
)
router.get('/masterkeyboard', readController.masterkeyboard)
router.post(
  '/master/inputkeyboard',
  [
    check('merek')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('merek berupa huruf')
      .notEmpty()
      .withMessage('merek tidak boleh kosong'),
    check('model')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('model berupa angka dan huruf bukan simbol')
      .notEmpty()
      .withMessage('model tidak boleh kosong'),
    check('tipe')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('tipe berupa huruf dan angka bukan simbol')
      .notEmpty()
      .withMessage('tipe tidak boleh kosong'),
    check('tahun').notEmpty().withMessage('tahun harap di isi'),
    check('garansi').notEmpty().withMessage('garansi harap di isi'),
  ],
  createdController.inputmasterkeyboard
)
router.get('/mastermouse', readController.mastermouse)
router.post(
  '/master/inputmouse',
  [
    check('merek')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('merek berupa huruf')
      .notEmpty()
      .withMessage('merek tidak boleh kosong')
      .escape(),
    check('model')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('model berupa angka dan huruf bukan simbol')
      .notEmpty()
      .withMessage('model tidak boleh kosong')
      .escape(),
    check('tipe')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('tipe berupa huruf dan angka bukan simbol')
      .notEmpty()
      .withMessage('tipe tidak boleh kosong')
      .escape(),
    check('tahun').notEmpty().withMessage('tahun harap di isi').escape(),
    check('garansi').notEmpty().withMessage('garansi harap di isi').escape(),
  ],
  createdController.inputmastermouse
)
router.get('/masternas', readController.masternas)
router.post(
  '/master/inputnas',
  [
    check('merek')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('merek berupa huruf')
      .notEmpty()
      .withMessage('merek tidak boleh kosong')
      .trim(),
    check('model')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('model berupa angka dan huruf bukan simbol')
      .notEmpty()
      .withMessage('model tidak boleh kosong')
      .trim(),
    check('processor')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('processor berupa angka dan huruf bukan simbol')
      .notEmpty()
      .withMessage('processor tidak boleh kosong')
      .trim()
      .escape(),
    check('storage')
      .isNumeric()
      .withMessage('storage berupa angka')
      .notEmpty()
      .withMessage('storage tidak boleh kosong')
      .trim()
      .escape(),
    check('tipe')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('tipe berupa huruf dan angka bukan simbol')
      .notEmpty()
      .withMessage('tipe tidak boleh kosong')
      .trim(),
    check('cpu')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('cpu berupa huruf dan angka bukan simbol')
      .notEmpty()
      .withMessage('cpu tidak boleh kosong')
      .trim(),
    check('raid')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('raid berupa huruf dan angka bukan simbol')
      .notEmpty()
      .withMessage('raid tidak boleh kosong')
      .trim(),
    check('tahun').notEmpty().withMessage('tahun harap di isi'),
    check('garansi').notEmpty().withMessage('garansi harap di isi'),
  ],
  createdController.inputmasternas
)
router.get('/mastergenset', readController.mastergenset)
router.post(
  '/master/inputgenset',
  [
    check('merek')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('merek berupa huruf')
      .notEmpty()
      .withMessage('merek tidak boleh kosong')
      .escape(),
    check('model')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('model berupa angka dan huruf bukan simbol')
      .notEmpty()
      .withMessage('model tidak boleh kosong')
      .escape(),
    check('tipe')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('tipe berupa huruf dan angka bukan simbol')
      .notEmpty()
      .withMessage('tipe tidak boleh kosong')
      .escape(),
    check('tahun').notEmpty().withMessage('tahun harap di isi').escape(),
    check('garansi').notEmpty().withMessage('garansi harap di isi').escape(),
  ],
  createdController.inputmastergenset
)
// detail master server =======================
router.get(
  '/master/server/detail/:lokasi/:id',
  readController.detailmasterserver
)
router.get('/master/ups/detail/:lokasi/:id', readController.detailmasterups)
router.get('/master/nas/detail/:lokasi/:id', readController.detailmasternas)
router.get('/master/ac/detail/:lokasi/:id', readController.detailmasterac)

// delete master ========================================
router.post(
  '/master/server/delete/:id/:lokasi',
  deleteController.deletemasterserver
)
router.post('/master/deleterak/:id', deleteController.deletemasterrak)
router.post('/master/deleteups/:id', deleteController.deletemasterups)
router.post('/master/deletebaterai/:id', deleteController.deletemasterbaterai)
router.post('/master/deleteac/:id', deleteController.deletemasterac)
router.post('/master/deletecctv/:id', deleteController.deletemastercctv)
router.post('/master/deletenetwork/:id', deleteController.deletemasternetwork)
router.post('/master/deleteapar/:id', deleteController.deletemasterapar)
router.post('/master/deletemonitor/:id', deleteController.deletemastermonitor)
router.post('/master/deletekeyboard/:id', deleteController.deletemasterkeyboard)
router.post('/master/deletemouse/:id', deleteController.deletemastermouse)
router.post('/master/deletenas/:id', deleteController.deletemasternas)
router.post(
  '/master/deletegenset/:lokasi/:id',
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
router.get('/cariserver', readController.caribarangserver)
router.get('/carirak', readController.caribarangrak)
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
router.get('/inputmaintenance', maintenanceController.getAllMaintenance)
router.post('/maintenance/delete/:id', maintenanceController.deleteMaintenance)
router.get(
  '/maintenance/carimaintenance',
  maintenanceController.carimaintenance
)
router.get(
  '/maintenance/getdatamaintenanceupdate/:id',
  maintenanceController.getdatamaintenanceupdate
)
router.post(
  '/maintenance/update/updatemaintenance',
  maintenanceController.updateMaintenance
)

router.get('/lokasi', lokasiServer.lokasiserver)

module.exports = router

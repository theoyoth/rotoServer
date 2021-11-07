const maintenanceController = require('../controllers/maintenanceController.js')
const masterController = require('../controllers/masterController.js')
const authController = require('../controllers/authController.js')
// const { auth } = require('../verifyToken.js')
const { isAuth } = require('../middleware/userAuthorization.js')
const { check, validationResult } = require('express-validator')
const express = require('express')
const router = express.Router()
// const app = express()

// app.get('/', maintenanceController.users)
// app.get('/lokasiserver', maintenanceController.lokasiserver)
router.get('/masterserver', masterController.masterserver)

// router.post('/inputmaintenance/hapus/:id', maintenanceController.deleteMaintenance)
router.post(
  '/master/inputserver',
  [
    check('produk')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('produk harus berupa huruf'),
    check('merek')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('merek harus berupa huruf'),
    check('model')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('model harus berupa angka dan huruf bukan simbol'),
    check('processor')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('processor harus berupa angka dan huruf bukan simbol'),
    check('memori')
      .isLength({ min: 1, max: 4 })
      .withMessage('memori maksimal 4 digit')
      .isNumeric()
      .withMessage('memori harus berupa angka'),
    check('internalStorage')
      .isLength({ min: 1, max: 4 })
      .withMessage('internal storage maksimal 4 digit')
      .isNumeric()
      .withMessage('internal storage harus berupa angka'),
    check('networkController')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('network controller harus berupa huruf'),
    check('storage')
      .isLength({ min: 1, max: 4 })
      .withMessage('storage maksimal 4 digit')
      .isNumeric()
      .withMessage('storage harus berupa angka'),
    check('sumberDayaListrik')
      .isNumeric()
      .withMessage('power supply harus berupa angka'),
    check('tahun').isDate().notEmpty().withMessage('tahun tidak boleh kosong'),
    check('garansi')
      .isDate()
      .notEmpty()
      .withMessage('garansi tidak boleh kosong'),
  ],
  masterController.inputmasterserver
)
router.get('/masterrak', masterController.masterrak)
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
  masterController.inputmasterrak
)
router.get('/masterups', masterController.masterups)
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
  masterController.inputmasterups
)
router.get('/masterbaterai', masterController.masterbaterai)
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
  masterController.inputmasterbaterai
)
router.get('/masterac', masterController.masterac)
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
  masterController.inputmasterac
)
router.get('/mastercctv', masterController.mastercctv)

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
  masterController.inputmastercctv
)

router.get('/masternetwork', masterController.masternetwork)
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
  masterController.inputmasternetwork
)
router.get('/masterapar', masterController.masterapar)
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
  masterController.inputmasterapar
)
router.get('/mastermonitor', masterController.mastermonitor)
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
  masterController.inputmastermonitor
)
router.get('/masterkeyboard', masterController.masterkeyboard)
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
  masterController.inputmasterkeyboard
)
router.get('/mastermouse', masterController.mastermouse)
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
  masterController.inputmastermouse
)
router.get('/masternas', masterController.masternas)
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
  masterController.inputmasternas
)
router.get('/mastergenset', masterController.mastergenset)
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
  masterController.inputmastergenset
)

router.post('/master/delete/:id/:nama', masterController.deletemaster)

// update master
router.get(
  '/master/update/updateserver/:id',
  masterController.masterservergetdata
)
router.post(
  '/master/server/update/updateserver',
  masterController.inputmasterserverupdate
)
router.get('/master/update/updaterak/:id', masterController.masterrakgetdata)
router.post(
  '/master/rak/update/updaterak',
  masterController.inputmasterrakupdate
)

router.get('/master/update/updateups/:id', masterController.masterupsgetdata)
router.post(
  '/master/ups/update/updateups',
  masterController.inputmasterupsupdate
)

router.get(
  '/master/update/updatebaterai/:id',
  masterController.masterbateraigetdata
)
router.post(
  '/master/baterai/update/updatebaterai',
  masterController.inputmasterbateraiupdate
)

router.get('/master/update/updateac/:id', masterController.masteracgetdata)
router.post('/master/ac/update/updateac', masterController.inputmasteracupdate)

router.get('/master/update/updatecctv/:id', masterController.mastercctvgetdata)
router.post(
  '/master/cctv/update/updatecctv',
  masterController.inputmastercctvupdate
)

router.get(
  '/master/update/updatenetwork/:id',
  masterController.masternetworkgetdata
)
router.post(
  '/master/network/update/updatenetwork',
  masterController.inputmasternetworkupdate
)

router.get('/master/update/updateapar/:id', masterController.masterapargetdata)
router.post(
  '/master/apar/update/updateapar',
  masterController.inputmasteraparupdate
)

router.get(
  '/master/update/updatemonitor/:id',
  masterController.mastermonitorgetdata
)
router.post(
  '/master/monitor/update/updatemonitor',
  masterController.inputmastermonitorupdate
)

router.get(
  '/master/update/updatekeyboard/:id',
  masterController.masterkeyboardgetdata
)
router.post(
  '/master/keyboard/update/updatekeyboard',
  masterController.inputmasterkeyboardupdate
)

router.get(
  '/master/update/updatemouse/:id',
  masterController.mastermousegetdata
)
router.post(
  '/master/mouse/update/updatemouse',
  masterController.inputmastermouseupdate
)

router.get('/master/update/updatenas/:id', masterController.masternasgetdata)
router.post(
  '/master/nas/update/updatenas',
  masterController.inputmasternasupdate
)

router.get(
  '/master/update/updategenset/:id',
  masterController.mastergensetgetdata
)
router.post(
  '/master/genset/update/updategenset',
  masterController.inputmastergensetupdate
)
// ===============================================================
// login
router.post('/login', authController.login)
// homepage when login success
router.get('/homepage', authController.homepage)
// logout
// router.post('/logout', async (req, res) => {
//   res.cookie('authtoken', '', { maxAge: 0 })
//   res.send({
//     message: 'you are success to logout',
//   })
// })

// cari barang ===================================================
router.get('/cariserver', masterController.caribarangserver)
router.get('/carirak', masterController.caribarangrak)
router.get('/cariups', masterController.caribarangups)
router.get('/caribaterai', masterController.caribarangbaterai)
router.get('/cariac', masterController.caribarangac)
router.get('/caricctv', masterController.caribarangcctv)
router.get('/carinetwork', masterController.caribarangnetwork)
router.get('/cariapar', masterController.caribarangapar)
router.get('/carimonitor', masterController.caribarangmonitor)
router.get('/carikeyboard', masterController.caribarangkeyboard)
router.get('/carimouse', masterController.caribarangmouse)
router.get('/carinas', masterController.caribarangnas)
router.get('/carigenset', masterController.caribaranggenset)

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

module.exports = router

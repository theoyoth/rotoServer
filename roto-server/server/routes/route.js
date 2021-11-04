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

// app.post('/inputmaintenance/hapus/:id', maintenanceController.deleteMaintenance)
app.post(
  '/master/inputserver',
  [
    check('produk')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('produk harus berupa huruf'),
    check('merek')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('produk harus berupa huruf'),
    check('model')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('model harus berupa angka dan huruf bukan simbol'),
    check('processor')
      .isAlpha('en-US', { ignore: '^s$' })
      .withMessage('processor harus berupa angka dan huruf bukan simbol'),
    check('memori').isNumeric().withMessage('memori harus berupa angka'),
    check('internalStorage')
      .isNumeric()
      .withMessage('internal storage harus berupa angka'),
    check('networkController')
      .isAlphanumeric('en-US', { ignore: '^s$' })
      .withMessage('network controller harus berupa huruf'),
    check('storage').isNumeric().withMessage('storage harus berupa angka'),
    check('sumberDayaListrik')
      .isNumeric()
      .withMessage('power supply harus berupa angka'),
    check('tahun').isDate().notEmpty(),
    check('garansi').isDate().notEmpty(),
  ],
  masterController.inputmasterserver
)
app.get('/masterrak', masterController.masterrak)
app.post(
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
app.get('/masterups', masterController.masterups)
app.post(
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
app.get('/masterbaterai', masterController.masterbaterai)
app.post(
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
app.get('/masterac', masterController.masterac)
app.post(
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
app.get('/mastercctv', masterController.mastercctv)

app.post(
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

app.get('/masternetwork', masterController.masternetwork)
app.post(
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
app.get('/masterapar', masterController.masterapar)
app.post(
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
app.get('/mastermonitor', masterController.mastermonitor)
app.post(
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
app.get('/masterkeyboard', masterController.masterkeyboard)
app.post(
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
app.get('/mastermouse', masterController.mastermouse)
app.post(
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
app.get('/masternas', masterController.masternas)
app.post(
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
app.get('/mastergenset', masterController.mastergenset)
app.post(
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

// ===============================================
// MAINTENANCE SERVER
app.post('/inputmaintenance', maintenanceController.inputmaintenance)
app.get('/inputmaintenance', maintenanceController.getAllMaintenance)
app.post('/maintenance/delete/:id', maintenanceController.deleteMaintenance)
app.get('/maintenance/carimaintenance', maintenanceController.carimaintenance)
app.get(
  '/maintenance/getdatamaintenanceupdate/:id',
  maintenanceController.getdatamaintenanceupdate
)
app.post(
  '/maintenance/update/updatemaintenance',
  maintenanceController.updateMaintenance
)

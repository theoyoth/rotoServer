const pathController = require('../controllers/controller.js')
const express = require('express');
const app = express();

app.get('/', pathController.users)
// router.get('/delete/:id', pathController.delete)
// router.get('/find/:id', pathController.findOne)

module.exports = app
const express = require('express');
const router = express.Router();
const trxCtrl = require('../controllers/trxController')
const errorHandler = require('../middleware/errorMiddleware')
const auth = require('../middleware/authenticationMiddleware')
const validation = require('../middleware/trxValidation')


router.post('/transactions/:restoID', auth,validation.trxValidation ,trxCtrl.AddTrx)


router.use(errorHandler)
module.exports = router;
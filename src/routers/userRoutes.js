const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userControllers')
const errorHandler = require('../middleware/errorMiddleware')
const auth = require('../middleware/authenticationMiddleware')
const validation = require('../middleware/userValidation')


router.post('/user/topup',auth,validation.validateTopUp, userCtrl.AddBalance)


router.use(errorHandler)
module.exports = router;
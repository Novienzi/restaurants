const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController')
const errorHandler = require('../middleware/errorMiddleware')
const userValidation = require('../middleware/userValidation')


router.post('/register', userValidation.userValidation, authCtrl.register)
router.post('/login', userValidation.loginValidation, authCtrl.login)

router.use(errorHandler)
module.exports = router;
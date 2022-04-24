const express = require('express');
const router = express.Router();
const restoCtrl = require('../controllers/restoControllers')
const errorHandler = require('../middleware/errorMiddleware')
const auth = require('../middleware/authenticationMiddleware')
const validation = require('../middleware/restoValidation')


router.get('/restaurants/name',auth, restoCtrl.searchRestoByName)
router.get('/restaurants/time',auth, validation.dateValidation, restoCtrl.searchRestoByTime)
router.post('/restaurants/dish/count',auth, validation.countValidation, restoCtrl.searchRestoByDishCount)

router.use(errorHandler)
module.exports = router;
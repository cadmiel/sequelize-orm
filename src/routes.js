const express = require('express')
const userController = require('./controllers/UserController')
const adressController = require('./controllers/AdressesController')
const techController = require('./controllers/TechController')

const router = express.Router()

router.get('/users', userController.index)
router.post('/users', userController.store)
router.get('/users/:user_id/adresses', adressController.index)
router.post('/users/:user_id/adresses', adressController.store)
router.get('/techs', techController.index)
router.post('/techs', techController.store)

module.exports = router
const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

router.get('/', mainController.mainPage)

router.get('/novels/:novelTitle/:chapterNr', mainController.novelsPage)

module.exports = router

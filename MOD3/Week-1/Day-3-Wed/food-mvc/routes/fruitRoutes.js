const express = require('express')

// Create our router
const router = express.Router()

// Bring in our controller logic
const fruitController = require('../controllers/fruitController')

// "index" route      //   localhost:8080/fruits/
router.get('/', fruitController.index)

// "show" route      //   localhost:8080/fruits/:indexOfFruit
router.get('/:indexOfFruit', fruitController.show)

module.exports = router

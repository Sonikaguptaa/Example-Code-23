const express = require('express')

// Create our router
const router = express.Router()

// Bring in our controller logic
const fruitController = require('../controllers/fruitController')

// I.N.D.U.C.E.S (Index, New, Delete, Update, Create, Edit, Show)

// "index" route      //   localhost:8080/fruits/
router.get('/', fruitController.index)

// "new" route
router.get('/new', fruitController.new)

// "delete" route

// "update" route

// "create" route
router.post('/', fruitController.create)

// "edit" route

// "show" route      //   localhost:8080/fruits/:indexOfFruit
router.get('/:indexOfFruit', fruitController.show)

module.exports = router

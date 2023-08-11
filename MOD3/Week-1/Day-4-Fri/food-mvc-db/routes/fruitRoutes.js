const express = require('express')

// Create our router
const router = express.Router()

// Bring in our controller logic
const fruitController = require('../controllers/fruitController')

// I.N.D.U.C.E.S (Index, New, Destroy, Update, Create, Edit, Show)

// "index" route      //   localhost:8080/fruits/
router.get('/', fruitController.index)

// "new" route
router.get('/new', fruitController.new)

// "destroy" route
router.delete('/:indexOfFruit', fruitController.destroy)

// "update" route
router.put('/:indexOfFruit', fruitController.update)

// "create" route
router.post('/', fruitController.create)

// "edit" route
router.get('/:indexOfFruit/edit', fruitController.edit)

// "show" route      //   localhost:8080/fruits/:indexOfFruit
router.get('/:id', fruitController.show)

module.exports = router

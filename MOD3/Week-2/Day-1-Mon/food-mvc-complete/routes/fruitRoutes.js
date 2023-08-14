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

// "clear" route
router.delete('/clear', fruitController.clear)

// "destroy" route
router.delete('/:id', fruitController.destroy)

// "update" route
router.put('/:id', fruitController.update)

// "create" route
router.post('/', fruitController.create)

// "seed" route
router.post('/seed', fruitController.seed)

// "edit" route
router.get('/:id/edit', fruitController.edit)

// "show" route      //   localhost:8080/fruits/:indexOfFruit
router.get('/:id', fruitController.show)

module.exports = router

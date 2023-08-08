const express = require('express')

// Create our router
const router = express.Router()

// "index" route      //   localhost:8080/fruits/
router.get('/', (req, res) => {
    res.send(fruits)
})

// "show" route      //   localhost:8080/fruits/:indexOfFruit
router.get('/:indexOfFruit', (req, res) => {
    res.send(fruits[req.params.indexOfFruit])
})

module.exports = router

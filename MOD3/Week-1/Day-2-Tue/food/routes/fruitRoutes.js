const express = require('express')

// Create our router
const router = express.Router()

// "index" route
router.get('/fruits', (req, res) => {
    res.send(fruits)
})

// "show" route
router.get('/fruits/:indexOfFruit', (req, res) => {
    res.send(fruits[req.params.indexOfFruit])
})

module.exports = router

const express = require('express')

// Bring in our fruit data
const fruits = require('../models/fruits')

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

// Bring in our fruit data
const fruits = require('../models/fruits')

// GET /fruits
module.exports.index = (req, res) => {
    res.render('fruits/Index', { fruits })
}

//  GET /fruits/:indexOfFruits
module.exports.show = (req, res) => {
    res.render('fruits/Show', { fruit: fruits[req.params.indexOfFruit] })
}

//  GET /fruits/new
module.exports.new = (req, res) => {
    res.render('fruits/New')
}

// POST /fruits
module.exports.create = (req, res) => {
    console.log('POST /fruits')
    console.log(req.body) // <-- should contain form data
    res.send('POST /fruits')
}
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
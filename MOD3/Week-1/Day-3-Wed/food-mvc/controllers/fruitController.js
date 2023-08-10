// Bring in our fruit data
const fruits = require('../models/fruits')

// GET /fruits
module.exports.index = (req, res) => {
    res.render('fruits/Index', { fruits })
}

//  GET /fruits/:indexOfFruits
module.exports.show = (req, res) => {
    if (fruits[req.params.indexOfFruit]) {
        res.render('fruits/Show', { fruit: fruits[req.params.indexOfFruit] })
    } else {
        res.redirect('/fruits')
    }
}

//  GET /fruits/new
module.exports.new = (req, res) => {
    res.render('fruits/New')
}

// POST /fruits
module.exports.create = (req, res) => {
    console.log('POST /fruits')
    console.log(req.body) // <-- should contain form data
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/fruits')
}
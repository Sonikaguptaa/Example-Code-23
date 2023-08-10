// Bring in our fruit data
const fruits = require('../models/fruits')

// The callback function from the "index" route
function index(req, res) {
    res.render('fruits/Index', { fruits })
}

// The callback function from the "show" route
function show(req, res) {
    res.render('fruits/Show', { fruit: fruits[req.params.indexOfFruit] })
}

module.exports = {
    index,
    show
}
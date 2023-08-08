// Bring in our fruit data
const fruits = require('../models/fruits')

// The callback function from the "index" route
function index(req, res) {
    res.render('fruits/Index')
}

// The callback function from the "show" route
function show(req, res) {
    res.render('fruits/Show')
}

module.exports = {
    index,
    show
}
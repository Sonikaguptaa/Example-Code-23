// Bring in our fruit data
let fruits = require('../models/fruits')

// Load the Fruit model so we can interact with the collection
const Fruit = require('../models/Fruit')

// GET /fruits
module.exports.index = async (req, res) => {
    let fruits;

    try {
        fruits = await Fruit.find(req.query)
    } catch(err) {
        console.log('Failed to create a Fruit document: ', err)
    }
    
    console.log(fruits)
    res.render('fruits/Index', { fruits })
}

//  GET /fruits/:id
module.exports.show = async (req, res) => {
    console.log('GET /fruits/:id')
    let fruit;

    try {
        fruit = await Fruit.findById(req.params.id)
        console.log(fruit)
    } catch(err) {
        console.log('Failed to find Fruit document with id ' + req.params.id, err)
    }
    
    if (fruit) {
        res.render('fruits/Show', { fruit })
    } else {
        res.redirect('/fruits')
    }
}

//  GET /fruits/new
module.exports.new = (req, res) => {
    res.render('fruits/New')
}

//  GET /fruits/:id/edit
module.exports.edit = async (req, res) => {
    console.log('GET /fruits/:id/edit')
    let fruit;

    try {
        fruit = await Fruit.findById(req.params.id)
        console.log(fruit)
        res.render('fruits/Edit', { fruit })
    } catch(err) {
        console.log('Failed to find Fruit document with id ' + req.params.id, err)
        res.redirect(`/fruits/${req.params.id}`)
    }

    
}

// POST /fruits
module.exports.create = async (req, res) => {
    console.log('POST /fruits')
    console.log(req.body) 

    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    try {
        let fruit = await Fruit.create(req.body)
        // let fruit = new Fruit(req.body)
        // fruit.save()
        console.log(fruit)
        console.log(fruit)
    } catch(err) {
        console.log('Failed to create a Fruit document: ', err)
    }

    // fruits.push(req.body)
    res.redirect('/fruits')
}

// DELETE /fruits/:id
module.exports.destroy = async (req, res) => {
    console.log('DELETE /fruits/:id')

    try {
        await Fruit.findByIdAndDelete(req.params.id)
    } catch(err) {
        console.log(err.message)
    }

    res.redirect('/fruits')
}

// PUT /fruits/:id
module.exports.update = async (req, res) => {
    console.log('PUT /fruits/:id')
    
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    // ?name=pineapple&color=yellow&readyToEat

    try { // req.body -> { name: 'pineapple', color: 'yellow', readyToEat: 'on' }
        await Fruit.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/fruits/${req.params.id}`)
    } catch(err) {
        console.log(err.message)
        res.redirect(`/fruits/${req.params.id}/edit`)
    }

}

// POST /fruits/seed
module.exports.seed = async (req, res) => {
    console.log('POST /fruits/seed')

    try {
        await Fruit.deleteMany({}) // req.body {   }
        await Fruit.create(fruits) // [ {}, {}, {} ]
    } catch(err) {
        console.log(err.message)
    }

    res.redirect('/fruits')
}

// DELETE /fruits/clear
module.exports.clear = async (req, res) => {
    console.log('DELETE /fruits/clear')

    try {
        await Fruit.deleteMany({})
    } catch(err) {
        console.log(err.message)
    }

    res.redirect('/fruits')
}
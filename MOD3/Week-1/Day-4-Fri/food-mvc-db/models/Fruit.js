const mongoose = require('mongoose')

const Schema = mongoose.Schema

// this Schema acts as a blueprint for our data
const fruitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    readyToEat: {
        type: Boolean,
        required: true
    }
})

// 1st argument is the collection, 2nd is the Schema (blueprint) 
const Fruit = mongoose.model('fruits')

module.exports = Fruit

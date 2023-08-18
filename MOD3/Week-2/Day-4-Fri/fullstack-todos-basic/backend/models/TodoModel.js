const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
    text: { type: String },
    completed: { type: Boolean, default: false }
})

const Todos = mongoose.model('todo', todoSchema)

module.exports = Todos
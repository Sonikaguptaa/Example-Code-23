require('dotenv').config()

const express = require('express')
const cors = require('cors')

const mongoConfig = require('./config')

mongoConfig()

const Todos = require('./models/TodoModel')

const app = express()

app.use(cors())

// takes over for express.urlencoded formatting incoming data to json
app.use(express.json())

const PORT = 8080

// I D U C  (New and Edit would be handled by React Router in the client React App, and Show we don't currently need)

// "index" route 
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todos.find()
        res.json(todos)
    } catch(err) {
        console.log(err.message)
        res.json({ error: err.message })
    }
})

// "destroy" route
app.delete('/todos/:id', async (req, res) => {
    try { 
        await Todos.findByIdAndDelete(req.params.id)
        res.json({ message: 'successfully deleted' })
    } catch(err) {
        console.log(err.message)
        res.json({ error: err.message })
    }
})

// "update" route
app.put('/todos/:id', async (req, res) => {
    try {
        await Todos.findByIdAndUpdate(req.params.id, req.body)
        res.json({ message: 'succesfully updated' })
    } catch(err) {
        console.log(err.message)
        res.json({ error: err.message })
    }
})

// "create" route
app.post('/todos', async (req, res) => {
    try {
        const todo = await Todos.create(req.body)
        res.json(todo)
    } catch(err) {
        console.log(err.message)
        res.json({ error: err.message })
    }
})


// "test" route
app.get('/test', (req, res) => {
    res.json('Server: Hello Client!')
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
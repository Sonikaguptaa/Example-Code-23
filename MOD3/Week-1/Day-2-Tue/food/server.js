const express = require('express')

const app = express()

const PORT = 8080

const fruits = require('./models/fruits')

// fruits "index" route
app.get('/fruits', (req, res) => {
    res.send(fruits)
})

// fruits "show" route
app.get('/fruits/:indexOfFruit', (req, res) => {
    res.send(fruits[req.params.indexOfFruit])
})

// "root" route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})
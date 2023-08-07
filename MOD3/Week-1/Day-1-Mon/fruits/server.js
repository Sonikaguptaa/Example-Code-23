const express = require('express')

const app = express()

const PORT = 8080

const fruits = require('./models/fruits')

// example of an "index" route
app.get('/fruits', (req, res) => {
    res.send(fruits)
})

// example of a "show" route
app.get('/fruits/:indexOfFruit', (req, res) => {
    let fruit = fruits[req.params.indexOfFruit]
    if (fruit) {
        res.send(fruit)
    } else {
        res.send('<h1>Not found :(</h1>')
    }
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})
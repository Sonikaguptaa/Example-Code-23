const express = require('express')

const app = express()

const PORT = 8080

const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];

// example of an "index" route
app.get('/fruits', (req, res) => {
    res.send(fruits)
})

// example of a "show" route
app.get('/fruits/:indexOfFruit', (req, res) => {
    res.send(fruits[req.params.indexOfFruit] || '<h1>Not found :(</h1>')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})
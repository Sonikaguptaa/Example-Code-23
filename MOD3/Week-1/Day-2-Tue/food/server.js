const express = require('express')

const app = express()

const PORT = 8080

const fruits = require('./models/fruits')

// "root" route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})
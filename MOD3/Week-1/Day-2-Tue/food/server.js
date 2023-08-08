const express = require('express')

const app = express()

const PORT = 8080

// Bring in our routes
const fruitRoutes = require('./routes/fruitRoutes')

// Connect our fruit routes to our express app
app.use('/fruits', fruitRoutes)

// "root" route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})
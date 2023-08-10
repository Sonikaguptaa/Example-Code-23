const express = require('express')

const app = express()

const PORT = 8081

// Bring in our routes
const fruitRoutes = require('./routes/fruitRoutes')

// Load the create engine function
const jsxEngine = require('jsx-view-engine')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', jsxEngine())

// A middleware that formats the data into an object we can use on req.body
app.use(express.urlencoded({ extended: false }))

// Connect our fruit routes to our express app
app.use('/fruits', fruitRoutes)

// "root" route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})
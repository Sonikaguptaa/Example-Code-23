// ES6 Modules
// import http from 'http'
// add "type": "module" to package.json

// CommonJS
// const http = require('http')

// const hostname = '127.0.0.1';
// const port = 8080;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200; 
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello Robert!\n');
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })

// Run server:

// OPTION 1
// 1. npm install -g nodemon (only do this once)
// 2. nodemon server

// OPTION 2
// 1. node --watch server (only works with Node.js v18+)

// Load express
const express = require('express')

// Create our express app
const app = express()

// define our port
const PORT = 8080

// some data to work with
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"]


// Define "/greeting" route on the app
app.get('/greeting', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

// Define "/home" route on the app
app.get('/home', (req, res) => {
    console.log('GET /home')
    res.send('<h1>Home Page</h1>')
})

// Define "/hello/:first/:last" route
app.get('/hello/:firstName/:lastName', (req, res) => {
    // console.log(req.params)
    console.log(req.query)
    res.send(`Hello ${req.params.firstName} ${req.params.lastName}!`)
})

// Define "/plant" route 
app.get('/:indexOfThePlant', (req, res) => {
    if (plants[req.params.indexOfThePlant]) {
        res.send(plants[req.params.indexOfThePlant])
    } else {
        res.send('cannot find plant')
    }
})

// Define root route on the app
app.get('/', (req, res) => {
    res.redirect('/home')
})

// Tell our app to listen for HTTP requests
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})
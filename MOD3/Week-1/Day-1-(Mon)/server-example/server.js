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

// Define "root" route on the app
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

// Tell our app to listen for HTTP requests
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})
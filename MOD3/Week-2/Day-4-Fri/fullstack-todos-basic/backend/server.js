const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const PORT = 8080

app.get('/test', (req, res) => {
    res.json('Server: Hello Client!')
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
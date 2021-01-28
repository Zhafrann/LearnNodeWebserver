const express = require('express')
const app = express.Router()


app.get('/', (req, res) => {
    res.sendFile('Hello World!')
})

module.exports = app
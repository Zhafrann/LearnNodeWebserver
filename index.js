const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const rootRoute = require('./route/rootRoute')
app.use(rootRoute) // hanya bisa digunakan jika pakai express 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
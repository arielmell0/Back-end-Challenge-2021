const express = require('express')

const app = express()
const port = 3030

const homeRoute = require('./routes/home')
const articleRoute = require('./routes/article')

app.use(express.json())

app.use(homeRoute, articleRoute)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
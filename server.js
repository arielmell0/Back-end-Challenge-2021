const express = require('express')

const app = express()
const port = 3030

const homeRoute = require('./routes/home')

app.use(homeRoute)

app.listen(port, () => {
    console.log(`Servidor rodando em https://localhost:${port}`)
})
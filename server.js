require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3030

const homeRoute = require('./routes/home')
const articleRoute = require('./routes/article')
 
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Banco de dados conectado')
        app.emit('BancoOn')
    })
    .catch(error => console.log('Ops, ocorreu um erro. Código', error))

app.use(express.json())

app.use(homeRoute, articleRoute)

app.on('BancoOn', () => {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`)
    })
})
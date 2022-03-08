const express = require('express')

const app = express()
const port = 3030

app.use(ro)

app.listen(port, () => {
    console.log(`Servidor rodando em https://localhost:${port}`)
})
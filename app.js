const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const routes = require('./routes/index')

app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', routes)

app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${port}...`)
})
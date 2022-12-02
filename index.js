const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const routes = require('./routes/api')

app.use(express.json())

app.use('/', routes)

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${port}...`)
})
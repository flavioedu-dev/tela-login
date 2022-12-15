const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const routes = require('./routes/index')
const { sequelizeConfig } = require('./models/index') // 

app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', routes)

// É necessário que o banco esteja criado
sequelizeConfig.sync().then(() => {
    console.log('Banco conectado...')
})

app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${port}...`)
})
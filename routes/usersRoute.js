const express = require('express')
const router = express.Router()
const { user } = require('../models') // Pegando o model

const posts = [
    {
        name: 'Flávio',
        idade: 21
    }
]


router.get('/', (req, res) => {
    res.send("Users!")
})

router.get('/cadastrados', async (req, res) => {
    const users = await user.findAll() // Listando todos os users
    res.send(users)
})

router.post("/cadastrar", async (req, res) => {
    const { nome, email, senha } = req.body
    await user.create({ nome, email, senha }) // Criando um novo objeto
    res.send('Adicionado com sucesso!')
})

module.exports = router
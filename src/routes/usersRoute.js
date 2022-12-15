const express = require('express')
const router = express.Router()
const { user } = require('../models') // Pegando o model
const UserService = require('../services/users') // Chamando o service

const userService = new UserService(user) // Passando o Model para o Service


router.get('/', (req, res) => {
    res.send("Users!")
})

router.get('/cadastrados', async (req, res) => {
    const users = await userService.get() // Listando todos os users
    res.send(users)
})

router.post("/cadastrar", async (req, res) => {
    const { nome, email, senha } = req.body

    // Fazer o tratamento de erros
    try{
        await userService.add({ nome, email, senha }) // Criando um novo objeto
        res.status(201).send('Adicionado com sucesso!')
    }catch(err){
        console.log(err)
        res.status(400).send('Erro ao adicionar!')
    }
    
})

module.exports = router
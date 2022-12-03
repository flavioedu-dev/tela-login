const express = require('express')
const router = express.Router()

const posts = {
    name: 'Flávio',
}

router.get('/', (req, res) => {
    res.send("Users!")
})

router.get('/cadastrados', (req, res) => {
    res.send(posts)
})

module.exports = router
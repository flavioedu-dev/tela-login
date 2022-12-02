const express = require('express')
const router = express.Router()

const posts = {
    name: 'Flávio',
}

router.get('/users', (req, res) => {
    res.send(posts)
})

module.exports = router
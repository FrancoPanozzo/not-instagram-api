const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => {
    User.findAll()
        .then((us) => console.log(us[0].dataValues))
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router

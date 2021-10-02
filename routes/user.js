const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')

router.get('/', controller.getAll)
router.post('/create', controller.post)
router.get('/:id', controller.get)
router.put('/:id', controller.put)
router.delete('/:id', controller.delete)

module.exports = router

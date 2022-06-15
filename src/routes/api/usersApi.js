const express = require('express')
const router = express.Router()
const usersApiController = require('../../controllers/api/usersApiController')

router.get ('/', usersApiController.list)
router.get('/:id', usersApiController.detail)
router.post('/register', usersApiController.register)
router.put('/update/:id', usersApiController.update)
router.delete('/delete', usersApiController.delete)

module.exports = router
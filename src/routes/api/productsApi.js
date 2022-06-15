const express = require('express')
const router = express.Router()
const productsApiController = require('../../controllers/api/productsApiController')

router.get ('/', productsApiController.list)
router.get('/:id', productsApiController.detail)
router.post('/register', productsApiController.create)
router.put('/update/:id', productsApiController.update)
router.delete('/delete', productsApiController.delete)

module.exports = router
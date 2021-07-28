const router = require('express').Router()
const ProductController = require('../controllers/products')


router.get('/products', ProductController.get)
// router.post('/clientes', ProductController.post)
// router.put('/clientes/:id', ProductController.put)
// router.delete('/clientes/:id', ProductController.delete)

module.exports = router
const express = require("express")
const router= express.Router()
const path = require("path")
const productsController = require("../controllers/productsController");

router.get("/product-detail", productsController.products)

router.get("/cart", productsController.cart)



router.get("/products-agregar", productsController.agregar)
router.get("/products-modificar", productsController.modificar)
router.get("/products-eliminar", productsController.eliminar)

module.exports = router;
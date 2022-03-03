
const express = require("express");

const router = express.Router();

const controlador = require("../controllers/mainController");

router.get("/", controlador.index)
router.get("/login", controlador.login)
router.get("/cart", controlador.cart)
router.get("/register", controlador.register)
router.get("/products", controlador.products)
router.get("/admin", controlador.admin)
router.get("/products-agregar", controlador.agregar)
router.get("/products-modificar", controlador.modificar)
router.get("/products-eliminar", controlador.eliminar)


module.exports = router
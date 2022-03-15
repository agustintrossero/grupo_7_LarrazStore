
const express = require("express");

const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.index)
router.get("/login", mainController.login)
router.get("/cart", mainController.cart)
router.get("/register", mainController.register)
router.get("/products", mainController.products)
router.get("/admin", mainController.admin)
router.get("/products-agregar", mainController.agregar)
router.get("/products-modificar", mainController.modificar)
router.get("/products-eliminar", mainController.eliminar)


module.exports = router
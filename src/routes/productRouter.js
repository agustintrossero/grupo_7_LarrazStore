const express = require("express")
const router= express.Router()
const path = require("path")
const productsController = require("../controllers/productsController");
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/products'))
    },
  
    filename: (req, file, cb) => {
        cb(null, 'product-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({storage}).single('add-product')

router.get("/", productsController.products)
router.get("/cart", productsController.cart)

router.get("/agregar", productsController.agregar)
router.post('/store',upload, productsController.store);

router.get("/modificar", productsController.modificar)
router.get("/eliminar", productsController.eliminar)

module.exports = router;
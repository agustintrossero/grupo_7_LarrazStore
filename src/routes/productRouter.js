const express = require("express")
const router= express.Router()
const path = require("path")
const productsController = require("../controllers/productsController");
const multer = require('multer')
const { body } = require('express-validator')


var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))     
    }
})
var upload = multer({storage})

const validations = [

    body('nombre').notEmpty().isLength({min:5}).withMessage('Debes escribir el nombre del producto mayor 5 caracteres'),
    body('description').notEmpty().isLength({min:20}).withMessage('Tienes que escribir una descripcion mayor a 20 caracteres'),
    body('image').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error('Las extensiones de archivos permitidas son ".jpg", ".png", ".gif"');
            }
        }
        return true;
    })

]


//cart
router.get ('/cart', productsController.cart);
//Agregar producto
router.get('/agregar', productsController.agregar);

router.post('/agregar', upload.single('image'), validations, productsController.guardado);

//Productos
router.get('/', productsController.listado);

//Detalle
router.get('/detail/:id', productsController.detalle);

//Actualizacion de producto
router.get('/modificar/:id', productsController.editar);

router.put('/:id/guardar', upload.single('image') ,productsController.actualizar);

//Eliminar producto
router.delete('/detail/:id', productsController.eliminar)

module.exports = router;
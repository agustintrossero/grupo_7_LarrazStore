const express = require("express");
const router= express.Router();


const path = require("path");
const userController = require("../controllers/userController");
const multer = require('multer');

const { body } = require('express-validator');

//Disco donde se va a almacenar nuestra informacion. 
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        let imgFolder = path.join(__dirname, '../../public/images/avatars')
       cb(null, imgFolder); 
    },
    filename: function(req,file,cb){
        let fileName = file.fieldname + Date.now() + path.extname(file.originalname) 
       cb(null, fileName);
    }
})

var uploadFile = multer({storage: storage})

const validations = [
    body('username').notEmpty().withMessage('Debes elegir tu nombre de usuario'),
    body('name').notEmpty().withMessage('Debes escribir tu nombre'),
    body('surname').notEmpty().withMessage('Debes escribir tu apellido'),
    body('email').notEmpty().withMessage('Debes escribir tu correo electronico'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('passwordConfirm').notEmpty.withMessage('Aqui debes repetir tu contraseña')
]

router.get("/", userController.index)

//Formulario de Registro
//router.get ('/register' , userController.registerView)
router.get('/register', userController.register) 

//Procesar el Registro
//router.post ('/register' , uploadFile.single('avatar') , userController.register)
router.post('/register', uploadFile.single('avatar'), validations, userController.processRegister)

//Formulario de Login
router.get("/login", userController.login)

//Perfil del Usuario
router.get ('/:id', userController.detail)

router.get ('/edit/:id' , userController.editView)
router.put ('/edit/:id' , uploadFile.single('avatar') , userController.edit)

router.get ('/delete/:id' , userController.deleteView)
router.delete ('/delete/:id' , userController.delete)

module.exports = router
const express = require("express");
const router= express.Router();


const path = require("path");
const userController = require("../controllers/userController");
const multer = require('multer');
const guestMiddleware = require('..//middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');//Middleware para autentificar a los usuarios de nuestro sitio.

const { body } = require('express-validator')

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

//Validaciones para la carga de datos en nuestro formulario de registro.
const validations = [
    body('username').notEmpty().withMessage('Debes elegir tu nombre de usuario'),
    body('name').notEmpty().isLength({min:2}).withMessage('Debes escribir tu nombre'),
    body('surname').notEmpty().isLength({min:2}).withMessage('Debes escribir tu apellido'),
    body('email')
        .notEmpty().withMessage('Debes escribir tu correo electronico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo electronico valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),

]

//Index de usuarios
router.get("/", userController.index);

//Formulario de Registro
router.get('/register', guestMiddleware, userController.register);

//Procesar el Registro
router.post('/register', uploadFile.single('avatar'), validations, userController.processRegister);

//Formulario de Login
router.get('/login', guestMiddleware, userController.login);

//Procesar el Login
router.post('/login', userController.loginProcess);

//Perfil del Usuario
router.get('/profile', authMiddleware, userController.profile)

//Logout
router.get('/logout', userController.logout);//Falta implementar en la vista el boton para poder desloguear al usuario. Las funcionalidades ya estan todas implementadas.

router.get ('/edit/:id' , userController.editView)
router.put ('/edit/:id' , uploadFile.single('avatar') , userController.edit)

router.get ('/delete/:id' , userController.deleteView)
router.delete ('/delete/:id' , userController.delete)

module.exports = router;
const express = require("express");
const router= express.Router();


const path = require("path");
const userController = require("../controllers/userController");
const multer = require('multer');

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
    body('name').notEmpty().withMessage('Debes escribir tu nombre'),
    body('surname').notEmpty().withMessage('Debes escribir tu apellido'),
    body('email')
        .notEmpty().withMessage('Debes escribir tu correo electronico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo electronico valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('passwordConfirm').notEmpty().withMessage('Tienes que confirmar tu contraseña'),

    //Validacion "Custom" para la carga de imagenes en nuestro formulario de registro.
    body('avatar').custom((value, {req}) => {
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

router.get("/", userController.index);

//Formulario de Registro
router.get('/register', userController.register);

//Procesar el Registro
router.post('/register', uploadFile.single('avatar'), validations, userController.processRegister);

//Formulario de Login
router.get('/login', userController.login);

//Procesar el Login
router.post('/login', userController.loginProcess);

//Perfil del Usuario
//router.get ('/:id', userController.detail)

//Perfil del Usuario
router.get('/profile', userController.profile)

router.get ('/edit/:id' , userController.editView)
router.put ('/edit/:id' , uploadFile.single('avatar') , userController.edit)

router.get ('/delete/:id' , userController.deleteView)
router.delete ('/delete/:id' , userController.delete)

module.exports = router
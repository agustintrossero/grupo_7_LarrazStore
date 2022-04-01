const express = require("express")
const router= express.Router()
const path = require("path")
const userController = require("../controllers/userController");
const multer = require('multer')

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

router.get("/", userController.index)

router.get("/login", userController.login)


router.get ('/register' , userController.registerView) 
router.post ('/register' , uploadFile.single('avatar') , userController.register)

router.get ('/:id', userController.detail)

router.get ('/edit/:id' , userController.editView)
router.put ('/edit/:id' , uploadFile.single('avatar') , userController.edit)

router.get ('/delete/:id' , userController.deleteView)
router.delete ('/delete/:id' , userController.delete)

module.exports = router
const res = require("express/lib/response");
const fs = require("fs");
const path = require("path");

//const userFilePath = path.join(__dirname, "../data/users.JSON");
//const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

//Modulos requeridos para el proceso de register y de login.

const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require("../data/models");
const { devNull } = require("os");

const controller = {
  //Index de usuarios -- OK
  index: function (req, res) {
    db.usuarios.findAll()
      .then((users) => {
      console.log(users)
      res.render("users/index", { users });
    });
  },
  
  register: function (req, res) {
    db.usuarios.findAll().then(function (usuarios) {
      res.render("users/register", { usuarios });
    });
  },

  /*processRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    */
  //Proceso de validacion del register - Express Validator.
  processRegister: function (req, res) { //Hay que agregar username y borrar confirmpassword de la base de datos
    var errorsForm = validationResult(req);  
      var registerUserDb;
      console.log(errorsForm)
      db.usuarios.findAll()
      .then(users => {
        registerUserDb = users.find(user => user.email == req.body.email)
      })
      

       if (registerUserDb) {
        console.log("encontro errores en el email")
        return res.render("users/register", {
          errors: {
            email: {
              msg: "Este email ya se encuentra registrado",
            },
          },
          oldData: req.body,
        }); 
      } else {
        if(errorsForm.isEmpty()) {
          let encryptedPass = bcryptjs.hashSync(req.body.password, 10)
     //     let confirmPass = bcryptjs.hashSync(req.body.confirmPassword, 10) //hay que borrar passwordconfirm de la base de datos
  
        

          db.usuarios.create({
            username: req.body.username,
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: encryptedPass,
      //      passwordConfirm: confirmPass,
            legal_buy: parseInt(req.body.legal_buy),
            avatar: "/images/" + req.file.filename,
           })
           console.log("se creo el usuario")
           return res.redirect('/');
           
        } else {
          req.file = ""
          console.log("encontro errores")
          return res.render("users/register", {
            errors: errorsForm.array(),
            oldData: req.body,
          });
          
        }
      }      
    },

    login: function(req, res) {
      res.render("users/login");
    },


    loginProcess: (req,res) => {
    let userToLogin = funcionalidadUser.findByField("email", req.body.email);

    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );

      if (isOkThePassword) {
        delete userToLogin.password;
  //      delete userToLogin.passwordConfirm;
        req.session.userLogged = userToLogin;
        return res.redirect("/users/profile");
      }

      return res.render("users/login", {
        errors: {
          password: {
            msg: "Las credenciales son inválidas",
          },
        },
      });
    }

    return res.render("users/login", {
      errors: {
        email: {
          msg: "Este email no se encuentra registrado",
        },
      },
    });
  },

  editView: (req, res) => {
    db.usuarios.findByPk(req.params.id)
    .then(users => {
      res.render("users/edit", {"user" : users});
    })
    
  },
  
  edit: (req, res) => {
    //falta agregar poder editar tambien la foto con el avatar = req.file.filename;
    db.usuarios.update({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      legal_buy: parseInt(req.body.legal_buy),
    }, {
      where : {
        id : req.params.id
      }
    })
    res.redirect("/users");
  },
  deleteView: (req, res) => {
    db.usuarios.findByPk(req.params.id)
    .then(users => {
      res.render("users/delete", { "user" : users })
    })
  },
  delete: (req, res) => {
    db.usuarios.destroy({
      where: {
        id : req.params.id
      }
    })

    res.redirect("/users");
  },

  //Perfil del usuario.
  profile: (req, res) => {
    return res.render("users/profile", {
      user: req.session.userLogged,
    });
  },

  //Logout
  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = controller;

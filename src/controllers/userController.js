const res = require("express/lib/response");
const fs = require("fs");
const path = require("path");

const userFilePath = path.join(__dirname, "../data/users.JSON");
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

//Modulos requeridos para el proceso de register y de login.
const User = require("../data/models");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require("../data/models");

const controller = {
  //Index de usuarios -- OK
  index: function (req, res) {
    db.usuarios.findAll().then((usuarios) => {
      res.render("users/index", { usuarios });
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
  processRegister: function (req, res) {
    const resultValidation = validationResult(req);

    

      db.usuarios.create({
        name: req.body.name,
      let allUsers;      
      let userInDb;
      
      db.usuarios.findAll()
      .then(users =   allUsers = users
      })

      let funcionalidadUser = {
        //Devuelve el primer usuario encontrado por el campom que queremos.
        findByField: function(field,text) {
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
        }
       }

       let userInDb = funcionalidadUser.findByField("email", req.body.email);

       if (userInDb) {
        return res.render("users/register", {
          errors: {
            email: {
              msg: "Este email ya se encuentra registrado",
            },
          },
          oldData: req.body,
        });
      } else {
        let encryptedPass = bcryptjs.hashSync(req.body.password, 10)
        let confirmPass = bcrypt.hashSync(req.body.confirmPassword, 10) //hay que borrar passwordconfirm de la base de datos

        db.usuarios.create({
          name: req.body.name,
          surname: req.body.surname,
          email: req.body.email,
          password: encryptedPass,
          passwordConfirm: confirmPass,
          legal_buy: parseInt(req.body.legal_buy),
          avatar: "/images/" + req.file.filename,
         })
         return res.render("users/login");
      }      let userFound = allUsers.find((oneUser) => oneUser[field] === text);
        return userFound;
      return res.render("users/register", {
        errors: resultValidation.mapped(),
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    };

    let userToLogin = funcionalidadUser.findByField("email", req.body.email);

    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );

      if (isOkThePassword) {
        delete userToLogin.password;
        delete userToLogin.passwordConfirm;
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
    let user = users.find((el) => el.id == req.params.id);
    res.render("users/edit", { user });
  },
  
  edit: (req, res) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == req.params.id) {
        let userAvatar = users[i].avatar;
        let { username, name, surname, email, password } = req.body;
        let id = users[i].id;
        users[i] = { id, username, name, surname, email, password };
        if (req.file !== undefined) {
          users[i].avatar = "images/avatars/" + req.file.filename;
        } else {
          users[i].avatar = userAvatar;
        }
      }
    }
    let editedUser = JSON.stringify(users);
    fs.writeFileSync(userFilePath, editedUser);
    res.render("users/index", { users });
  },
  deleteView: (req, res) => {
    let user = users.find((el) => el.id == req.params.id);
    res.render("users/delete", { user });
  },
  delete: (req, res) => {
    let deletedUser = users.filter((el) => el.id != req.params.id);
    let newUsers = JSON.stringify(deletedUser);
    fs.writeFileSync(userFilePath, newUsers);
    res.render("users/index", { users: deletedUser });
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

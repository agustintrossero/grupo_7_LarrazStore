const res = require("express/lib/response");
const fs = require("fs");
const path = require("path");

const userFilePath = path.join(__dirname, "../data/users.JSON");
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

//Modulos requeridos para el proceso de register y de login.
const User = require("../data/models");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

const controller = {

  //Index de usuarios
  index: (req, res) => {
    User.usuarios.findAll()
      .then(function(usuarios){
        res.render("users/index", { users: usuarios })
      })
   },

  register: (req, res) => {
    //res.cookies()//Falata terminar de armar
    return res.render("users/register");
  },

  //Proceso de validacion del register - Express Validator.
  processRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    let userInDb = User.findByField("email", req.body.email);

    //Sirve para que no se puedan registrar dos usuarios con el mismo email.
    if (userInDb) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "Este email ya se encuentra registrado",
          },
        },
        oldData: req.body,
      });
    }

    //Sirve para agregar la propiedad "avatar" en nuestro JSON, y tambien, para encriptar el password.
    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      passwordConfirm: bcryptjs.hashSync(req.body.passwordConfirm, 10),
      avatar: req.file.filename,
    };

    let userCreated = User.create(userToCreate);

    return res.render("users/login");
  },

  login: (req, res) => {
    res.render("users/login");
  },

  //Proceso de validacion del Login.
  loginProcess: (req, res) => {
    let userToLogin = User.findByField("email", req.body.email);

    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );

      if (isOkThePassword) {
        delete userToLogin.password;
        delete userToLogin.passwordConfirm;
        req.session.userLogged = userToLogin;

        return res.redirect('/users/profile');
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
    return res.render('users/profile', {
        user: req.session.userLogged
    });
  },

  //Logout
  logout: (req,res) => {
    req.session.destroy();
    return res.redirect('/');
  }

};

module.exports = controller;

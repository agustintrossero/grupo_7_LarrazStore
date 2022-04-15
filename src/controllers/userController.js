const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

const userFilePath = path.join(__dirname, '../data/users.JSON'); 
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8')); 

//const User = require('../models/User.js');

const { validationResult } = require('express-validator');


const controller = {
    index: (req, res) => {
        res.render ('users/index' , {users})
    },

    register: (req, res) => {
        return res.render ('users/register')
    },

//Proceso de validacion del register - Express Validator.
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
    },

/*
    registerView: (req, res) => {
        res.render ('users/register')
    },
    register: (req, res) => {
        res.send("Viaje por POSTTTTTTTTT")
        

        const newUser = req.body
        newUser.id = Date.now()
        newUser.avatar = "/images/avatars/" + req.file.filename
        users.push(newUser)
        fs.writeFileSync(userFilePath, JSON.stringify(users))

        console.log(newUser)

    },
*/

    detail: (req, res) => {
        let user = users.find (el => el.id == req.params.id)
        res.render ('users/detail' , {user})
    },
    login: (req,res) =>{
        res.render("users/login")
    },

    loginProcess: (req,res) => {
        let userToLogin = User.findByField('email', req.body.email);
        if (userToLogin){

        }
        return res.render('userLoginForm',{
            
        })
    },

    editView: (req, res) => {
        let user = users.find (el => el.id == req.params.id)
        res.render ('users/edit' , {user})
    },
    edit: (req, res) => {
        for (let i = 0; i < users.length; i++) {
        if (users[i].id == req.params.id) {
        let userAvatar = users[i].avatar
        let {username , name , surname , email, password} = req.body
        let id = users[i].id
        users[i] = {id , username , name , surname , email , password}
        if (req.file !== undefined) {
            users[i].avatar = "/images/avatars/" + req.file.filename
        } else {
        users[i].avatar = userAvatar
        }
        }
    }
    let editedUser = JSON.stringify (users)
    fs.writeFileSync (userFilePath , editedUser)
    res.render ('users/index' , {users})
    },
    deleteView: (req, res) => {
        let user = users.find (el => el.id == req.params.id)
        res.render ('users/delete' , {user})
    },
    delete: (req, res) => {
        let deletedUser = users.filter (el => el.id != req.params.id)
        let newUsers = JSON.stringify (deletedUser)
        fs.appendFileSync (userFilePath , newUsers)
        res.render ('users/index' , {users : deletedUser})
    }
}

module.exports = controller
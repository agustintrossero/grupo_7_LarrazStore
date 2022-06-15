let db = require('../../data/models')
let bcrypt = require('bcrypt')
const res = require('express/lib/response')

const Controller = {
    list: (req,res) => {
        db.usuarios.findAll()
            .then(users => {
                let data = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: 'api/users'
                    },
                    data: users
                }
                res.json(data)
            })
    },

    detail: (req,res) => {
        db.usuarios.findByPk(req.params.id)
            .then(user => {
                let data = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: 'api/users/:id'
                    },
                    data: user
                }
                res.json(data)
            })
    },

    register: (req,res) => {
        let encryptedPass = bcrypt.hashSync(req.body.password, 10)
        usuarios.create(
            {
                username: req.body.username,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: encryptedPass,
                avatar: 'DefaultAvatar.jpg'
            }
        )
    
        .then(newUser => {
            let data;
            if(newUser) {
                data = {
                    meta: {
                        status: 200,
                        total: newUser.length,
                        url: 'api/users/register'
                    },
                    data: newUser
                }
            } else {
                data = {
                    meta: {
                        status: 200,
                        total: newUser.length,
                        url: 'api/users/register'
                    },
                    data: newUser
                }
            }
            res.json(data)
        })
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let encryptedPass = req.body.password
        usuarios.update(
            {
                username: req.body.username,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: encryptedPass,
            },
            {
                where: {id: req.params.id}
            }
        )
        .then(updatedUser => {
            let data;
            if(updatedUser) {
                data = {
                    meta: {
                        status: 200,
                        total: updatedUser.length,
                        url: 'api/users/update'
                    },
                    data: updatedUser
                }
            } else {
                data = {
                    meta: {
                        status: 200,
                        total: updatedUser.length,
                        url: 'api/users/update'
                    },
                    data: updatedUser
                }
            }
            res.json(data)
        })
        .catch(error => res.send(error))
    },
    delete: (req,res) => {
        usuarios.destroy(
            {
                where: {id: req.params.id},
                force: true
            }
        )
        .then(deletedUser => {
            let data;
            if(deletedUser) {
                data = {
                    meta: {
                        status: 200,
                        total: deletedUser.length,
                        url: 'api/users/update'
                    },
                    data: deletedUser
                }
            } else {
                data = {
                    meta: {
                        status: 200,
                        total: deletedUser.length,
                        url: 'api/users/update'
                    },
                    data: deletedUser
                }
            }
            res.json(data)
        })
        .catch(error => res.send(error))
    }
}

module.exports = Controller
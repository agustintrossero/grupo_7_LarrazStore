let db = require('../../data/models')

const Controller = {
    list: (req,res) => {
        db.productos.findAll()
            .then(products => {
                let data = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/products'
                    },
                    data: products
                }
                res.json(data)
            })
    },

    detail: (req,res) => {
        db.productos.findByPk(req.params.id)
            .then(product => {
                let data = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: 'api/products/:id'
                    },
                    data: product
                }
                res.json(data)
            })
    },

    create: (req,res) => {
        db.productos.create(
            {
            nombre: req.body.nombre,
            precio: req.body.precio,
            description: req.body.description,
            image: "/images/" + req.file.filename,
            id_check: parseInt(req.body.productCheck),
            id_category: parseInt(req.body.categoria)
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
        productos.update(
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
        productos.destroy(
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
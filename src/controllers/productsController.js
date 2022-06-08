const fs = require ("fs")
const path = require("path");
//const { defaultValueSchemable } = require("sequelize/types/utils");
const productsFilePath = path.join(__dirname, '../data/products.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const { validationResult } = require("express-validator");


//Sequelize
let db = require('../data/models');

const productsController = {
    //Agregar producto.
    agregar: function (req, res) {
        db.productos.findAll()
            .then(function (productos) {
                res.render("products/agregar", {productos})
            })
    },

    //Guardado del producto creado.
    guardado: function (req, res) { 
        let errorsForm = validationResult(req); 
        
        db.productos.create({

            nombre: req.body.nombre,
            precio: req.body.precio,
            description: req.body.description,
            image: "/images/" + req.file.filename,
            id_check: parseInt(req.body.productCheck),
            id_category: parseInt(req.body.categoria)
        })
        
        if(!errorsForm.isEmpty()){
            console.log(errorsForm)  
            return res.render("products/agregar", {
                errors: errorsForm.mapped(),
                oldData: req.body,
              })      
        };
        res.redirect("/products");
    },

    //Listado de productos.
    listado: function (req, res) {
        db.productos.findAll()
            .then((productos) => {
                res.render("products/products", {productos});
            })
    },

    //Detalle producto.
    detalle: function (req, res) {
        db.productos.findByPk(req.params.id)
            .then(function(productDetail) {
                res.render("products/detalle", {productDetail})
            })
    },

    //Actualizar producto.
    editar: function (req, res) {
        db.productos.findByPk(req.params.id)
            .then(function (productToEdit) {
                res.render("products/modificar", {productToEdit})
            })
    },

    actualizar: function (req, res) {
        let productImage;
        let reqFile = req.file
        if (!reqFile) {
            db.productos.findByPk(req.params.id)
            .then((product) => {
                productImage = product.dataValues.image
            })
        } else {
            productImage = "/images/" + req.file.filename
        }
        console.table(reqFile)
        db.productos.update({
            nombre: req.body.nombre,
            precio: req.body.precio,
            description: req.body.description,
            image: productImage,
            id_check: parseInt(req.body.productCheck),
            id_category: parseInt(req.body.categoria)
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect("/products");

    },
    
    //Eliminar producto.
    eliminar: function(req, res) {
        db.productos.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect("/products")
    }
}

module.exports = productsController;



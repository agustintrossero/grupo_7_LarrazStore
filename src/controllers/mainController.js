const path = require("path")
const fs = require("fs")

const productsPathFile = path.join(__dirname, "../data/products.JSON")
const products = JSON.parse(fs.readFileSync(productsPathFile, 'utf-8'));


const mainController = {
    index: (req, res) => {
        return res.render("index")
    },
    login: (req, res) => {
        return res.render("users/login")
    },
    cart: (req, res) => {
        return res.render("products/product-cart")
    },
    register: (req, res) => {
        return res.render("users/register")
    },
    products: (req, res) => {
        let productsList = products
        return res.render("products/product-detail",{productos : productsList})
    },
    admin: (req, res) => {
        return res.render("admin")
    },
    agregar: (req, res) => {
        return res.render("products/agregar")
    },
    modificar: (req, res) => {
        return res.render("products/modificar")
    },
    eliminar: (req, res) => {
        return res.render("products/eliminar")
    },
}

module.exports = mainController;
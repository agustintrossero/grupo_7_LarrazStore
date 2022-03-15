const fs = require ("fs")
const path = require("path")
const productsFilePath = path.join(__dirname, '../data/products.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {

    cart: (req, res) => {
        return res.render("./products/product-cart")
    },
    products: (req, res) => {
        let productsList = products
        return res.render("./products/product-detail",{productos : productsList})
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

module.exports = productsController



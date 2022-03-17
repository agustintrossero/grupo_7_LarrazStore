const fs = require ("fs")
const path = require("path")
const productsFilePath = path.join(__dirname, '../data/products.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {

    products: (req, res) => {
        let productsList = products
        return res.render("./products/product-detail",{productos : productsList})
    },

    cart: (req, res) => {
        return res.render("./products/product-cart")
    },
    
    agregar: (req, res) => {
        return res.render("./products/agregar")
    },

    store: (req, res) => {
        const newProduct = {
            id: products.length + 1,
            nombre: req.body.nombre,
            precio: req.body.precio,
            description: req.body.description,
            image : req.file.filename
        }

        
        
        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products))

        console.log(newProduct.req.body);
        

        res.redirect("/products");
    },

    modificar: (req, res) => {
        return res.render("./products/modificar")
    },
    eliminar: (req, res) => {
        return res.render("./products/eliminar")
    },

}

module.exports = productsController



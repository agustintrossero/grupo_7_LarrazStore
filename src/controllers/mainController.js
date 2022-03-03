

const controlador = {
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
        return res.render("products/product-detail")
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

module.exports = controlador;


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
    products: (req, res) => {
        return res.render("products/product-detail")
    },
    register: (req, res) => {
        return res.render("users/register")
    },
}

module.exports = controlador;
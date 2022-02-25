

const controlador = {
    index: (req, res) => {
        return res.render("index")
    },
    login: (req, res) => {
        return res.render("login")
    },
    cart: (req, res) => {
        return res.render("product-cart")
    },
    products: (req, res) => {
        return res.render("product-detail")
    },
    register: (req, res) => {
        return res.render("register")
    },
}

module.exports = controlador;
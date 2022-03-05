const productos = [{
    nombre : "CPU GAMER AEROCOOL",
    precio : "precio",
    description: "descripcion",
    img: "/images/silla-gamer-aerocool.jpg"
},{
    nombre : "MOUSE GAMER LOGITECH G203 LILA",
    precio : "precio",
    description: "descripcion",
    img: "/images/mouse-gamer-logitech.jpg"
},{
    nombre : "SAMSUNG GALAXY NOTE 20 128GB",
    precio : "precio",
    description: "descripcion",
    img: "/images/note-20.jpg"
},{
    nombre : "SILLA GAMER AEROCOOL C/ DETALLES EN ROJO",
    precio : "precio",
    description: "descripcion",
    img: "/images/silla-gamer-aerocool.jpg"
}]

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
        return res.render("products/product-detail",{"productos":productos})
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
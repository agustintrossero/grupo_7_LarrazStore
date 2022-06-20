const path = require("path")
const fs = require("fs")

const productsPathFile = path.join(__dirname, "../data/products.JSON")
const products = JSON.parse(fs.readFileSync(productsPathFile, 'utf-8'));


const mainController = {
    index: (req, res) => {
        return res.render("index")
    },

    search: (req, res) => {
        return res.render("index")
    },

    admin: (req, res) => {
        return res.render("admin")
    },

    service:(req,res) => {
        return res.render("service")
    },

    armarPC:(req,res) => {
        return res.render("armarPC")
    }

}

module.exports = mainController;
const fs = require ("fs")
const path = require("path");
//const { defaultValueSchemable } = require("sequelize/types/utils");
const productsFilePath = path.join(__dirname, '../data/products.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
        let arr = [req.body.nombre,req.body.precio,req.body.description,req.body.image]
        console.log(arr)
        console.log(req.file)
        db.productos.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            description: req.body.description,
            image: "/public/images/" + req.file.filename
        });

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
        db.productos.findByPk(req.params.id, {
            include: [{association : "usuarios"}]
        })
            .then(function(producto) {
                res.render("detalle", {producto : producto})
            })
    },

    //Actualizar producto.
    editar: function (req, res) {
        db.productos.findAll()
            .then(function (productos) {
                return res.render("modificar", {productos : productos})
            })
    },

    actualizar: function (req, res) {
        db.productos.update({
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion:req.body.descripcion,
            image: req.body.image
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect("/productos/" + req.params.id);

    },
    
    //Eliminar producto.
    eliminar: function(req, res) {
        db.productos.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect("/productos")
    }
}


/*
---ESTO ES PARTE DEL CRUD VIEJO CUANDO USABAMOS EL JSON---

const productsController = {

    products: (req, res) => {
        let productsList = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        return res.render("./products/products",{productos : productsList})
    },

    detail: (req, res) => {
       // let productsList = products
		let productSelected = req.params.id
		res.render("products/detail", {"productDetail": products[productSelected - 1]})
		
	},

    cart: (req, res) => {
        return res.render("./products/product-cart")
    },
    
    agregar: (req, res) => {
        res.render("products/agregar")
    },

    store: (req, res) => {

        const newProduct = req.body
		newProduct.id = products.length + 1
        newProduct.image = "/images/" + req.file.filename
        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products))
        res.redirect("/products");
        
    },

    modificar: (req, res) => {
        let productSelected = req.params.id
        const productToEdit = products.find(product => product.id == productSelected)
        res.render("products/modificar" , {productToEdit: productToEdit} )
    },

    guardar: (req, res) => {

        let id = req.params.id;
		let infoForm=req.body;
		

		products.forEach(function (elemento){
			if (elemento.id == id)
			{
				elemento.nombre = infoForm.nombre;
				elemento.precio = infoForm.precio;
				elemento.categoria = infoForm.cetegoria;
				elemento.description = infoForm.description;
			}
		})
	
		fs.writeFileSync(productsFilePath,JSON.stringify(products))
		res.redirect('/products')
   },

    eliminar: (req, res) => {
        let reqID = req.params.id;

        const productoEliminado = products.filter((producto)=>{
            return producto.id != reqID;
        })

        fs.writeFileSync(productsFilePath,JSON.stringify(productoEliminado));

        //console.log(productoEliminado);

         res.redirect("/products");
    },

}
*/

module.exports = productsController;



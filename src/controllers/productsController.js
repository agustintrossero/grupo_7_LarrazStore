const fs = require ("fs")
const path = require("path")
const productsFilePath = path.join(__dirname, '../data/products.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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

module.exports = productsController



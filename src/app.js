const express = require('express');
const path = require('path');
const app = express();
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

// const pathFile = path.resolve(__dirname, './public');
//app.use(express.static(pathFile));
app.use(express.static("public"))
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.urlencoded({ extended: false })); // Para capturar la info de los formularios
app.use(express.json());

app.set("view engine", "ejs");
app.set('views',"./src/views");

const mainRouter = require("./routes/mainRouter")
const productsRouter = require("./routes/productRouter");
const userRouter = require ('./routes/userRouter')

app.use("/", mainRouter);
app.use("/products/", productsRouter)
app.use('/users/' , userRouter)

app.listen (5000, () => {
    console.log("Larraz Store en funcionamiento!")
});


//app.get('/' , (req,res) => {res.sendFile(path.resolve(__dirname, './views/index.html'))});
//app.get('/products' , (req,res) => {res.sendFile(path.resolve(__dirname, './views/product-detail.html'))});
//app.get('/cart' , (req,res) => {res.sendFile(path.resolve(__dirname, './views/product-cart.html'))});
//app.get('/register' , (req,res) => {res.sendFile(path.resolve(__dirname, './views/register.html'))});
//app.get('/login' , (req,res) => {res.sendFile(path.resolve(__dirname, './views/login.html'))});

const express = require('express');
const path = require('path');
const app = express();
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session')


// const pathFile = path.resolve(__dirname, './public');
//app.use(express.static(pathFile));
app.use(express.static("public"))
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.urlencoded({ extended: false })); // Para capturar la info de los formularios
app.use(express.json());

//Express-Session ----> configs (no es relevante).
app.use(session({
    secret: 'Shhh, Its a secret',
    resave: false,
    saveUninitialized: false,
}));

//Middleware para ocultar el boton de registro/login cuando el usuario esta logueado
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
app.use(userLoggedMiddleware);

//Template engine
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

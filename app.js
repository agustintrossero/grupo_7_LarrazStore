const express = require('express');
const path = require('path');
const app = express();

const pathFile = path.resolve(__dirname, './public');
app.use(express.static(pathFile));

app.listen (5000);

app.get('/home' , (req,res) => {res.sendfile(path.resolve(__dirname, './views/index.html'))});
app.get('/products' , (req,res) => {res.sendfile(path.resolve(__dirname, './views/product-detail.html'))});
app.get('/cart' , (req,res) => {res.sendfile(path.resolve(__dirname, './views/product-cart.html'))});
app.get('/register' , (req,res) => {res.sendfile(path.resolve(__dirname, './views/register.html'))});
app.get('/login' , (req,res) => {res.sendfile(path.resolve(__dirname, './views/login.html'))});


function userLoggedMiddleware (req,res,next) {
    console.log('pase por el user logged');
    res.locals.isLogged = true;
    
    next();
}

module.exports = userLoggedMiddleware;
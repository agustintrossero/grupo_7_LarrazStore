function userLoggedMiddleware (req,res,next) {
    res.locals.isLogged = false;

    if (req.session.userLogged) {
        req.session.isLogged = true
        res.locals.userLogged = req.session.userLogged;
    } 
    
    next();
}

module.exports = userLoggedMiddleware;
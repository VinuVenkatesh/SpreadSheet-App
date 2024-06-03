async function invalidURL(req, res, next){
    if(req.originalUrl != "/favicon.ico"){
        res.send("Not a valid url");
    }
    next();
};

module.exports = invalidURL
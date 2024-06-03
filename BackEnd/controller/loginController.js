const login = require("../model/login");

async function checkLogin(req, res){
    const data = await login.findOne({username: req.params.username});
    if(data != null && data.password == req.params.password){
        res.send("200");
    }
    else{
        res.send("401");
    }
}

async function createLogin(req, res){
    const newLogin = new login(req.body);
    try{
        await newLogin.save();
        res.json("Created");
    }
    catch(err){
        res.json("Username already exists");
    }
}

module.exports = {
    checkLogin,
    createLogin
}
const login = require("express").Router();

login.get('/', (req, res)=>{
    res.render("login", {
        title: "Login"
    });
});

module.exports = login;
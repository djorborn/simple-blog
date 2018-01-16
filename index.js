const express = require("express");
const app = express();
const mongoose = require("./app/modules/mongoose");
require("dotenv").config();

app.set("view engine", "pug");
app.set("views", __dirname + "/app/views")

app.use(
    [express.static(__dirname + "/app/public")],
    [express.urlencoded({extended:false})],
    [require("cookie-parser")()],
    [],
    [require("./app/routes/router")]
).listen(3000);

module.exports = app;
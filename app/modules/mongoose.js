const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb", {useMongoClient: true});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongodb Error: "));

db.once("open", ()=>{console.log("Mongodb Connected")});

module.exports = mongoose;
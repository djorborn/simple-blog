const mongoose = require("./mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    profile: {
        name: {
            first: String,
            last: String
        },
        email: String
    },
    auth: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
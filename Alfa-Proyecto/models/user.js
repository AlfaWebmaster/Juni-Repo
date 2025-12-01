const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    links: [String]
});

// 👇 AQUI ES DONDE DECIMOS LA COLECCIÓN REAL
module.exports = mongoose.model("User", UserSchema, "loginUsuarios");

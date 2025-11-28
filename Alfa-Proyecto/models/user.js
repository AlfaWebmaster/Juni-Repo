const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    links: { type: [String], default: [] },
    fechaRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UsuarioSchema);

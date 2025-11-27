const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
    token: String,
    creado: { type: Date, default: Date.now, expires: "7d" }
});

module.exports = mongoose.model("Token", TokenSchema);

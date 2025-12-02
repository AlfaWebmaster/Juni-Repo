const express = require("express");
const router = express.Router();
const User = require("../models/User");
//const bcrypt = require("bcrypt"); para las contraseñas encriptadas
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
    console.log("📩 RECIBIDO EN LOGIN:", req.body);

    const { username, password } = req.body;

    const user = await User.findOne({ username });

    console.log("🔎 Usuario encontrado en DB:", user);

    if (!user) {
        return res.status(400).json({ msg: "Usuario no encontrado" });
    }

    // 🔥 Comparación en TEXTO PLANO (sin bcrypt)
    if (password !== user.password) {
        console.log("❌ Contraseña incorrecta");
        return res.status(400).json({ msg: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    console.log("✅ Login correcto");

    res.json({ token });
});

module.exports = router;

/*
router.post("/login", async (req, res) => {
    console.log("📩 RECIBIDO EN LOGIN:", req.body);

    const { username, password } = req.body;

    console.log("🔍 Username recibido:", username);
    console.log("🔍 Password recibido:", password);

    const user = await User.findOne({ username });

    console.log("🔎 Usuario encontrado en DB:", user);

    if (!user) {
        console.log("❌ Usuario NO encontrado");
        return res.status(400).json({ msg: "Usuario no encontrado" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("🔐 ¿Contraseña correcta?:", isMatch);

    if (!isMatch) {
        console.log("❌ Contraseña incorrecta");
        return res.status(400).json({ msg: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    console.log("✅ Login correcto, token generado");

    res.json({ token });
});

module.exports = router;
*/

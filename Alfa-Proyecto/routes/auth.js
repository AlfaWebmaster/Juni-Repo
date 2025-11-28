const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// LOGIN
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user)
            return res.status(400).json({ msg: "Usuario no encontrado" });

        const passCorrecta = await bcrypt.compare(password, user.password);

        if (!passCorrecta)
            return res.status(400).json({ msg: "Contraseña incorrecta" });

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        res.json({ token });

    } catch (error) {
        res.status(500).json({ msg: "Error en el servidor" });
    }
});

module.exports = router;


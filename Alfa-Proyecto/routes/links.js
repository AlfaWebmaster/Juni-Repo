const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.get('/mis-enlaces', async (req, res) => {
    const token = req.headers.authorization;

    if (!token)
        return res.status(401).json({ msg: "No hay token" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user)
            return res.status(404).json({ msg: "Usuario no encontrado" });

        res.json({ links: user.links });

    } catch (error) {
        console.error(error);
        res.status(401).json({ msg: "Token inválido" });
    }
});

module.exports = router;



const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Lista de enlaces del usuario");
});

router.post("/", (req, res) => {
    res.send("Crear enlace");
});

module.exports = router;

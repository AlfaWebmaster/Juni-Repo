const express = require("express");
const router = express.Router();

// Importar sub-rutas (cuando existan)
router.use("/auth", require("./auth"));  // rutas de login y registro
router.use("/enlaces", require("./links")); // rutas de enlaces personalizados

// Ruta de prueba
router.get("/", (req, res) => {
    res.send("API funcionando desde /api");
});

module.exports = router;


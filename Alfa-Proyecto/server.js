require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middlewares
app.use(cors({
    origin: process.env.FRONTEND_URL || "*"
}));
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Conectado a MongoDB"))
    .catch(err => console.error("❌ Error al conectar MongoDB:", err));

// Iniciar servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado en puerto ${PORT}`);
});

const rutas = require("./routes/index");
app.use("/api", rutas);

const conectarDB = require('./config/db');

conectarDB(); // <<--- Ahora puedes usarlo

const authRoutes = require('./routes/auth');
const linksRoutes = require('./routes/links');

app.use('/api/auth', authRoutes);
app.use('/api/links', linksRoutes);



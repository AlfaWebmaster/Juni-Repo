require("dotenv").config();
const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");

const app = express();

// Conectar a MongoDB
conectarDB();

//
const User = require("./models/User");

User.find().then(users => {
  console.log("📌 Usuarios en la base realmente conectada:", users);
});


//



app.use(cors({
  origin: process.env.FRONTEND_URL || "*"
  //credentials: true
}));

// Middlewares
app.use(express.json());

// Servir frontend
app.use(express.static("public"));

// Rutas API
app.use("/api/auth", require("./routes/auth"));
app.use("/api/links", require("./routes/links"));

// OPCIONAL: Ruta de prueba (moverla fuera de "/")
app.get("/api", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

// Iniciar servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado en puerto ${PORT}`);
});

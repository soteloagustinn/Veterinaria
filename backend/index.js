import express from "express";
import dotenv from 'dotenv'
import conectarDB from "./config/db.js";
import veterniarioRoutes from './routes/veterinarioRoutes.js';

const app = express();
// Middleware para parsear JSON
app.use(express.json());

dotenv.config();

conectarDB();

app.use("/api/veterinarios", veterniarioRoutes);

const PORT = process.env.PORT || 4000
app.listen(PORT, () =>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
});
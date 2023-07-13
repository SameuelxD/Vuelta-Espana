import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import CiclistaRoutes from "./routes/ciclistas.routes.js"
import EquipoRoutes from "./routes/equipos.routes.js";
import EtapaRoutes from "./routes/etapas.routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors());
const PORT = process.env.PORT;

conectarDB();

app.use("/ciclistas", CiclistaRoutes);
app.use("/equipo",EquipoRoutes);
app.use("/etapas", EtapaRoutes);

app.listen(4000, ()=>{
    console.log(`Server corriendo ${PORT}`);
})
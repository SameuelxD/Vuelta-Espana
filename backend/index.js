import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors());
const PORT = process.env.PORT;

conectarDB();
app.listen(4000, ()=>{
    console.log(`Server corriendo ${PORT}`);
})

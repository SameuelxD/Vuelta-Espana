import express from "express";


const routes = express.Router()

import {ObtainCiclista,addCiclista,deleteCiclista,updateCiclista} from "../controllers/ciclista.controller.js"

routes.get("/all", ObtainCiclista);
routes.post("/add", addCiclista);
routes.delete("/remove/:id", deleteCiclista);
routes.patch("/upd/:id", updateCiclista);


export default routes;
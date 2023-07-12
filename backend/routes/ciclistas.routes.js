import express from "express";


const routes = express.Router()

import {ObtainCiclista,addCiclista,deleteCiclista,updateCiclista} from "../controllers/ciclista.controller.js"

routes.get("/all", ObtainCiclista);


export default routes;
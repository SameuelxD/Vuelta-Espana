import  express  from "express";

const routes = express.Router();

import { ObtainEtapa, addEtapa, deleteEtapa, updateEtapa } from "../controllers/etapa.controller.js";

routes.get("/all",ObtainEtapa);
routes.post("/add",addEtapa);
routes.delete("/delete/:id",deleteEtapa);
routes.patch("/update/:id",updateEtapa);

export default routes;
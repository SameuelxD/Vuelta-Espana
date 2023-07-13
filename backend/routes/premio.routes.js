import express from "express";

const routes = express.Router();

import { ObtainPremio, addPremio,deletePremio,updatePremio } from "../controllers/premio.controller.js";

routes.get("/all",ObtainPremio);
routes.post("/add",addPremio);
routes.delete("/delete/:id",deletePremio);
routes.patch("/update/:id",updatePremio);




export default routes;
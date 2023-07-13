import express from 'express';

const router = express.Router();

import {ObtainTeam,addTeam,deleteTeam,updateTeam } from '../controllers/equipos.controller.js';

router.get("/al",ObtainTeam);
router.post("/ad",addTeam);
router.delete("/delete/:id",deleteTeam);
router.patch("/update/:id",updateTeam);


export default router;
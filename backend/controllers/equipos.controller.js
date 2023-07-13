import Equipo from "../models/Equipo.js";


const ObtainTeam = async (req,res) => {
    const team = await Equipo.find();
    res.json(team);
}


const addTeam = async (req,res) => {
    const team = new Equipo(req.body);
    try {
        const newTeam = await team.save();
        res.json(newTeam);
    } catch (error) {
        console.log(error.message);
    }
}


const deleteTeam = async (req,res) => {
    try {
        await Equipo.deleteOne({_id:req.params.id});
        res.status(200).send();
    } catch (error) {
        res.status(404);
        res.send({error:"sin team"});
    }
}


const updateTeam = async (req,res) => {
    try {
        const team = await Equipo.findOne({_id:req.params.id});
        if (req.body.nombre) {
            team.nombre = req.body.nombre;
        }
        if (req.body.pais) {
            team.pais = req.body.pais;
        }
        if (req.body.director) {
            team.director = req.body.director;
        }
        if (req.body.corredores) {
            team.corredores = req.body.corredores;
        }
        if (req.body.patrocinador) {
            team.patrocinador = req.body.patrocinador;
        }
        await team.save();
        res.send(team);
    } catch (error) {
        console.log(error);
    }
}


export {
    ObtainTeam,
    addTeam,
    deleteTeam,
    updateTeam
}
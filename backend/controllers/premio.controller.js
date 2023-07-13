import Premio from "../models/Premios.js";


const ObtainPremio = async (req,res) =>{
    const premio = await Premio.find();
    res.json(premio);
}

const addPremio = async (req,res) =>{
    const premio = new Premio(req.body);
    try {
        const newPremio = await premio.save();
        res.json(newPremio);
    } catch (error) {
        console.log(error.message);
    }
}


const deletePremio = async (req,res) => {
    try {
        await Premio.deleteOne({_id:req.params.id});
        res.status(200).send();
    } catch (error) {
        res.status(404);
        res.send({error:"Error deletingPremio"});
    }
}

const updatePremio = async (req,res) => {
    try {
        const premio = await Premio.findOne({_id:req.params.id});
        if (req.body.nombre) {
            premio.nombre = req.body.nombre;
        }
        if (req.body.edicion) {
            premio.edicion = req.body.edicion;
        }
        if (req.body.ganador) {
            premio.ganador = req.body.ganador;
        }
        if (req.body.equipo){
            premio.equipo = req.body.equipo;
        }
        if (req.body.descripcion) {
            premio.descripcion = req.body.descripcion;
        }
        await premio.save();
        res.send(premio);;
    } catch (error) {
        console.log(error);
    }
}


export{
    ObtainPremio,
    addPremio,
    deletePremio,
    updatePremio
}


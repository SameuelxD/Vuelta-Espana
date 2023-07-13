import Ciclista from "../models/Ciclista.js";

const ObtainCiclista  = async (req,res) =>{
    const ciclista = await Ciclista.find();
    res.json(ciclista)
}

const addCiclista = async (req,res) =>{
    const ciclista = new Ciclista(req.body);
    try {
        const newCiclista = await ciclista.save();
        res.json(newCiclista);
    } catch (error) {
        console.log(error);
    }
}

const deleteCiclista = async (req,res) =>{
    try {
        await Ciclista.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error:"ciclista fallecido"})
    }
}

const updateCiclista = async (req,res) =>{
    try {
        const ciclista = await Ciclista.findOne({_id:req.params.id});
        if (req.body.nombre) {
            ciclista.nombre = req.body.nombre;
        }
        if (req.body.edad) {
            ciclista.edad = req.body.edad;
        }
        if (req.body.equipo) {
            ciclista.equipo = req.body.equipo;
        }
        if (req.body.nacionalidad) {
            ciclista.nacionalidad =req.body.nacionalidad;
        }
        await ciclista.save();
        res.send(ciclista);
    } catch (error) {
        console.log(error);
    }
}


export {
    ObtainCiclista,
    addCiclista,
    deleteCiclista,
    updateCiclista
}
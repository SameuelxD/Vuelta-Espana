import Etapa from "../models/Etapa.js";

const ObtainEtapa = async (req,res) =>{
    const etapa = await Etapa.find();
    res.json(etapa);
}


const addEtapa = async (req,res) => {
    const etapa = new Etapa(req.body);
    try {
        const newetapa = await etapa.save();
        res.json(newetapa);
    } catch (error) {
        console.log(error.message);
    }
}


const deleteEtapa = async (req,res) => {
    try {
        await Etapa.deleteOne({_id:req.params.id});
        res.status(200).send();
    } catch (error) {
        console.log(error.message);
    }
}


const updateEtapa = async (req,res) => {
    try {
        const etapa = await Etapa.findOne({_id:req.params.id});
        if (req.body.nombre) {
            etapa.nombre = req.body.nombre;
        }
        if (req.body.fecha) {
            etapa.fecha = req.body.fecha;
        }
        if (req.body.recorrido) {
            etapa.recorrido = req.body.recorrido;
        }
        if (req.body.distancia) {
            etapa.distancia = req.body.distancia;
        }
        if (req.body.ganador) {
            etapa.ganador = req.body.ganador;
        }
        if (req.body.segundoPuesto) {
            etapa.segundoPuesto = req.body.segundoPuesto;
        }
        if (req.body.tecerPuesto) {
            etapa.tecerPuesto = req.body.tecerPuesto 
        }
        await etapa.save();
        res.send(etapa);
    } catch (error) {
        console.log(error);
    }
}


export{
    ObtainEtapa,
    addEtapa,
    deleteEtapa,
    updateEtapa
}
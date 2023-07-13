import mongoose from "mongoose";

const etapaSchema = mongoose.Schema(
    {
        nombre : {
            type : String,
            required : true,
            trim : true
        },
        fecha : {
            type : Date,
            required : true,
            trim : true
        },
        recorrido : {
            type: String,
            required : true,
            trim : true
        },
        distancia : {
            type: Number,
            required : true,
            trim : true
        },
        ganador : {
            type: String,
            required : true,
            trim : true
        },
        segundoPuesto : {
            type: String,
            required : true,
            trim : true
        },
        tercerPuesto : {
            type: String,
            required : true,
            trim : true
        }
    },
{
    timestamps : true,
}
);


const Etapa = mongoose.model("Etapa",etapaSchema);

export default Etapa;
import mongoose from "mongoose";

const premioSchema = mongoose.Schema(
    {
        nombre : {
            type : String,
            required : true,
            trim: true
        },
        edicion : {
            type:Number,
            required : true,
            trim : true
        },
        ganador : {
            type : String,
            required : true,
            trim : true
        },
        equipo : {
            type : String,
            required : true,
            trim : true
        },
        descripcion : {
            type :String,
            required : true,
            trim : true
        }
    }
);

const Premio = mongoose.model("Premio",premioSchema);

export default Premio;

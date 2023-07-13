import mongoose from "mongoose";

const equipoSchema = mongoose.Schema(
{
    nombre : {
        type: String,
        required : true,
        trim : true
    },
    pais : {
        type: String,
        required : true,
        trim : true
    },
    director : {
        type : String,
        required : true,
        trim : true
    },
    patrocinador : {
        type: String,
        required : true,
        trim : true
    }
},
{
    timestamps : true,
}
);

const Equipo = mongoose.model("Equipo",equipoSchema);

export default Equipo;
import mongoose from "mongoose";


const especialidadSchema = new mongoose.Schema({
    cod_esp:{ type: Number, required: true, unique:true},
    nombre:{type: String, required: true}
},{ collection: 'especialidades'});


export default mongoose.model("Especialidad", especialidadSchema);
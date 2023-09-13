import mongoose from 'mongoose';


const pacienteSchema = new mongoose.Schema({
    cod_paciente: {
        type: Number,
        required: true,
    },
    documento: {
        tipo_doc: {
            type: String,
            required: true,
        },
        num_doc: {
            type: String,
            required: true,
        },
    },
    nombres: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    fecha_nacimiento: {
        type: Date,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    telefono: [{
        type: String,
        required: true,
    }],
    ocupacion: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    correo_e: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

export default mongoose.model('Paciente', pacienteSchema)
import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({

    /**   username: {
         type: String,
         required: true,
         trim: true
     },**/
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    cod_emp: {
        type: String,
        required: true,
        trim: true,
        unique: true
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
    nombres:{
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
    direccion: {
        type: String,
        required: true,
      },
    especialidad: [{
        type: String,
        required: true,
        //type: mongoose.Schema.Types.ObjectId, ref: 'Especialidad', required: true
    }],
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)
import mongoose from "mongoose";

const historiaSchema = new mongoose.Schema({
    "cod_historia": { type: Number, required: true, unique:true},
    "paciente": { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true},
    "medico": { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    "rif": {
        "dias": {type: Number, required: true},
        "meses": {type: Number, required: true},
        "anos": {type: Number, required: true}
    },
    "fecha": {type: Date, default: Date.now,required: true},
    "motivos": {type: String, required: true},
    "antecedentes": {type: String},
    "examen_externo": {type: String},
    "lensometria": { "derecho": {type: String}, "izquierdo": {type: String} },
    "agudeza_visual": {
        "sin_correccion": {
            "lejana": { "derecho": {type: String}, "izquierdo": {type: String} },
            "proxima": { "derecho": {type: String}, "izquierdo": {type: String} }
        },
        "con_correccion": {
            "lejana": { "derecho": {type: String}, "izquierdo": {type: String} },
            "proxima": { "derecho": {type: String}, "izquierdo": {type: String} }
        }
    },
    "cover_test": {
        "derecho": {type: String}, "izquierdo": {type: String}
    },
    "versiones": {type: String},
    "ducciones": {
        "derecho": {type: String},
        "izquierdo": {type: String}
    },
    "ppc": {type: String},
    "hirschberg":{type: String},
    "fondo_ojo": {
        "derecho": {type: String},
        "izquierdo": {type: String}
    },
    "queratometria": {
        "derecho": {type: String},
        "izquierdo": {type: String}
    },
    "retinoscopia": {
        "detalle": {type: String},
        "derecho": {type: String},
        "izquierdo": {type: String}
    },
    "subjetivo": {
        "derecho": {type: String},
        "izquierdo": {type: String},
        "add": {type: String}, "dp": {type: String}
    },
    "diagnostico":{type: String},
    "tratamiento": {type: String},
    "evolucion": {type: String}
}, {
    timestamps: true
})

export default mongoose.model("Historia", historiaSchema);
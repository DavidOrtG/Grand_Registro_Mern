import Paciente from '../models/paciente.model.js';

export const getPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.find();
        res.json(pacientes)
    } catch (error) {
        return res.status(500).json({ message: 'Algo fue mal' })
    }
};

export const createPaciente = async (req, res) => {
    try {
        const { cod_paciente,
            documento: { tipo_doc, num_doc },
            nombres,
            apellidos,
            fecha_nacimiento,
            genero,
            telefono,
            ocupacion,
            direccion,
            correo_e } = req.body;

        const newPaciente = new Paciente({
            cod_paciente,
            documento: { tipo_doc, num_doc },
            nombres,
            apellidos,
            fecha_nacimiento,
            genero,
            telefono,
            ocupacion,
            direccion,
            correo_e
        })

        const savedPaciente = await newPaciente.save();
        res.json(savedPaciente)
    } catch (error) {
        return res.status(500).json({ message: 'Algo fue mal' })
    }
}

export const getPaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findById(req.params.id)
        if (!paciente) return res.status(404).json({ message: 'Paciente no encontrado' })
        res.json(paciente)
    } catch (error) {
        return res.status(404).json({ message: 'Paciente no encontrado' })
    }
};

export const deletePaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findByIdAndDelete(req.params.id);
        if (!paciente) return res.status(404).json({ message: 'Paciente no encontrado' });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: 'Paciente no encontrado' });
    }
};

export const updatePaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if (!paciente) return res.status(404).json({ message: 'Paciente no encontrado' })
        res.json(paciente)
    } catch (error) {
        return res.status(404).json({ message: 'Paciente no encontrado' })
    }
};
import Especialidad from '../models/especialidad.model.js';

export const getEspecialidades = async (req, res) => {
    const especialidades = await Especialidad.find();
    res.json(especialidades)
};

export const createEspecialidad = async (req, res) => {
    const { cod_esp, nombre} = req.body;

    const newEspecialidad = new Especialidad({
        cod_esp,
        nombre
    })
      
    const savedEspecialidad = await newEspecialidad.save();
    res.json(savedEspecialidad)
}


export const getEspecialidad = async (req, res) => {
    const especialidad = await Especialidad.findById(req.params.id)
    if (!especialidad) return res.status(404).json({message:'Especialidad no encontrada'})
    res.json(especialidad)
};

export const deleteEspecialidad=  async (req, res) => {
    const especialidad = await Especialidad.findByIdAndDelete(req.params.id);
    if (!especialidad) return res.status(404).json({message:'Especialidad no encontrada'});
    return res.sendStatus(204);
};

export const updateEspecialidad = async (req, res) => {
    const especialidad = await Especialidad.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
    if (!especialidad) return res.status(404).json({message:'Especialidad no encontrada'})
    res.json(especialidad)
};

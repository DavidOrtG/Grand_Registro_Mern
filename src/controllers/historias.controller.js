import Historia from '../models/historia.model.js';

export const getHistorias = async (req, res) => {
    const historias = await Historia.find().populate('medico');
    res.json(historias)
};

export const createHistoria = async (req, res) => {
    const { 
        cod_historia, 
        cod_paciente, 
        medico, 
        rif: { dias, meses, anos }, 
        fecha, 
        motivos, 
        antecedentes, 
        examen_externo, 
        lensometria: { derecho: lensometriaDerecho, izquierdo: lensometriaIzquierdo }, 
        agudeza_visual: { 
          sin_correccion: { 
            lejana: { derecho: lejanaDerechoSinCorreccion, izquierdo: lejanaIzquierdoSinCorreccion }, 
            proxima: { derecho: proximaDerechoSinCorreccion, izquierdo: proximaIzquierdoSinCorreccion } 
          }, 
          con_correccion: { 
            lejana: { derecho: lejanaDerechoConCorreccion, izquierdo: lejanaIzquierdoConCorreccion }, 
            proxima: { derecho: proximaDerechoConCorreccion, izquierdo: proximaIzquierdoConCorreccion } 
          } 
        }, 
        cover_test: { derecho: coverTestDerecho, izquierdo: coverTestIzquierdo }, 
        versiones, 
        ducciones: { derecho: duccionesDerecho, izquierdo: duccionesIzquierdo }, 
        ppc, 
        hirschberg, 
        fondo_ojo: { derecho: fondoOjoDerecho, izquierdo: fondoOjoIzquierdo }, 
        queratometria: { derecho: queratometriaDerecho, izquierdo: queratometriaIzquierdo }, 
        retinoscopia: { detalle: retinoscopiaDetalle, derecho: retinoscopiaDerecho, izquierdo: retinoscopiaIzquierdo }, 
        subjetivo: { derecho: subjetivoDerecho, izquierdo: subjetivoIzquierdo, add, dp }, 
        diagnostico, 
        tratamiento, 
        evolucion 
      } = req.body;

    const newHistoria = new Historia({
        cod_historia,
        cod_paciente,
        medico:req.user.id,
        rif: {
          dias,
          meses,
          anos,
        },
        fecha,
        motivos,
        antecedentes,
        examen_externo,
        lensometria: {
          derecho: lensometriaDerecho,
          izquierdo: lensometriaIzquierdo,
        },
        agudeza_visual: {
          sin_correccion: {
            lejana: {
              derecho: lejanaDerechoSinCorreccion,
              izquierdo: lejanaIzquierdoSinCorreccion,
            },
            proxima: {
              derecho: proximaDerechoSinCorreccion,
              izquierdo: proximaIzquierdoSinCorreccion,
            },
          },
          con_correccion: {
            lejana: {
              derecho: lejanaDerechoConCorreccion,
              izquierdo: lejanaIzquierdoConCorreccion,
            },
            proxima: {
              derecho: proximaDerechoConCorreccion,
              izquierdo: proximaIzquierdoConCorreccion,
            },
          },
        },
        cover_test: {
          derecho: coverTestDerecho,
          izquierdo: coverTestIzquierdo,
        },
        versiones,
        ducciones: {
          derecho: duccionesDerecho,
          izquierdo: duccionesIzquierdo,
        },
        ppc,
        hirschberg,
        fondo_ojo: {
          derecho: fondoOjoDerecho,
          izquierdo: fondoOjoIzquierdo,
        },
        queratometria: {
          derecho: queratometriaDerecho,
          izquierdo: queratometriaIzquierdo,
        },
        retinoscopia: {
          detalle: retinoscopiaDetalle,
          derecho: retinoscopiaDerecho,
          izquierdo: retinoscopiaIzquierdo,
        },
        subjetivo: {
          derecho: subjetivoDerecho,
          izquierdo: subjetivoIzquierdo,
          add,
          dp,
        },
        diagnostico,
        tratamiento,
        evolucion,
      })
      
      const savedHistoria = await newHistoria.save();
      res.json(savedHistoria)
}

export const getHistoria = async (req, res) => {
    const historia = await Historia.findById(req.params.id)
    if (!historia) return res.status(404).json({message:'Historia no encontrada'})
    res.json(historia)
};

export const deleteHistoria=  async (req, res) => {
    const historia = await Historia.findByIdAndDelete(req.params.id);
    if (!historia) return res.status(404).json({message:'Historia no encontrada'});
    return res.sendStatus(204);
};

export const updateHistoria = async (req, res) => {
    const historia = await Historia.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
    if (!historia) return res.status(404).json({message:'Historia no encontrada'})
    res.json(historia)
};

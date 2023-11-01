import Historia from '../models/historia.model.js';

export const getHistorias = async (req, res) => {
  try {
    const historias = await Historia.find().populate('medico');
    res.json(historias)
  } catch (error) {
    return res.status(500).json({ message: 'Algo fue mal' })
  }
};

export const createHistoria = async (req, res) => {
  try {
    const {
      cod_historia,
      paciente,
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
      paciente,
      medico: req.user.id,
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

  } catch (error) {
    return res.status(500).json({ message: 'Algo fue mal' })
  }
}
export const getHistoria = async (req, res) => {
  try {
    const historia = await Historia.findById(req.params.id)
    if (!historia) return res.status(404).json({ message: 'Historia no encontrada' })
    res.json(historia)
  } catch (error) {
    return res.status(404).json({ message: 'Historia no encontrada' })
  }
};

export const deleteHistoria = async (req, res) => {
  try {
    const historia = await Historia.findByIdAndDelete(req.params.id);
    if (!historia) return res.status(404).json({ message: 'Historia no encontrada' });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: 'Historia no encontrada' });
  }
};

export const updateHistoria = async (req, res) => {
  try {
    const historia = await Historia.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!historia) return res.status(404).json({ message: 'Historia no encontrada' })
    res.json(historia)
  } catch (error) {
    return res.status(404).json({ message: 'Historia no encontrada' });
  }
};

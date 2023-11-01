import { createContext, useContext, useState } from "react";
import { createHistoria, getHistorias, deleteHistoria, getHistoria, updateHistoria } from "../api/historias";

const HistoriaContext = createContext();

export const useHistoria = () => {
    const context = useContext(HistoriaContext);

    if (!context) {
        throw new Error('useHistoria must be used within a HistoriaProvider');
    }

    return context;
}

export function HistoriaProvider({ children }) {

    const [historias, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const res = await getHistorias();
            setTasks(res.data);
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    };

    const createTask = async (hist) => {
        const res = await createHistoria(
            {
                cod_historia: hist.cod_historia,
                paciente: hist.paciente,
                rif: {
                  dias: hist.dias,
                  meses: hist.meses,
                  anos: hist.anos,
                },
                fecha: hist.fecha,
                motivos: hist.motivos,
                antecedentes: hist.antecedentes,
                examen_externo: hist.examen_externo,
                lensometria: {
                  derecho: hist.lensometriaDerecho,
                  izquierdo: hist.lensometriaIzquierdo,
                },
                agudeza_visual: {
                  sin_correccion: {
                    lejana: {
                      derecho: hist.lejanaDerechoSinCorreccion,
                      izquierdo: hist.lejanaIzquierdoSinCorreccion,
                    },
                    proxima: {
                      derecho: hist.proximaDerechoSinCorreccion,
                      izquierdo: hist.proximaIzquierdoSinCorreccion,
                    },
                  },
                  con_correccion: {
                    lejana: {
                      derecho: hist.lejanaDerechoConCorreccion,
                      izquierdo: hist.lejanaIzquierdoConCorreccion,
                    },
                    proxima: {
                      derecho: hist.proximaDerechoConCorreccion,
                      izquierdo: hist.proximaIzquierdoConCorreccion,
                    },
                  },
                },
                cover_test: {
                  derecho: hist.coverTestDerecho,
                  izquierdo: hist.coverTestIzquierdo,
                },
                versiones: hist.versiones,
                ducciones: {
                  derecho: hist.duccionesDerecho,
                  izquierdo: hist.duccionesIzquierdo,
                },
                ppc: hist.ppc,
                hirschberg: hist.hirschberg,
                fondo_ojo: {
                  derecho: hist.fondoOjoDerecho,
                  izquierdo: hist.fondoOjoIzquierdo,
                },
                queratometria: {
                  derecho: hist.queratometriaDerecho,
                  izquierdo: hist.queratometriaIzquierdo,
                },
                retinoscopia: {
                  detalle: hist.retinoscopiaDetalle,
                  derecho: hist.retinoscopiaDerecho,
                  izquierdo: hist.retinoscopiaIzquierdo,
                },
                subjetivo: {
                  derecho: hist.subjetivoDerecho,
                  izquierdo: hist.subjetivoIzquierdo,
                  add: hist.add,
                  dp: hist.dp,
                },
                diagnostico: hist.diagnostico,
                tratamiento: hist.tratamiento,
                evolucion: hist.evolucion,
              });
    };

    const deleteTask = async (id) => {
        try {
            const res = await deleteHistoria(id);
            if (res.status == 204) setTasks(historias.filter(task => hist._id != id))
        } catch (error) {

        }

    };

    const getTask = async (id) => {
        try {
            const res = await getHistoria(id);
            return res.data
        } catch (error) {
            console.log(error)
        }
    };

    const updateTask = async (id, hist) => {
        try {
            await updateHistoria(id, hist);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <HistoriaContext.Provider value={{
            historias,
            createTask,
            getTasks,
            deleteTask,
            getTask,
            updateTask
        }}>
            {children}
        </HistoriaContext.Provider>
    );
}
import { createContext, useContext, useState } from "react";
import { createTaskRequest } from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }

    return context;
}

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState([]);

    const createTask = async (task) => {
        console.log(task)
        const res = await createTaskRequest(
            
            {
                cod_historia: task.cod_historia,
                paciente: task.paciente,
                rif: {
                    dias: task.dias,
                    meses: task.meses,
                    anos: task.anos
                },
                fecha: task.fecha,
                motivos: task.motivos,
                antecedentes: task.antecedentes,
                examen_externo: task.examen_externo,
                lensometria: {
                    derecho: task.lensometriaDerecho,
                    izquierdo: task.lensometriaIzquierdo
                },
                agudeza_visual: {
                    sin_correccion: {
                        lejana: {
                            derecho: task.lejanaDerechoSinCorreccion,
                            izquierdo: task.lejanaIzquierdoSinCorreccion
                        },
                        proxima: {
                            derecho: task.proximaDerechoSinCorreccion,
                            izquierdo: task.proximaIzquierdoSinCorreccion
                        }
                    },
                    con_correccion: {
                        lejana: {
                            derecho: task.lejanaDerechoConCorreccion,
                            izquierdo: task.lejanaIzquierdoConCorreccion
                        },
                        proxima: {
                            derecho: task.proximaDerechoConCorreccion,
                            izquierdo: task.proximaIzquierdoConCorreccion
                        }
                    }
                },
                cover_test: {
                    derecho: task.coverTestDerecho,
                    izquierdo: task.coverTestIzquierdo
                },
                versiones: task.versiones,
                ducciones: {
                    derecho: task.duccionesDerecho,
                    izquierdo: task.duccionesIzquierdo
                },
                ppc: task.ppc,
                hirschberg: task.hirschberg,
                fondo_ojo: {
                    derecho: task.fondoOjoDerecho,
                    izquierdo: task.fondoOjoIzquierdo
                },
                queratometria: {
                    derecho: task.queratometriaDerecho,
                    izquierdo: task.queratometriaIzquierdo
                },
                retinoscopia: {
                    detalle: task.retinocopiaDetalle,
                    derecho: task.retinocopiaDerecho,
                    izquierdo: task.retinocopiaIzquierdo
                },
                subjetivo: {
                    derecho: task.subjetivoDerecho,
                    izquierdo: task.subjetivoIzquierdo,
                    add: task.add,
                    dp: task.dp
                },
                diagnostico: task.diagnostico,
                tratamiento: task.tratamiento,
                evolucion: task.evolucion
            }
        );
        setUser(res.data);
        console.log()
    }

    return (
        <TaskContext.Provider value={{ tasks, createTask }}>
            {children}
        </TaskContext.Provider>
    );
}
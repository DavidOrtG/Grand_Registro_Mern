import { createContext, useContext, useState } from "react";
import { createPaciente, getPacientes } from "../api/tasks";

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

    const getTasks = async () => {
        try {
            const res = await getPacientes();
            setTasks(res.data);
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }

    const createTask = async (task) => {
        const res = await createPaciente(
            {
                cod_paciente: task.cod_paciente,
                documento:
                {
                    tipo_doc: task.tipo_doc,
                    num_doc: task.num_doc
                },
                nombres: task.nombres,
                apellidos: task.apellidos,
                fecha_nacimiento: task.fecha_nacimiento,
                genero: task.genero,
                telefono: [task.telefono],
                ocupacion: task.ocupacion,
                direccion: task.direccion,
                correo_e: task.correo_e
            });
        console.log(res)
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks,
        }}>
            {children}
        </TaskContext.Provider>
    );
}
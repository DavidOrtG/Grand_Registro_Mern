import { createContext, useContext, useState } from "react";
import { createHistoria } from "../api/tasks";

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }

    return context;
}

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState([]);

    const createTask = async (task) =>{
        const res = await createHistoria(task)
        console.log(res)
        setTasks(res.data);
    };


    return (
        <TaskContext.Provider value={{ tasks, createTask }}>
            {children}
        </TaskContext.Provider>
    );
}
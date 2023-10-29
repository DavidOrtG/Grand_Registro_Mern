import { useTasks } from "../context/TaskContext"
import { Link } from "react-router-dom";

function PacientesCard({ task }) {

    const { deleteTask } = useHistoria();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <h1>Nombres y Apellidos:</h1>
            <div className="flex my-2">
                <h1 className="text-2xl font-bold whitespace-pre ">{task.nombres}</h1>
                <p className="text-2xl font-bold whitespace-pre mx-1">{task.apellidos}</p>
            </div>

            <p className="text-slate-300">Número de Cedula: {task.documento.num_doc}</p>
            <p className="text-slate-300">Fecha de Creación: {new Date(task.createdAt).toLocaleDateString()}</p>

            <div className="flex justify-between my-3">
                <button className="bg-red-700 px-4 py-1 rounded-sm" onClick={() => { deleteTask(task._id); }}>Borrar Paciente</button>
                <button className="bg-cyan-700 px-4 py-1 rounded-sm" >
                    <Link to={`/pacientes/${task._id}`}>Actualizar Paciente</Link>
                </button>
            </div>

            <Link>
            </Link>

        </div>
    )
}

export default PacientesCard
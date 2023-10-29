import { useHistoria } from "../context/HistoriaContext";
import { Link } from "react-router-dom";

function HistoriasCard({ hist }) {

    const { deleteTask } = useHistoria();

    return (
        
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <h1>Codigo de historia:</h1>
            <div className="flex my-2">
                <h1 className="text-2xl font-bold whitespace-pre ">{hist.cod_historia}</h1>
            </div>
            
            <h1>Creada Por:</h1>
            <div className="flex my-2">
                <h1 className="text-2xl font-bold whitespace-pre ">{hist.medico.nombres}</h1>
                <h1 className="text-2xl font-bold whitespace-pre mx-1">{hist.medico.apellidos}</h1>
            </div>
            <p className="text-slate-300">Fecha de Creación: {new Date(hist.createdAt).toLocaleDateString()}</p>

            <div className="flex justify-between my-3">
                <button className="bg-red-700 px-4 py-1 rounded-sm" onClick={() => { deleteTask(hist._id); }}>Borrar Historia</button>
                <button className="bg-cyan-700 px-4 py-1 rounded-sm" >
                    <Link to={`/historias/${hist._id}`}>Actualizar Historia</Link>
                </button>
            </div>

            <Link>
            </Link>

        </div>
    )
}

export default HistoriasCard
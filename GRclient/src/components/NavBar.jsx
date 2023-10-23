import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function NavBar() {

    const { isAuthenticated, logout, user} = useAuth();

    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to="/">
                <h1 className="text-2xl font-bold">Grand Registro</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li>
                            Bienvenido {user.nombres}
                        </li>
                        <li>
                            <Link to="/add-paciente" className="bg-indigo-500 px-4 py-1 rounded-sm" >Añadir Paciente</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={() => {logout();}} className="bg-indigo-500 px-4 py-1 rounded-sm" >Cerrar Sesión</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-sm">Iniciar Sesión</Link>
                        </li>
                        <li>
                            <Link to="/register" className="bg-indigo-500 px-4 py-1 rounded-sm">Registrarse</Link>
                        </li>
                    </>
                )}
            </ul >
        </nav >
    )
}

export default NavBar
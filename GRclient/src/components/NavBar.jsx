import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function NavBar() {

    const { isAuthenticated, logout, user } = useAuth();
    const location = useLocation();
    const isHistoriasRoute = location.pathname.includes("/historias");

    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to={
                isAuthenticated ? "/pacientes" : "/"
            }>
                <h1 className="text-2xl font-bold">Grand Registro</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li>
                            Bienvenido {user.nombres}
                        </li>
                        {location.pathname === '/historias' && (
                            <li>
                                <Link to="/add-historia" className="bg-indigo-500 px-4 py-1 rounded-sm">Crear Historia</Link>
                            </li>
                        )}
                        {location.pathname === '/pacientes' && (
                            <li>
                                <Link to="/add-paciente" className="bg-indigo-500 px-4 py-1 rounded-sm">Añadir Paciente</Link>
                            </li>
                        )}

                        <li>
                            <Link to="/" onClick={() => { logout(); }} className="bg-indigo-500 px-4 py-1 rounded-sm">Cerrar Sesión</Link>
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
            </ul>
        </nav>
    );
}

export default NavBar
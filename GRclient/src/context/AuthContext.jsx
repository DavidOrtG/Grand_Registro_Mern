import { createContext, useState, useContext } from 'react';
import { registerRequest } from '../api/auth';
import { set } from 'mongoose';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used withing an AuthProvider!");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const signup = async (user) => {
        try{
            const res = await registerRequest(
                {
                email: user.email,
                password: user.password,
                cod_emp: user.cod_emp,
                documento: {
                  tipo_doc: user.tipo_doc,
                  num_doc: user.num_doc
                },
                nombres: user.nombres,
                apellidos: user.apellidos,
                fecha_nacimiento: user.fecha_nacimiento,
                genero: user.genero,
                telefono: user.telefono,
                direccion: user.direccion,
                especialidad: user.especialidad
                });
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } 
        catch (error) {
            //console.log(error.response);
            setErrors(error.response.data);
        }   
    };

    return (
        <AuthContext.Provider value={{
            signup, user, isAuthenticated, errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}
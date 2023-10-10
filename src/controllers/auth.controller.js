import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import {createAccessToken} from '../libs/jwt.js';

export const register = async (req, res) => {
    const {
        //username
        email,
            password,
            cod_emp,
            documento:{tipo_doc, num_doc},
            nombres,
            apellidos,
            fecha_nacimiento,
            genero,
            telefono,
            direccion,
            especialidad
    } = req.body

    try {

        const userFound = await User.findOne({email});
        if (userFound)
            return res.status(400).json(['El correo ya esta en uso']);

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            //username,
            email,
            password: passwordHash,
            cod_emp,
            documento:{tipo_doc, num_doc},
            nombres,
            apellidos,
            fecha_nacimiento,
            genero,
            telefono,
            direccion,
            especialidad
        });
        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved.id})

        
        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            //username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ message:error.message})
    };
    
};

export const login = async (req, res) => {
    const {email, password} = req.body

    try {

        const userFound = await User.findOne({email})

        if (!userFound) return res.status(400).json({message: "Correo o contraseña Incorrecta"});

        const isMatch = await bcrypt.compare(password, userFound.password);

        if(!isMatch) return res.status(400).json({message: "Correo o contraseña Incorrecta"});

        
        const token = await createAccessToken({id: userFound.id})

        
        res.cookie('token', token)
        res.json({
            id: userFound._id,
            //username: userFound.username,
            cod_emp:userFound.cod_emp,
            nombres:userFound.nombres,
            apellidos:userFound.apellidos,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ message:error.message})
    };
    
};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)

    if(!userFound) return res.status(400).json({message:"User not found"});

    return res.json({
        id:userFound._id,
        //username: userFound.username,
        email: userFound.email,
        createdAt:userFound.createdAt,
        updatedAt: userFound.updatedAt,
    })

}
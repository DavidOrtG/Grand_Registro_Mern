import {z} from 'zod';

export const registerSchema = z.object({

    email:z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(8, {
        message: 'Password must be at leat 8 characters'
    }),
    cod_emp: z.string({
        required_error: 'Cod_emp is required'
    }),
    documento: z.object({
      tipo_doc: z.string({
         required_error: 'Tipo_doc is required'
        }),
      num_doc: z.string({
        required_error: 'num_doc is required'
       }),
    }),
    nombres: z.string({
        required_error: 'nombres is required'
    }),
    apellidos: z.string({
        required_error: 'apellidos is required'
    }),
    fecha_nacimiento: z.string({
        required_error: 'fecha_nacimiento is required'
    }),
    genero: z.string({
        required_error: 'Genero is required'
    }),
    /**telefono: z.array({
        required_error: 'Telefono is required'
    }),**/
    direccion: z.string({
        required_error: 'Direccion is required'
    }),
    /**especialidad: z.array({
        required_error: 'Especialidad is required'
    }),**/
});

    
export const loginSchema = z.object({
    email: z.string({
        required_error:"Email is required"
    }).email({
        message:"Invalid email"
    }),
    password: z
    .string({
        required_error: "Password is required"
    })
    .min(8, {
        message: "Password must be at least 8 characters"
    }),
})
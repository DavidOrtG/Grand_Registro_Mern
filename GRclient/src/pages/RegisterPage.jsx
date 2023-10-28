import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function RegisterPage() {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { signup, user, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate('/pacientes')
    }, [isAuthenticated])

    console.log(user)

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className='flex h-[calc(140vh-100px)] items-center justify-center overflow-auto'>
            <div style={{ backgroundColor: '#2a3990', }} className='border-white border-2 max-w-md w-full p-10 rounded-md'>
                {
                    registerErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-center text-white my-2' key={i}>
                            {error}
                        </div>
                    ))
                }

                <h1 className='text-2xl font-bold justify-center'>Registrarse</h1>

                <form onSubmit={onSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" {...register('email', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                        placeholder='Email'
                    />

                    {errors.email && (<p className="text-red-500"> El email es requerido!</p>)}

                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" {...register('password', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                        placeholder='Contraseña'
                    />

                    {errors.password && (<p className="text-red-500"> La contraseña es requerida!</p>)}

                    <label htmlFor="cod_emp">Codigo Empleado:</label>
                    <input type="text" id="cod_emp" {...register('cod_emp', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                        placeholder='Codigo Empleado'
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/\D/g, '');
                        }}
                    />

                    {errors.cod_emp && (<p className="text-red-500"> El codigo de empleado es requerido!</p>)}

                    <label>Número y tipo de Documento</label>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            {...register('num_doc', { required: true })}
                            className='w-2/3 bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                            placeholder='Número de Documento'
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(/\D/g, '');
                            }}
                        />

                        <select
                            name="tipo_doc"
                            {...register('tipo_doc', { required: true })}
                            className='w-1/3 bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                            placeholder='Tipo Documento'
                        >
                            <option value="CC">CC</option>
                            <option value="otros">Otros</option>
                        </select>
                    </div>

                    {errors.num_doc && (<p className="text-red-500"> El numero de documento es requerido!</p>)}

                    <label htmlFor="nombres">Nombres:</label>
                    <input type="text" id="nombres" {...register('nombres', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                        placeholder='Nombres'
                    />

                    {errors.nombres && (<p className="text-red-500"> Los nombres son requeridos!</p>)}

                    <label htmlFor="apellidos">Apellidos:</label>
                    <input type="text" id="apellidos" {...register('apellidos', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                        placeholder='Apellidos'
                    />

                    {errors.apellidos && (<p className="text-red-500"> Los apellidos son requeridos!</p>)}

                    <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
                    <input type="date" id="fecha_nacimiento" {...register('fecha_nacimiento', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                        placeholder='Fecha de Nacimiento'
                    />

                    {errors.apellidos && (<p className="text-red-500"> Los apellidos son requeridos!</p>)}

                    <label htmlFor="genero">Genero:</label>
                    <select
                        name="genero" id="genero"
                        {...register('genero', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    >
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                        <option value="Otro">Otro</option>
                    </select>
                    <label htmlFor="telefono">Telefono:</label>
                    <input type="text" id="telefono" {...register('telefono', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                        placeholder='Telefono'
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/\D/g, '');
                        }}
                    />
                    {errors.apellidos && (<p className="text-red-500"> El numero de telefono es requerido!</p>)}

                    <label htmlFor="direccion">Dirección:</label>
                    <input type="text" id="direccion" {...register('direccion', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                        placeholder='Dirección'
                    />

                    {errors.apellidos && (<p className="text-red-500"> La dirección es requerida!</p>)}

                    <label htmlFor="especialidad">Especialidad:</label>
                    <select
                        name="especialidad" id="especialidad"
                        {...register('especialidad', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    >
                        <option value="6500e3b05a28ee20717c98f6">Optometria</option>
                        <option value="6500e4b1d8134d7ef67fe910">Oftalmologia</option>
                        <option value="6500e5b7dec962d892173a24">Ortoptica</option>
                    </select>
                    <button className="bg-sky-950 px-4 py-1 rounded-sm" type='submit'>
                        Registrarse
                    </button>
                </form>
                <p className='flex gap-x-2 justify-between'>Ya tienes una cuenta? <Link to='/login' className='text-sky-500'>Iniciar Sesión</Link></p>
            </div>
        </div>

    )
}

export default RegisterPage
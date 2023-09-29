import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth'

function RegisterPage() {

    const { register, handleSubmit } = useForm();

    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            <form onSubmit={handleSubmit(async (values) => {
                console.log(values);
                const res = await registerRequest({
                    email: values.email,
                    password: values.password,
                    cod_emp: values.cod_emp,
                    documento: {
                      tipo_doc: values.tipo_doc,
                      num_doc: values.num_doc,
                    },
                    nombres: values.nombres,
                    apellidos: values.apellidos,
                    fecha_nacimiento: values.fecha_nacimiento,
                    genero: values.genero,
                    telefono: [values.telefono],
                    direccion: values.direccion,
                    especialidad: [values.especialidad]
                  });
                console.log(res)
            })}>
                <label htmlFor="email">Email:</label>
                <input type="email" {...register('email', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                    placeholder='Email'
                />
                <label htmlFor="password">Password:</label>
                <input type="password" {...register('password', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                    placeholder='Contraseña'
                />
                <label htmlFor="cod_emp">Codigo Empleado:</label>
                <input type="text" {...register('cod_emp', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                    placeholder='Codigo Empleado'
                    onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, ''); // Eliminar caracteres que no sean números
                      }}
                />
                <label>Número y tipo de Documento</label>
                <div className="flex gap-4">
                    <input
                        type="text"
                        {...register('num_doc', { required: true })}
                        className='w-2/3 bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Número de Documento'
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/\D/g, ''); // Eliminar caracteres que no sean números
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
                <label htmlFor="nombres">Nombres:</label>
                <input type="text" {...register('nombres', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                    placeholder='Nombres'
                />
                <label htmlFor="apellidos">Apellidos:</label>
                <input type="text" {...register('apellidos', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                    placeholder='Apellidos'
                />
                <label htmlFor="fecha_nacimientos">Fecha de Nacimiento:</label>
                <input type="date" {...register('fecha_nacimientos', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                    placeholder='Fecha de Nacimiento'
                />
                <label htmlFor="genero">Genero:</label>
                <select
                    name="genero"
                    {...register('genero', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                >
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                    <option value="Otro">Otro</option>
                </select>
                <label htmlFor="telefono">Telefono:</label>
                <input type="text" {...register('telefono', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                    placeholder='Telefono'
                    onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, ''); // Eliminar caracteres que no sean números
                      }}
                />
                <label htmlFor="direccion">Dirección:</label>
                <input type="text" {...register('direccion', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py2 rounded-md my-2'
                    placeholder='Dirección'
                />
                <label htmlFor="especialidad">Especialidad:</label>
                <select
                    name="especialidad"
                    {...register('especialidad', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                >
                    <option value="6500e3b05a28ee20717c98f6">Optometria</option>
                    <option value="6500e4b1d8134d7ef67fe910">Oftalmologia</option>
                    <option value="6500e5b7dec962d892173a24">Ortoptica</option>
                </select>
                <button type='submit'>
                    Registrarse
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
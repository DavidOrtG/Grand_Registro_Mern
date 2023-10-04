import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { signin, errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div style={{ backgroundColor: '#2a3990', }} className='border-white border-2 max-w-md w-full p-10 rounded-md'>

        {
          signinErrors.map((error, i) => (
            <div className='bg-red-500 p-2 text-white my-2 text-center' key={i}>
              {error}
            </div>
          ))
        }

        <h1 className='text-2xl font-bold'>Iniciar Sesión</h1>

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

          <button type='submit'>
            Ingresar
          </button>
        </form>

        <p className='flex gap-x-2 justify-between'>No tienes una cuenta? <Link to='/register' className='text-sky-500'>Registrarse</Link></p>

      </div>
    </div>
  )

}

export default LoginPage;
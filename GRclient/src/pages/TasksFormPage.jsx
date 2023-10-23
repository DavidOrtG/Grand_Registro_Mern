import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";

function TasksFormPage() {

    const { register, handleSubmit } = useForm();
    const { createTask, tasks } = useTasks()
    console.log(createTask());

    const onSubmit = handleSubmit((data) => {
        createTask(data);
    });

    return (

        <div style={{ overflowY: 'auto' }} className='flex items-center justify-center'>

            <div style={{ backgroundColor: '#2a3990', }} className='border-white border-2 max-w-3xl w-full p-10 rounded-md'>

                <button><span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}> HISTORIA CLINICA</span></button>
                <form onSubmit={onSubmit}>

                    <div className="flex gap-4">
                        <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>Codigo de paciente:</span>

                        <input type="text" className='w-3/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                            placeholder='Codigo de paciente' {...register("cod_paciente", { required: true })}
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(/\D/g, '');
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>

                        <div className="flex gap-4">
                            <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>Número de Cédula:</span>

                            <input type="text" className='w-3/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                placeholder='Numero de Cedula' {...register('num_doc', "cod_paciente", { required: true })}
                                onInput={(e) => {
                                    e.target.value = e.target.value.replace(/\D/g, '');
                                }}
                            />

                            <select className='w-1/8 bg-zinc-700 text-white px-4 py2 rounded-md my-2' {...register('tipo_doc', { required: true })}>
                                <option value="CC">CC</option>
                                <option value="RC">RC</option>
                                <option value="CE">CE</option>
                                <option value="TI">TI</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <label htmlFor="nombres" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Nombres: </label>
                        <input id='nombres' type="text" placeholder='Nombres' style={{ whiteSpace: "nowrap", marginRight: '10px', verticalAlign: 'middle' }}
                            {...register('nombres', { required: true })}
                            className="w-2/3 bg-zinc-700 text-white px-4 rounded-md my-2"
                        />

                        <label htmlFor="apellidos" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Apellidos: </label>
                        <input id='apellidos' type="text" placeholder='Apellidos' style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}
                            {...register('apellidos', { required: true })}
                            className="w-2/3 bg-zinc-700 text-white px-4  rounded-md my-2"
                        />
                    </div>

                    <label htmlFor="fecha_nacimiento" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Fecha De Nacimiento: </label>
                    <input id='fecha_nacimiento' type="date" style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}
                        {...register('fecha_nacimiento', { required: true })}
                        className="w-3/4 bg-zinc-700 text-white px-4  rounded-md my-2"
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <label htmlFor="ocupacion" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Ocupación: </label>
                        <input id='ocupacion' type="text" placeholder='Ocupacion' style={{ whiteSpace: "nowrap", marginRight: '10px', verticalAlign: 'middle' }}
                            {...register('ocupacion', { required: true })}
                            className="w-2/3 bg-zinc-700 text-white px-4 rounded-md my-2"
                        />

                        <label htmlFor="genero" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Género: </label>
                        <input id='genero' type="text" placeholder='Genero' style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}
                            {...register('genero', { required: true })}
                            className="w-1/3 bg-zinc-700 text-white px-4  rounded-md my-2"
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <label htmlFor="direccion" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Dirección: </label>
                        <input id='direccion' type="text" placeholder='Dirección' style={{ whiteSpace: "nowrap", marginRight: '10px', verticalAlign: 'middle' }}
                            {...register('direccion', { required: true })}
                            className="w-2/3 bg-zinc-700 text-white px-4 rounded-md my-2"
                        />

                        <label htmlFor="telefono" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Teléfono: </label>
                        <input id='telefono' type="text" placeholder='Teléfono' style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}
                            {...register('telefono', { required: true })}
                            className="w-1/3 bg-zinc-700 text-white px-4  rounded-md my-2"
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(/\D/g, '');
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <label htmlFor="correo_e" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Correo Electronico: </label>
                        <input id='correo_e' type="text" placeholder='Correo Electronico' style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}
                            {...register('correo_e', { required: true })}
                            className="w-5/6 bg-zinc-700 text-white px-4 rounded-md my-2"
                        />
                    </div>
                    <button>Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default TasksFormPage
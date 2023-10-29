import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskHistoriaPage() {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        //createTask(data);
        navigate("/historias");
    });


    return (
        <div style={{ overflowY: 'auto' }} className='flex items-center justify-center'>

            <div style={{ backgroundColor: '#2a3990', }} className='border-white border-2 max-w-3xl w-full p-10 rounded-md'>
                <form onSubmit={onSubmit}>

                    <div className="flex gap-4">
                        <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>Codigo de Historia:</span>

                        <input type="text" className='w-full bg-zinc-700 text-white px-4 rounded-md my-2'
                            placeholder='Codigo de Historia' {...register("cod_historia", { required: true })}
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(/\D/g, '');
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <label htmlFor="paciente" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Paciente: </label>
                        <input id='paciente' type="text" placeholder='Paciente' style={{ whiteSpace: "nowrap", marginRight: '10px', verticalAlign: 'middle' }}
                            {...register('paciente', { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 rounded-md my-2"
                        />
                    </div>

                    <div className="flex gap-4 justify-between">
                        <label style={{ whiteSpace: "nowrap", marginRight: '30px' }}>Rif: </label>
                        <div>
                            <label htmlFor="dias" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Días: </label>
                            <input id='dias' type="text" style={{ whiteSpace: "nowrap", marginRight: '10px', verticalAlign: 'middle' }}
                                {...register('dias', { required: true })}
                                className="w-1/5 bg-zinc-700 text-white px-4 rounded-md my-2"
                            />
                            <label htmlFor="meses" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Meses: </label>
                            <input id='meses' type="text" style={{ whiteSpace: "nowrap", marginRight: '10px', verticalAlign: 'middle' }}
                                {...register('meses', { required: true })}
                                className="w-1/5 bg-zinc-700 text-white px-4 rounded-md my-2"
                            />
                            <label htmlFor="anos" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Años: </label>
                            <input id='anos' type="text" style={{ whiteSpace: "nowrap", marginRight: '10px', verticalAlign: 'middle' }}
                                {...register('anos', { required: true })}
                                className="w-1/5 bg-zinc-700 text-white px-4 rounded-md my-2"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 justify-between">
                        <label htmlFor="fecha" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Fecha: </label>
                        <input id='fecha' type="date" style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}
                            {...register('fecha', { required: true })}
                            className="w-full bg-zinc-700 text-white px-4  rounded-md my-2"
                        />
                    </div>
                    
                    <label htmlFor="motivo" style={{ marginRight: '10px' }}>Motivo de la consulta: </label>
                    <textarea id='motivo' rows="2" placeholder="Motivo"
                    {...register('motivo', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-1 rounded-md my-2">

                    </textarea>

                    <label htmlFor="antecedentes" style={{ marginRight: '10px' }}>Antecendentes: </label>
                    <textarea id='antecedentes' rows="2" placeholder="Antecendentes"
                    {...register('antecedentes', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-1 rounded-md my-2">

                    </textarea>

                    <label htmlFor="examen_externo" style={{ marginRight: '10px' }}>Examen Externo: </label>
                    <textarea id='examen_externo' rows="2" placeholder="Examen Externo"
                    {...register('examen_externo', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-1 rounded-md my-2">

                    </textarea>



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

export default TaskHistoriaPage
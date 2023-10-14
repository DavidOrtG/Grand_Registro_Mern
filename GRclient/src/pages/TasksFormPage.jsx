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

                <form onSubmit={onSubmit}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}> HISTORIA CLINICA</span>
                        <div className="flex gap-4">
                            <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>Número de Documento:</span>

                            <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                placeholder='Numero de Documento' {...register('num_doc', { required: true })}
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
                        <label htmlFor="rif" style={{ whiteSpace: "nowrap", marginRight: '30px' }}> Tiempo desde ultima consulta (Rif): </label>
                        <label htmlFor="dias" style={{ marginRight: '10px' }}>Dias: </label>
                        <input id='dias' type="text" style={{ whiteSpace: "nowrap", marginRight: '20px', verticalAlign: 'middle' }}
                            {...register('dias', { required: true })}
                            className="w-1/6 bg-zinc-700 text-white px-4 rounded-md my-2"
                        />
                        <label htmlFor="meses" style={{ marginRight: '10px' }} >Meses: </label>
                        <input id='meses' type="text" style={{ whiteSpace: "nowrap", marginRight: '20px', verticalAlign: 'middle' }}
                            {...register('meses', { required: true })}
                            className="w-1/6 bg-zinc-700 text-white px-4 rounded-md my-2"
                        />
                        <label htmlFor="anos" style={{ marginRight: '10px' }} >Años: </label>
                        <input id='anos' type="text" style={{ whiteSpace: "nowrap", marginRight: '20px', verticalAlign: 'middle' }}
                            {...register('anos', { required: true })}
                            className="w-1/6 bg-zinc-700 text-white px-4 rounded-md my-2"
                        />

                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <label htmlFor="fecha">Fecha: </label>
                        <input id='fecha' type="datetime-local" style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}
                            {...register('fecha', { required: true })}
                            className="w-5/6 bg-zinc-700 text-white px-4 rounded-md my-2"
                        />
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

                    <div>
                        <label htmlFor="motivos" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Motivo de la Consulta</label>
                        <textarea rows='2' id='motivos' placeholder="Motivos"
                            {...register('motivos')}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        ></textarea>

                        <label htmlFor="antecedentes" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Antecedentes</label>
                        <textarea rows='2' id='antecedentes' placeholder="Antecedentes"
                            {...register('antecedentes')}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        ></textarea>

                        <label htmlFor="examen_externo" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Examen Externo</label>
                        <textarea rows='2' id='examen_externo' placeholder="Examen Externo"
                            {...register('examen_externo')}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        ></textarea>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}>Lensometría: </span>
                        <div className="flex gap-4">
                            <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.D:</span>

                            <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                {...register('derecho', { required: true })}

                            />

                            <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                            <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                {...register('izquierdo', { required: true })}

                            />
                        </div>
                    </div>

                    {/* Sin Corrección */}

                    <div style={{ justifyContent: 'space-between', }}>
                        <span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}>Agudeza Visual</span>
                        <div>
                            <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}><b>Sin Correción</b></span>
                            <div>
                                <div className="flex gap-4">
                                    <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>Lejana: </span>
                                    <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.D:</span>

                                    <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                        {...register('derecho', { required: true })}

                                    />

                                    <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                                    <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                        {...register('izquierdo', { required: true })}

                                    />
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>Proxima</span>
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.D:</span>

                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('derecho', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('izquierdo', { required: true })}

                                />
                            </div>
                        </div>

                        {/* Con Corrección */}

                        <div>
                            <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}><b>Con Correción</b></span>
                            <div>

                                <div className="flex gap-4">
                                    <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>Lejana: </span>
                                    <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>O.D:</span>

                                    <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                        {...register('derecho', { required: true })}

                                    />

                                    <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>O.I:</span>
                                    <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                        {...register('izquierdo', { required: true })}

                                    />
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>Proxima: </span>
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>O.D:</span>

                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('derecho', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>O.I:</span>
                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('izquierdo', { required: true })}

                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                            <span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}>Cover Test: </span>
                            <div className="flex gap-4">
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.D:</span>

                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('derecho', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('izquierdo', { required: true })}

                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="versiones" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Versiones</label>
                            <textarea rows='2' id='versiones' placeholder="Versiones"
                                {...register('versiones')}
                                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                            ></textarea>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                            <span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}>Ducciones: </span>
                            <div className="flex gap-4">
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.D:</span>

                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('derecho', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('izquierdo', { required: true })}

                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                            <label htmlFor="ppc" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>PPC: </label>
                            <input id='ppc' type="text" placeholder='PPC' style={{ whiteSpace: "nowrap", marginRight: '10px', verticalAlign: 'middle' }}
                                {...register('ppc', { required: true })}
                                className="w-2/3 bg-zinc-700 text-white px-4 rounded-md my-2"
                            />

                            <label htmlFor="hirschberg" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Hirschberg: </label>
                            <input id='hirschberg' type="text" placeholder='Hirschberg' style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}
                                {...register('hirschberg', { required: true })}
                                className="w-2/3 bg-zinc-700 text-white px-4  rounded-md my-2"
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                            <span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}>Fondo de Ojo: </span>
                            <div className="flex gap-4">
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.D:</span>

                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('derecho', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('izquierdo', { required: true })}

                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                            <span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}>Queratometria: </span>
                            <div className="flex gap-4">
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.D:</span>

                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('derecho', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('izquierdo', { required: true })}

                                />
                            </div>
                        </div>

                        <span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}>Retinoscopia</span>
                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>

                            <div className="flex gap-4">

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>Detalle:</span>

                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('derecho', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.D:</span>

                                <input type="text" className='w-1/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('derecho', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                                <input type="text" className='w-1/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('izquierdo', { required: true })}

                                />
                            </div>
                        </div>

                        <span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}>Subjetivo</span>
                        <div>
                            <div>
                                <div className="flex gap-4">
                                    <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>O.D:</span>

                                    <input type="text" className='w-full bg-zinc-700 text-white px-4 rounded-md my-2'
                                        {...register('derecho', { required: true })}

                                    />

                                    <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>O.I:</span>
                                    <input type="text" className='w-full bg-zinc-700 text-white px-4 rounded-md my-2'
                                        {...register('izquierdo', { required: true })}

                                    />
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>Add:</span>

                                <input type="text" className='w-full bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('add', { required: true })}

                                />
                            </div>
                            <div className="flex gap-4">
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>Dp:</span>
                                <input type="text" className='w-full bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('dp', { required: true })}

                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="diagnostico" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Diagnostico</label>
                            <textarea rows='2' id='diagnostico' placeholder="Diagnostico"
                                {...register('diagnostico')}
                                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                            ></textarea>

                            <label htmlFor="tratamiento" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Tratamiento</label>
                            <textarea rows='2' id='tratamiento' placeholder="Tratamiento"
                                {...register('tratamiento')}
                                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                            ></textarea>

                            <label htmlFor="evolucion" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Evolución</label>
                            <textarea rows='2' id='evolucion' placeholder="Evolución"
                                {...register('evolucion')}
                                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                            ></textarea>
                        </div>


                    </div>
                    <button>Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default TasksFormPage
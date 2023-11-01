import { useForm } from "react-hook-form";
import { useHistoria } from "../context/HistoriaContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskHistoriaPage() {

    const { register, handleSubmit } = useForm();
    const { createTask, getTask, updateTask } = useHistoria()
    console.log(createTask());

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadHistoria() {
            if (params.id) {
                const task = await getTask(params.id)
                console.log(task)
                setValue('cod_historia', hist.cod_historia);
                setValue('paciente', hist.paciente);
                setValue('dias', hist.rif.dias);
                setValue('meses', hist.rif.meses);
                setValue('rif.anos', hist.rif.anos);
                setValue('fecha', hist.fecha);
                setValue('motivos', hist.motivos);
                setValue('antecedentes', hist.antecedentes);
                setValue('examen_externo', hist.examen_externo);
                setValue('lensometriaDerecho', hist.lensometria.derecho);
                setValue('lensometriaIzquierdo', hist.lensometria.izquierdo);
                setValue('lejanaDerechoSinCorreccion', hist.agudeza_visual.sin_correccion.lejana.derecho);
                setValue('lejanaIzquierdoSinCorreccion', hist.agudeza_visual.sin_correccion.lejana.izquierdo);
                setValue('proximaDerechoSinCorreccion', hist.agudeza_visual.sin_correccion.proxima.derecho);
                setValue('proximaIzquierdoSinCorreccion', hist.agudeza_visual.sin_correccion.proxima.izquierdo);
                setValue('lejanaDerechoConCorreccion', hist.agudeza_visual.con_correccion.lejana.derecho);
                setValue('lejanaIzquierdoConCorreccion', hist.agudeza_visual.con_correccion.lejana.izquierdo);
                setValue('proximaDerechoConCorreccion', hist.agudeza_visual.con_correccion.proxima.derecho);
                setValue('proximaIzquierdoConCorreccion', hist.agudeza_visual.con_correccion.proxima.izquierdo);
                setValue('coverTestDerecho', hist.cover_test.derecho);
                setValue('coverTestIzquierdo', hist.cover_test.izquierdo);
                setValue('versiones', hist.versiones);
                setValue('duccionesDerecho', hist.ducciones.derecho);
                setValue('duccionesIzquierdo', hist.ducciones.izquierdo);
                setValue('ppc', hist.ppc);
                setValue('hirschberg', hist.hirschberg);
                setValue('fondoOjoDerecho', hist.fondo_ojo.derecho);
                setValue('fondoOjoIzquierdo', hist.fondo_ojo.izquierdo);
                setValue('queratometriaDerecho', hist.queratometria.derecho);
                setValue('queratometriaIzquierdo', hist.queratometria.izquierdo);
                setValue('retinoscopiaDetalle', hist.retinocopia.detalle);
                setValue('retinoscopiaDerecho', hist.retinocopia.derecho);
                setValue('retinoscopiaIzquierdo', hist.retinocopia.izquierdo);
                setValue('subjetivoDerecho', hist.subjetivo.derecho);
                setValue('subjetivoIzquierdo', hist.subjetivo.izquierdo);
                setValue('add', hist.subjetivo.add);
                setValue('dp', hist.subjetivo.dp);
                setValue('diagnostico', hist.diagnostico);
                setValue('tratamiento', hist.tratamiento);
                setValue('evolucion', hist.evolucion);
            }
        }
        loadHistoria()
    }, []);


    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTask(params.id, data);
        } else {
            createTask(data);
        }
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

                    {/*  <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <label htmlFor="medico" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Medico que atiende: </label>
                        <input id='medico' type="text" placeholder='Medico' style={{ whiteSpace: "nowrap", marginRight: '10px', verticalAlign: 'middle' }}
                            {...register('medico', { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 rounded-md my-2"
                        />
                    </div> */}

                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <label htmlFor="paciente" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Paciente: </label>
                        <input id='paciente' type="text" placeholder='Paciente' style={{ whiteSpace: "nowrap", marginRight: '10px', verticalAlign: 'middle' }}
                            {...register('paciente', { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 rounded-md my-2"
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <label style={{ whiteSpace: "nowrap", marginRight: '10px' }}> Rif: </label>
                        <label htmlFor="dias" style={{ marginRight: '10px' }}>Dias: </label>
                        <input id='dias' type="text" style={{ whiteSpace: "nowrap", marginRight: '20px', verticalAlign: 'middle' }}
                            {...register('dias', { required: true })}
                            className="w-3/6 bg-zinc-700 text-white px-4 rounded-md my-2"
                        />
                        <label htmlFor="meses" style={{ marginRight: '10px' }} >Meses: </label>
                        <input id='meses' type="text" style={{ whiteSpace: "nowrap", marginRight: '20px', verticalAlign: 'middle' }}
                            {...register('meses', { required: true })}
                            className="w-3/6 bg-zinc-700 text-white px-4 rounded-md my-2"
                        />
                        <label htmlFor="anos" style={{ marginRight: '10px' }} >Años: </label>
                        <input id='anos' type="text" style={{ whiteSpace: "nowrap", marginRight: '20px', verticalAlign: 'middle' }}
                            {...register('anos', { required: true })}
                            className="w-3/6 bg-zinc-700 text-white px-4 rounded-md my-2"
                        />

                    </div>

                    <div className="flex gap-4 justify-between">
                        <label htmlFor="fecha" style={{ whiteSpace: "nowrap", marginRight: '10px' }}>Fecha: </label>
                        <input id='fecha' type="date" style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}
                            {...register('fecha', { required: true })}
                            className="w-full bg-zinc-700 text-white px-4  rounded-md my-2"
                        />
                    </div>

                    <div>
                        <label htmlFor="motivos" style={{ marginRight: '10px' }}>Motivo de la consulta: </label>
                        <textarea id='motivos' rows="2" placeholder="Motivos"
                            {...register('motivos', { required: true })}
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
                    </div>



                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}>Lensometría: </span>
                        <div className="flex gap-4">
                            <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.D:</span>

                            <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                {...register('lensometriaDerecho', { required: true })}

                            />

                            <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                            <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                {...register('lensometriaIzquierdo', { required: true })}

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
                                        {...register('lejanaDerechoSinCorreccion', { required: true })}

                                    />

                                    <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                                    <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                        {...register('lejanaIzquierdoSinCorreccion', { required: true })}

                                    />
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>Proxima</span>
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.D:</span>

                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('proximaDerechoSinCorreccion', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('proximaIzquierdoSinCorreccion', { required: true })}

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
                                        {...register('lejanaDerechoConCorreccion', { required: true })}

                                    />

                                    <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>O.I:</span>
                                    <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                        {...register('lejanaIzquierdoConCorreccion', { required: true })}

                                    />
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>Proxima: </span>
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>O.D:</span>

                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('proximaDerechoConCorreccion', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>O.I:</span>
                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('proximaIzquierdoConCorreccion', { required: true })}

                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                            <span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}>Cover Test: </span>
                            <div className="flex gap-4">
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.D:</span>

                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('coverTestDerecho', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('coverTestIzquierdo', { required: true })}

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
                                    {...register('duccionesDerecho', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('duccionesIzquierdo', { required: true })}

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
                                    {...register('fondoOjoDerecho', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('fondoOjoIzquierdo', { required: true })}

                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                            <span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}>Queratometria: </span>
                            <div className="flex gap-4">
                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.D:</span>

                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('queratometriaDerecho', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('queratometriaIzquierdo', { required: true })}

                                />
                            </div>
                        </div>

                        <span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}>Retinoscopia</span>
                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>

                            <div className="flex gap-4">

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>Detalle:</span>

                                <input type="text" className='w-2/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('retinoscopiaDetalle', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.D:</span>

                                <input type="text" className='w-1/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('retinoscopiaDerecho', { required: true })}

                                />

                                <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle' }}>O.I:</span>
                                <input type="text" className='w-1/4 bg-zinc-700 text-white px-4 rounded-md my-2'
                                    {...register('retinoscopiaIzquierdo', { required: true })}

                                />
                            </div>
                        </div>

                        <span style={{ marginRight: '10px', whiteSpace: "nowrap", verticalAlign: 'middle' }}>Subjetivo</span>
                        <div>
                            <div>
                                <div className="flex gap-4">
                                    <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>O.D:</span>

                                    <input type="text" className='w-full bg-zinc-700 text-white px-4 rounded-md my-2'
                                        {...register('subjetivoDerecho', { required: true })}

                                    />

                                    <span style={{ whiteSpace: "nowrap", verticalAlign: 'middle', marginRight: '10px' }}>O.I:</span>
                                    <input type="text" className='w-full bg-zinc-700 text-white px-4 rounded-md my-2'
                                        {...register('subjetivoIzquierdo', { required: true })}

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

export default TaskHistoriaPage
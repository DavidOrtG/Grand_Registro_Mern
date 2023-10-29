import { useEffect } from 'react'
import { useHistoria } from '../context/HistoriaContext'
import HistoriasCard from '../components/HistoriasCard'

function HistoriasPage() {

  const { getTasks, historias } = useHistoria();

  useEffect(() => {
    getTasks()
  }, [])

  if (historias.lenght == 0) return (<h1>No hay Historias asociadas a este paciente</h1>);

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
      {historias.map((hist) => (
        <HistoriasCard hist={hist} key={hist._id} />
      ))}
    </div>
  );
}

export default HistoriasPage
import { useEffect } from 'react'
import { useTasks } from '../context/TaskContext'
import PacientesCard from '../components/PacientesCard'

function TasksPage() {

  const { getTasks, tasks } = useTasks()

  useEffect(() => {
    getTasks()
  }, [])

  if (tasks.lenght == 0) return (<h1>No hay pacientes</h1>);

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
      {tasks.map((task) => (
        <PacientesCard task={task} key={task._id} />
      ))}
    </div>
  );
}

export default TasksPage
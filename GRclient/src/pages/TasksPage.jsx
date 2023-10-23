import { useEffect } from 'react'
import { useTasks } from '../context/TaskContext'

function TasksPage() {

  const { getTasks, tasks } = useTasks()

  useEffect(() => {
    getTasks()
  }, [])

  if (tasks.lenght == 0) return (<h1>No hay pacientes</h1>);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h1>{task.nombres}</h1>
          <p>{task.apellidos}</p>
          <p>{task.documento.num_doc}</p>
        </div>
      ))}
    </div>
  );
}

export default TasksPage
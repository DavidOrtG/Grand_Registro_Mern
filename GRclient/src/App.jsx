import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from './context/AuthContext'

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import TasksPage from "./pages/TasksPage"
import TasksFormPage from "./pages/TasksFormPage"
import ProfilePage from "./pages/ProfilePage"
import HomePage from "./pages/HomePage"
import HistoriasPage from "./pages/HistoriasPage"
import TaskHistoriaPage from "./pages/TaskHistoriaPage"


import ProtectedRoute from './ProtectedRoute'
import { TaskProvider } from "./context/TaskContext"
import { HistoriaProvider } from "./context/HistoriaContext"
import NavBar from "./components/NavBar"

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <HistoriaProvider>
          <BrowserRouter>
            <main className="container mx-auto px-10">
              <NavBar/>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />

                <Route element={<ProtectedRoute />} >
                  <Route path='/pacientes' element={<TasksPage />} />
                  <Route path='/add-paciente' element={<TasksFormPage />} />
                  <Route path='/pacientes/:id' element={<TasksFormPage />} />

                  <Route path='/historias' element={<HistoriasPage />} />
                  <Route path='/add-historia' element={<TaskHistoriaPage />} />
                  <Route path='/historias/:id' element={<TaskHistoriaPage />} />
                  <Route path='/profile' element={<ProfilePage />} />
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
        </HistoriaProvider>
      </TaskProvider>
    </AuthProvider >
  )
}

export default App
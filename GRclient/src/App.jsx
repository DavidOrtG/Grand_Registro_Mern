import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from './context/AuthContext'

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import TasksPage from "./pages/TasksPage"
import TasksFormPage from "./pages/TasksFormPage"
import ProfilePage from "./pages/ProfilePage"
import HomePage from "./pages/HomePage"

import ProtectedRoute from './ProtectedRoute'
import { TaskProvider } from "./context/TaskContext"
import NavBar from "./components/NavBar"

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <NavBar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />

              <Route element={<ProtectedRoute />} >
                <Route path='/pacientes' element={<TasksPage />} />
                <Route path='/add-paciente' element={<TasksFormPage />} />
                <Route path='/pacientes/:id' element={<TasksFormPage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App
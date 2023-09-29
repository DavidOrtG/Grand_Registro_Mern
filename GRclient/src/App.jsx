import { BrowserRouter, Routes, Route} from "react-router-dom"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/historias' element={<h1>Historias</h1>} />
        <Route path='/add-historia' element={<h1>Add historia</h1>} />
        <Route path='/historias/:id' element={<h1>Update historia</h1>} />
        <Route path='/profile' element={<h1>Profile</h1>} />
      </Routes>
      <h1 className='text-4xl font-bold'>Hola mundo</h1>
    </BrowserRouter>
  )
}

export default App
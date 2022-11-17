import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Menu from './Componentes/Menu'
import Login from './Componentes/Login'
import RegistroOrdenes from './Componentes/RegistroOrdenes'
import RegistroUsuarios from './Componentes/RegistroUsuarios'
import ActualizacionOrdenes from './Componentes/ActualizacionOrdenes'
import ListadoOrdenes from './Componentes/ListadoOrdenes'
function App() {
  return (
    <BrowserRouter>
      <Menu />
        <Routes>
        <Route path='/' element={<h1>InstaYa</h1>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/registroUsuarios' element={<RegistroUsuarios />}/>
        <Route path='/registroOrdenes' element={<RegistroOrdenes />}/>
        <Route path='/actualizacionOrdenes' element={<ActualizacionOrdenes />}/>
        <Route path='/listadoOrdenes' element={<ListadoOrdenes />}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

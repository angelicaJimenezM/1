//Importamos el inicio de la pagina
import { Home } from './View/Home'
//Importamos toda la estructura para las rutas que tendra la pagina
import { BrowserRouter, Routes, Route } from 'react-router-dom'
{/* */ }
//Importamos la vista para la creacion del usuario
import { UserForm } from '../src/View/UserForm'
//Importamos la vista que contiene el tipo de usuario a crear;
import { TypeUsers } from '../src/View/TypeUsers';
//Importamos los tipos de formularios
import { Tourist } from './View/Tourist';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className='h-screen bg-home py-4'><Home /></div>} />
        <Route path="/Iniciar-sesion" element={<div className='h-screen bg-home py-4 flex flex-col flex-wrap'><UserForm /></div>} />
        <Route path="/Iniciar-sesion/typeUser" element={<TypeUsers/>} />
        <Route path="/Iniciar-sesion/typeUser/Turista" element={<div className='h-screen bg-home py-4'><Tourist/></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
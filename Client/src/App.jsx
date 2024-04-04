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
import { Guia } from './View/Guia';
import { Provider } from './View/Provider';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className='h-screen bg-home py-4'><Home /></div>} />
        <Route path="/Iniciar-sesion" element={<div className=' bg-home py-4 xl:py-20'><UserForm /></div>} />
        <Route path="/Iniciar-sesion/typeUser" element={<TypeUsers />} />
        <Route path="/Iniciar-sesion/typeUser/Turista" element={<div>
          <div className=' bg-home py-4 xl:py-20'>
          <Tourist />
        </div>
        </div>} />
        <Route path='/Iniciar-sesion/typeUser/Guia' element={<div className=' bg-home py-4 xl:py-20'><Guia /></div>} />
        <Route path='/Iniciar-sesion/typeUser/Proveedor' element={<div className=' bg-home py-4 xl:py-20'><Provider /></div>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
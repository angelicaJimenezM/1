//Importamos el inicio de la pagina
import { Home } from './View/Home'
//Importamos toda la estructura para las rutas que tendra la pagina
import { BrowserRouter, Routes, Route } from 'react-router-dom'
{/* */ }
//Importamos la vista para la creacion del usuario
import { UserForm } from '../src/View/UserForm'
//Importamos los tipos de formularios
import { Tourist } from './View/Tourist';
import { Guia } from './View/Guia';
import { Provider } from './View/Provider';
import { SignIn } from './View/SignIn';
import { Msg } from './View/Msg';
import { TouristPlanForm } from './View/TouristPlanForm'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registrate" element={<UserForm />} />
        <Route path="/Registrate/Turista" element={<Tourist />} />
        <Route path='/Registrate/Guia' element={<Guia />} />
        <Route path='/Registrate/Proveedor' element={<Provider />} />
        <Route path='/Iniciar-sesion' element={<SignIn />} />
        <Route path='/Msg' element={<Msg />} />
        <Route path='/Msg/TouristPlan' element={<TouristPlanForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
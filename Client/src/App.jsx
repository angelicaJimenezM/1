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
import { SignIn } from './View/SignIn';
import { Msg } from './View/Msg';
import { TouristPlanForm } from './View/TouristPlanForm'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registrate" element={<UserForm />} />
        <Route path="/Registrate/typeUser" element={<TypeUsers />} />
        <Route path="/Registrate/typeUser/Turista" element={<Tourist />} />
        <Route path='/Registrate/typeUser/Guia' element={<Guia />} />
        <Route path='/Registrate/typeUser/Proveedor' element={<Provider />} />
        <Route path='/Iniciar-sesion' element={<SignIn />} />
        <Route path='/Msg' element={<Msg />} />
        <Route path='/Msg/TouristPlan' element={<TouristPlanForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
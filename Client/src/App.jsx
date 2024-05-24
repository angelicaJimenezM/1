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
import { TouristPlanForm } from './View/TouristPlanForm';
import { Package } from './View/package/Package';
import { Itinerario } from './View/package/itinerary/Itinenario';
import { HomeMsg } from './View/MSG/HomeMsg';
import { ChatView } from './View/chat/ChatView';
import { NavbarTourist } from './Components/NavbarTourist';
import { ShowItinerary } from './View/package/itinerary/ShowItinerary';
import { TouristItinerary } from './View/Tourist/TouristItinerary';
import { Reservas } from './View/Tourist/Reservas';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registrate" element={<UserForm />} />
        <Route path="/Registrate/Turista" element={<Tourist />} />
        <Route path="/Registrate/Guia" element={<Guia />} />
        <Route path="/Registrate/Proveedor" element={<Provider />} />
        <Route path="/Iniciar-sesion" element={<SignIn />} />
        <Route path="/Msg/Guia" element={<Msg />} >
          <Route path='' element={<HomeMsg />} />
          <Route path="TouristPlan" element={<TouristPlanForm />} />
          <Route path="TouristPlan/:id" element={<TouristPlanForm />} />
          <Route path="planes" element={<Package />} />
          <Route path="Itinerario" element={<Itinerario />} />
          <Route path='chat' element={<ChatView />} />
          <Route path='Reservas' element = {<Reservas/>}/>

        </Route>
        <Route path='/Msg/Turista' element={<NavbarTourist />}>
          <Route path='' element={<HomeMsg />} />
          <Route path='chat' element={<ChatView />} />
          <Route path="Itinerario" element={<ShowItinerary />} />
          <Route path='Itinerario/Form' element = {<TouristItinerary/>}/>
          <Route path='Reservas' element = {<Reservas/>}/>
          
        </Route>

      </Routes>
    </BrowserRouter>



  )
}

export default App
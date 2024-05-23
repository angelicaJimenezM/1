import MSG from '../assets/Icons/Logo.jpg'
import reserva from '../assets/Icons/reserva.png';
import chat from '../assets/Icons/chat.png';
import factura from '../assets/Icons/factura.png';
import mapa from '../assets/Icons/mapa.png';
import paquete from '../assets/Icons/paquetes.png';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Icons } from '../Components/Icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Navbar } from '../Components/Navbar';
export const Msg = () => {
    const { state } = useLocation();
    let content = [{ nombre: 'Usuario' }]; // Valor predeterminado

    if (state && state.response && state.response.content) {
        content = state.response.content;
    }

    const [packageT, setPackage] = useState(false)
    const [itinerary, setItinerary] = useState(false)
    const [bill, setBill] = useState(false)
    const [booking, setBooking] = useState(false);
    const [visible, setVisible] = useState(false)
    return <>
        <header className='Header rounded-b-2xl flex justify-between'>
            <button className='xl:hidden' onClick={() => {
                setVisible(!visible)
            }}>
                <Icons icon={faBars} css=' ml-5 my-5 text-lg' />
            </button>
            <img src={MSG} alt="No found" className='hidden xl:block xl:w-20 mx-5' />
            <nav className='flex gap-x-16 items-center'>
                <ul className='hidden xl:flex h-12 border-l border-r border-gray-400  gap-x-16 p-2'>
                    <li ><Link ><img src={reserva} alt="no found" className='w-8 h-8' /></Link></li>
                    <li><Link to = 'chat'><img src={chat} alt="No foun" className='w-8' /></Link></li>
                    <li><Link><img src={factura} alt="No foun" className='w-10' /></Link></li>
                    <li><Link to="Itinerario"><img src={mapa} alt="No foun" className='w-8 h-8' /></Link></li>
                    <li className='cursor-pointer'><Link to="TouristPlan"><img src={paquete} alt="No foun" className='w-8 h-8' /></Link></li>
                </ul>
                <ul className='mr-5'>

                    <li className='w-8 h-8 xl:w-10 xl:h-10 rounded-full flex justify-center items-center font-bold xl:text-2xl bg-green-300 '>
                        {content[0].nombre.charAt(0)}
                    </li>
                </ul>
            </nav>

        </header>

        <main className='xl:grid xl:grid-cols-10'>
            {visible && <Navbar items={'newClass'}/>}


            <nav className='hidden navBar bg-opacity-30 xl:col-span-2 xl:w-64 my-4 xl:flex flex-wrap overflow-y-auto  rounded-tr-2xl rounded-br-2xl'>
                <ul htmlFor="" className='xl:w-64 flex  flex-col gap-x-5 xl:gap-x-10 items-start mx-5 gap-y-5'>
                    <li className='hidden xl:flex font-bold text-xl xl:flex-col cursor-pointer'>
                        <Link to=''>Inicio</Link>
                    </li>
                    <li onClick={() => { setPackage(!packageT) }} className='hidden xl:flex font-bold text-xl xl:flex-col cursor-pointer'>
                        Plan turistico
                        {packageT && <ul className={`text-sm mx-5 my-2 xl:flex xl:flex-col xl:gap-y-2 ${packageT ? 'SubMenu' : ''}`}>
                            <li>Editar plan turistico</li>
                            <li>Buscar plan turistico</li>
                            <li>Eliminar plan turistico</li>
                            <li><Link to="planes">Ver mis planes turiticos</Link></li>
                        </ul>}
                    </li>
                    <li onClick={() => { setItinerary(!itinerary) }} className='hidden xl:flex font-bold text-xl xl:flex-col cursor-pointer'>Itinerario
                        {itinerary && <ul className={`text-sm  mx-5 my-2 xl:flex xl:flex-col xl:gap-y-2 ${itinerary ? 'SubMenu' : ''}`}>
                            <li>Editar plan turistico</li>
                            <li>Buscar plan turistico</li>
                            <li>Eliminar plan turistico</li>
                        </ul>}
                    </li>

                    <li onClick={() => { setBill(!bill) }} className='hidden xl:flex font-bold text-xl xl:flex-col cursor-pointer'>Facturación
                        {bill && <ul className={`text-sm  mx-5 my-2 xl:flex xl:flex-col xl:gap-y-2 ${bill ? 'SubMenu' : ''}`}>
                            <li>Editar plan turistico</li>
                            <li>Buscar plan turistico</li>
                            <li>Eliminar plan turistico</li>
                        </ul>}
                    </li>
                    <li onClick={() => { setBooking(!booking) }} className='hidden xl:flex font-bold text-xl xl:flex-col cursor-pointer'>Reservas
                        {booking && <ul className={`text-sm  mx-5 my-2 xl:flex xl:flex-col xl:gap-y-2 ${booking ? 'SubMenu' : ''}`}>
                            <li>Editar reserva</li>
                            <li>Buscar reserva</li>
                            <li>Eliminar reserva</li>
                        </ul>}
                    </li>
                </ul>
            </nav>
            <h1 className='name hidden xl:flex absolute xl:font-bold xl:text-2xl xl:mx-72 bg-white p-2 xl:my-2 rounded-2xl'>Hola de nuevo, {content[0].nombre}</h1>
            <article className='Message SubMain bg-white xl:my-20 xl:col-span-8 rounded-2xl flex flex-row xl:overflow-y-auto flex-wrap xl:mr-5 justify-center items-center'>
                <Outlet />
            </article>
        </main>
    </>
}
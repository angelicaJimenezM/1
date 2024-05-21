import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import reserva from '../assets/Icons/reserva.png';
import chat from '../assets/Icons/chat.png';
import factura from '../assets/Icons/factura.png';
import mapa from '../assets/Icons/mapa.png';
import paquete from '../assets/Icons/paquetes.png';
export const Navbar = ({items}) => {
    const [packageT, setPackage] = useState(false)
    const [itinerary, setItinerary] = useState(false)
    const [bill, setBill] = useState(false)
    const [booking, setBooking] = useState(false);
    return (
        <nav className={`xl:hidden mobilHome border border-black rounded-tr-2xl rounded-br-2xl ${items} `}>
            <ul htmlFor="" className='mx-5 flex flex-col gap-y-5 '>
            <li >
                    <Link to=''>Inicio</Link>
                    </li>
                    <li onClick={() => { setPackage(!packageT) }} className='flex'>
                       <img src={paquete} alt="No found" className='w-8' /> Plan turistico
                        {packageT && <ul className={`text-sm mx-5 my-2 flex flex-col gap-y-1 ${packageT ? 'SubMenu' : ''}`}>
                            <li>Editar plan turistico</li>
                            <li>Buscar plan turistico</li>
                            <li>Eliminar plan turistico</li>
                            <li><Link to="planes">Ver mis planes turiticos</Link></li>
                        </ul>}
                    </li>
                    <li onClick={() => { setItinerary(!itinerary) }} >Itinerario
                        {itinerary && <ul className={`text-sm  mx-5 my-2 flex flex-col gap-y-2 ${itinerary ? 'SubMenu' : ''}`}>
                            <li>Editar plan turistico</li>
                            <li>Buscar plan turistico</li>
                            <li>Eliminar plan turistico</li>
                        </ul>}
                    </li>

                    <li onClick={() => { setBill(!bill) }} >Facturación
                        {bill && <ul className={`text-sm  mx-5 my-2 flex flex-col gap-y-2 ${bill ? 'SubMenu' : ''}`}>
                            <li>Editar plan turistico</li>
                            <li>Buscar plan turistico</li>
                            <li>Eliminar plan turistico</li>
                        </ul>}
                    </li>
                    <li onClick={() => { setBooking(!booking) }} >Reservas
                        {booking && <ul className={`text-sm  mx-5 my-2 flex flex-col gap-y-2 ${booking ? 'SubMenu' : ''}`}>
                            <li>Editar reserva</li>
                            <li>Buscar reserva</li>
                            <li>Eliminar reserva</li>
                        </ul>}
                    </li>
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    items: propTypes.string.isRequired
}
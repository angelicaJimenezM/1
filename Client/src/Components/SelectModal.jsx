//Importamos los iconos
import Tourist from '../assets/Icons/Tourist-Icon.jpg'
import Guide from '../assets/Icons/Guide.png';
import Mensajero from '../assets/Icons/mensajero.png';
//Importamos el componente Link para crear las diferentes rutas de los tipos de usuarios
import { Link } from 'react-router-dom'
export default function SelectModal() {
    return (
        <div className="border border-black rounded-xl shadow-black shadow-2xl bg-white xl:w-1/3 ">
            <header className=" flex flex-col items-center">
                <p className="text-xl">¿Que tipo de cuenta quieres crear?</p>
                <p className='text-secod'>Seleccione una perfil</p>
            </header>
            <main className='my-10'>
                <nav className='mx-10'>
                    <ul>
                        <li className='flex items-center mb-8 cursor-pointer'>
                            <img src={Tourist} alt="No found" className='w-1/3' />
                            <Link to="/Iniciar-sesion/typeUser/Turista" className='pl-8 text-xl font-normal'>Turista</Link>
                        </li>
                        <li  className='flex items-center mb-8 cursor-pointer'>
                            <img src={Guide} alt="No found" className='w-1/3' />
                            <Link to="/Iniciar-sesion/typeUser/Guia" className='pl-8 text-xl font-normal'>Guía</Link>
                        </li>
                        <li  className='flex items-center mb-8 cursor-pointer'>
                            <img src={Mensajero} alt="No found" className='w-1/4' />
                            <Link to="/Iniciar-sesion/typeUser/Proveedor" className='pl-14 text-xl font-normal'>Proveedor</Link>
                        </li>
                    </ul>
                </nav>
            </main>
        </div>
    )
}

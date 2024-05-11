//Importamos el logo de la pagina
import MSG from '../assets/Icons/Logo.jpg'
//Importamos el icono del navbar
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
//Importamos el Componente que nos ayudara a renderizar el Icono
import { Icons } from '../Components/Icons'
//Importamos las images
import Portada from '../assets/Image/Portada.png';
//Importamos el componente link para crear los enlaces de la pagina
import { Link } from 'react-router-dom'
import { useState } from 'react';

//Cuerpo del Componente Home
export const Home = () => {
    const [mostrarComponente, setMostrarComponente] = useState(false);

    const toggleComponente = () => {
        setMostrarComponente(!mostrarComponente);
    };
    return (
        <div className='ContainerHome h-screen bg-white flex flex-wrap justify-center items-center'>
            <div className='Home bg-white rounded-xl'>
                <header className='w-full flex justify-evenly items-center '>
                    <Link to="/Iniciar-sesion" className='border-2 border-home p-2 rounded-xl text-xs mx-2 font-bold hover:bg-home hover:text-white xl:hidden'>Iniciar Sesión</Link>
                    <img src={MSG} alt="Not Found" className='w-32 mr-10 xl:mx-16 xl:w-28' />
                    <button onClick={toggleComponente}><Icons icon={faBars} css='text-3xl mx-2 xl:hidden' /></button>
                    {mostrarComponente && <ComponenteMostrable toggleComponente={toggleComponente} />}
                    <div className='w-full hidden xl:flex xl:justify-evenly p-10'>
                        <Link className='font-bold text-lg'>¿Quienes Somos?</Link>
                        <Link className='font-bold text-lg'>Contatenos</Link>
                        <Link to="/Iniciar-sesion" className='border-2 border-home p-2 rounded-xl mx-2 font-bold text-tti hover:bg-home hover:text-white text-lg transition-colors'>Iniciar Sesión</Link>
                    </div>
                </header>
                <main className='xl:grid xl:grid-cols-2'>
                    <div className='flex flex-col items-center my-5'>
                        <div className='block xl:hidden w-10/12'>
                            <img src={Portada} alt="" className='xl:w-full' />
                        </div>
                        <p className='text-center text-Title-home text-2xl my-5 xl:text-4xl font-sans font-semibold'>La aventura comienza aqui</p>

                        <p className='text-center mx-8 xl:mx-28 my-10 xl:text-xl font-sans font-normal text-Title-home'>Bienvenido a nuestra comunidad Turistica donde las experiencias inolvidables se convierten en recuerdos para siempre.</p>
                        <Link to="/Registrate" className='Button w-40 p-4 text-center rounded-full text-gray-700'>Registrate</Link>
                    </div>
                    <div className='hidden xl:block'>
                        <img src={Portada} alt="" className='xl:w-full' />
                    </div>
                </main>
            </div>
        </div>
    )
}

function ComponenteMostrable({toggleComponente}) {
    return (
        <nav className='absolute  w-4/5 bg-gray-600 text-white rounded-lg text-left pl-5 border border-black'>
            <div className='w-full flex justify-end pr-5 my-2'>
                <button onClick={toggleComponente}><Icons icon={faX} css='text-3xl mx-2 xl:hidden' />
                </button>
            </div>
            <ul className=''>
                <li className='my-2' >  <Link className=' text-lg'>¿Quienes Somos?</Link></li>
                <li className='my-2'><Link className='font text-lg'>Contatenos</Link></li>
            </ul>
        </nav>
    )
}
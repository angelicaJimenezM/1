//Importamos el logo de la pagina
import MSG from '../assets/Icons/Logo.jpg'
//Importamos el icono del navbar
import { faBars } from '@fortawesome/free-solid-svg-icons';
//Importamos el Componente que nos ayudara a renderizar el Icono
import { Icons } from '../Components/Icons'
//Importamos las images
import IMG1 from '../assets/Image/IMG1.jpeg'
import IMG2 from '../assets/Image/IMG2.png'
import IMG4 from '../assets/Image/IMG4.jpg'
import Portada from '../assets/Image/Portada.jpeg';
//Importamos el componente link para crear los enlaces de la pagina
import { Link } from 'react-router-dom'


//Cuerpo del Componente Home
export const Home = () => {
    return (
        <div className='flex flex-col flex-wrap mx-3 bg-white rounded-xl'>
            <header className='w-full flex justify-evenly items-center '>
                <button className='border-2 border-btton p-2 rounded-xl text-xs mx-2 font-bold text-tti hover:bg-btton hover:text-white xl:hidden'>Iniciar Sesión</button>
                <img src={MSG} alt="Not Found" className='w-44 mr-14 xl:mx-10' />
                <Icons icon={faBars} css='text-3xl mx-2 xl:hidden' />
                {/* Aqui Colocar los link */}
                <div className='w-full hidden xl:flex xl:justify-around p-10'>
                    <button className='text-title font-bold text-lg'>¿Quienes Somos?</button>
                    <button className='text-title font-bold text-lg'>Contatenos</button>
                    <button className='text-title font-bold text-lg'>Registrate</button>
                    <Link to="/Iniciar-sesion" className='border-2 border-btton p-2 rounded-xl mx-2 font-bold text-tti hover:bg-btton hover:text-white text-lg'>Iniciar Sesión</Link>
                </div>
            </header>
            <main className='flex justify-center flex-col'>
                <div className='flex justify-center '><p className='text-2xl text-title font-bold xl:hidden'>La aventura comienza aqui</p>
                </div>
                <div className='xl:hidden'>
                    <div className='w-full flex flex-col items-start px-3 mt-5 xl:absolute'>
                        <p className='text-base py-2 text-title font-bold'>Bienvenido a nuestra comunidad Turistica </p>
                        <img src={IMG1} alt="Not found" className='IMG1 rounded-lg' />
                    </div>
                    <div className='w-full flex flex-col items-end px-3'>
                        <p className='text-base py-2 text-title font-bold'>Donde las experiencias inolvidables</p>
                        <img src={IMG2} alt="Not found" className='IMG2 rounded-lg' />
                    </div>
                    <div className='w-full flex flex-col items-start px-3 '>
                        <p className='text-base py-2 text-title font-bold'> Se convierten en recuerdos para siempre.</p>
                        <img src={IMG4} alt="Not found" className='IMG4 rounded-lg' />
                    </div>
                </div>
                <div className='hidden xl:grid xl:grid-cols-2'>
                    <div className='flex items-center flex-col justify-center'>
                        <p className='text-5xl text-title font-bold'>La aventura comienza aqui</p>
                        <div className='w-4/6 h-auto text-2xl flex items-center justify-center p-10 mx-auto'><p className='text-title font-bold xl:text-xl leading-relaxed text-center'>Bienvenido a nuestra comunidad Turistica donde las experiencias inolvidables se convierten en recuerdos para siempre.</p></div>
                    </div>
                    <div className={``}>
                        <img src={Portada} alt="" />
                    </div>
                </div>
            </main>
        </div>
    )
}
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


//Cuerpo del Componente Home
export const Home = () => {
    return (
        <div className='flex flex-col flex-wrap mx-3 bg-white rounded-xl'>
            <header className='w-full flex justify-between items-center'>
                <button className='border-2 border-btton p-2 rounded-xl text-xs mx-2 font-bold text-tti '>Iniciar Sesión</button>
                <img src={MSG} alt="Not Found" className='w-32 mr-14' />
                <Icons icon={faBars} css='text-3xl mx-2' />
            </header>
            <main className='flex justify-center flex-col'>
                <div className='flex justify-center '><p className='text-2xl text-title font-bold'>La aventura comienza aqui</p>
                </div>
                <div className='w-full flex flex-col items-start px-3 mt-5'>
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
            </main>
        </div>
    )
}
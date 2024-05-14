import MSG from '../assets/Icons/Logo.jpg';
import Signuppana from '../assets/Image/Sign up-pana.png'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import LogoForm from '../assets/Icons/Form.png';
import { Icons } from '../Components/Icons';
import { Link } from 'react-router-dom'
export const Msg = () => {
    const css = 'text-xl';
    return <>
        <header className="header bg-home w-full h-64 text-center">
            <div className='flex justify-end items-center gap-x-2'>
                <div className='w-full xl:ml-5 ml-8'>
                    <img src={MSG} alt="No found" className='w-28' />
                </div>
                <nav>
                    <ul htmlFor="" className='flex gap-x-5 xl:gap-x-10 items-center mx-5 '>
                        <li className='hidden xl:flex font-bold text-xl'>
                            <Link to="planes">Planes Turísticos</Link>
                        </li>

                        <li className='hidden xl:flex font-bold text-xl'><Link>Itinerario</Link>
                        </li>
                        <li className='hidden xl:flex font-bold text-xl'><Link>Facturación</Link></li>
                        <li className='hidden xl:flex font-bold text-xl'><Link>Chat</Link></li>
                        <li className='hidden xl:flex font-bold text-xl'><Link>Reservas</Link></li>
                        <li className='w-10 h-10 xl:w-16 xl:h-12 flex justify-center items-center rounded-full bg-white'>
                            <Icons icon={faSearch} css={css} />
                        </li>
                        <li className='w-10 h-10 xl:w-16 xl:h-12 flex justify-center items-center rounded-full bg-white'>
                            <Icons icon={faUser} css={css} />
                        </li>

                    </ul>
                </nav>
            </div>
            <p className='txt font-extrabold my-10'>Hola, Bienvenida Angelica</p>
        </header>
        <p className='text-xl mx-1 my-5 text-center font-medium'>
            ¡Guiemos juntos tu próxima aventura! Comienza a diseñar tus planes turísticos ahora mismo.
        </p>
        <main className='xl:grid xl:grid-cols-3'>
            <div className='flex justify-center items-center'>
                <img src={LogoForm} alt="No found" className='xl:w-80' />
            </div>
            <div className='w-full flex justify-center items-center '>
                <Link to="/Msg/TouristPlan" className='w-64 bg-signUp h-14 rounded-lg text-xl font-bold flex justify-center items-center'>
                    Registra
                </Link>
            </div>
            <div className='hidden xl:flex font-bold text-xl xl:justify-center xl:items-center'>
                <img src={Signuppana} alt="" className=' xl:w-80' />
            </div>
        </main>
    </>
}
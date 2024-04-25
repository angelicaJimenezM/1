import MSG from '../assets/Icons/Logo.jpg';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import LogoForm from '../assets/Icons/Form.png';
import { Icons } from '../Components/Icons';
import {Link} from 'react-router-dom'
export const Msg = () => {
    const css = 'text-2xl w-12';
    return <>
        <header className="header bg-home w-full h-64 text-center">
            <div className='flex justify-evenly items-center'>
                <img src={MSG} alt="No found" className='w-28' />

                <div htmlFor="" className='rounded-full w-12 h-12 bg-white flex items-center ml-24 '>
                    <Icons icon={faSearch} css={css} />
                </div>

                <div className='rounded-full w-12 h-12 bg-white flex items-center'>
                    <Icons icon={faUser} css={css} />
                </div>
            </div>
            <p className='txt font-extrabold my-10'>Hola, Bienvenida Angelica</p>
        </header>
        <p className='text-xl mx-1 my-5 text-center font-medium'>
            ¡Guiemos juntos tu próxima aventura! Comienza a diseñar tus planes turísticos ahora mismo.
        </p>
        <img src={LogoForm} alt="No found" />
        <div className='w-full flex justify-center'>
            <Link className='w-64 bg-home h-14 rounded-lg text-xl font-bold flex justify-center items-center'>
            Registra
            </Link>
        </div>
    </>
}
//Importamos el logo de la pagina
import MSG from '../assets/Icons/Logo.jpg';
//Importamos el componente link para crear los enlaces de la pagina
import { Link } from 'react-router-dom';
//Importamos el componenye del boton ya creado;
import { Button } from '../Components/Button'

export const UserForm = () => {
    return (
        <div className="flex flex-col flex-wrap items-center mx-3 my-5 p-5 bg-white rounded-xl">
            <header className='w-full'>
                <img src={MSG} alt="Not Found" className='w-24 ' />
                <div className=' grid grid-rows-2 gap-y-3 justify-center'>
                    <div className=' text-4xl text-center'>
                        <p className='font-light'>Regístrate</p>
                    </div>
                    <div className='w-full flex gap-x-3 '>
                        <p className='font-normal text-lg'>¿Ya tienes una cuenta? </p>
                        <Link className='text-link font-normal text-lg'>Iniciar sesión</Link>
                    </div>
                </div>
            </header>
            <main className='flex flex-wrap'>
                <form action="" className=' flex flex-wrap items-center flex-col border border-black p-5 rounded-xl pb-10 mb-8'>
                    <label htmlFor="" className=''>
                        <p>Correo</p>
                        <input
                            type="email"
                            placeholder='Ingrese su correo'
                            className='border border-black w-72 p-3 rounded-xl pl-3 mb-5 my-3' />
                    </label>
                    <label htmlFor="" className=''>
                        <p>Confirme su correo</p>
                        <input
                            type="email"
                            placeholder='Confirme su correo '
                            className='border border-black w-72 p-3 rounded-xl pl-3 mb-5 my-3' />
                    </label>
                    <label htmlFor="" className=''>
                        <p>Contraseña</p>
                        <input
                            type="email"
                            placeholder='Ingrese su contraseña'
                            className='border border-black w-72 p-3 rounded-xl pl-3 mb-5 my-3' />
                    </label>
                    <label htmlFor="" className=''>
                        <p>Confirme su contraseña</p>
                        <input
                            type="email"
                            placeholder='Confirme su contraseña '
                            className='border border-black w-72 p-3 rounded-xl pl-3 mb-5 my-3' />
                    </label>
                    <Button 
                    label='Registrate' 
                    link={'/Iniciar-sesion/typeUser'}
                    style={{
                        background: '#9ED4C6',
                        border: '1px solid #000',
                        color: '#000'
                    }} />
                </form>
            </main>
        </div>
    )
}
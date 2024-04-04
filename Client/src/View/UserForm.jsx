//Importamos el logo de la pagina
import MSG from '../assets/Icons/Logo.jpg';
import Users from '../assets/Image/Users.png'
//Importamos el componente link para crear los enlaces de la pagina
import { Link } from 'react-router-dom';
//Importamos el componenye del boton ya creado;
import { Button } from '../Components/Button'

export const UserForm = () => {
    return (
        <div className="flex flex-col  items-center mx-4  my-2 p-5 bg-white xl:mx-20 rounded-xl h-auto">
            <header className='w-full flex flex-col items-center xl:flex-row xl:justify-around '>
                <Link to='/'><img src={MSG} alt="No found" className='xl:flex w-44' /></Link>
                <div className=' grid grid-rows-2 gap-y-3 justify-center xl:hidden'>
                    <div className=' text-4xl text-center'>
                        <p className='font-light'>Regístrate</p>
                    </div>
                    <div className='w-full flex gap-x-3 '>
                        <p className='font-normal text-lg'>¿Ya tienes una cuenta? </p>
                        <Link className='text-link font-normal text-lg'>Iniciar sesión</Link>
                    </div>
                </div>
            </header>
            <main className='Main py-10 mb-5 rounded-xl justify-center xl:w-full xl:grid xl:grid-cols-2 xl:border-none'>
            <div className='hidden xl:flex w-full justify-center items-center'>
                    <img src={Users} alt="" className='w-2/3 h-1/2 block' />
                </div>
                <form action="" className=' flex flex-wrap items-center flex-col xl:border xl:border-black p-5 rounded-xl pb-10 mb-8'>
                <div className='hidden xl:grid grid-rows-2 gap-y-3 justify-center'>
                    <div className=' text-4xl text-center'>
                        <p className='font-light'>Regístrate</p>
                    </div>
                    <div className='w-full flex gap-x-3 '>
                        <p className='font-normal text-lg'>¿Ya tienes una cuenta? </p>
                        <Link className='text-link font-normal text-lg'>Iniciar sesión</Link>
                    </div>
                </div>
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
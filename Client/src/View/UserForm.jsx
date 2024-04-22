//Importamos el logo de la pagina
import MSG from '../assets/Icons/Logo.jpg';
import Users from '../assets/Image/Users.png'
//Importamos el componente link para crear los enlaces de la pagina
import { Link } from 'react-router-dom';
//almacenamos los valores de los inputs en el estado
import { useState } from 'react'
//-------------------------
import { createUserRequest } from '../api/user.api'
export const UserForm = () => {

    const [email, setEmail] = useState('');
    const [remail, setRemail] = useState('');
    const [password, setPaswword] = useState('');
    const [Rpasswod, setRpassword] = useState('');

    const handleChange = (e, setValue) => {
        setValue(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
        try {
            // Llama a la función createUserRequest para enviar los datos del usuario al backend
            const response = await createUserRequest({
                email: email,
                passw: password,
            });
            console.log(response); // Maneja la respuesta del backend, por ejemplo, muestra un mensaje de éxito (Registrado con exito)
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            // Maneja cualquier error que pueda ocurrir al enviar la solicitud
        }
    }
    return (
        <div className='bg-home py-4 xl:py-20'>
            <div className="flex flex-col  items-center mx-4  my-2 p-5 bg-white xl:mx-20 rounded-xl h-auto">
                <header className='w-full flex flex-col items-center xl:flex-row xl:justify-around '>
                    <Link to='/'><img src={MSG} alt="No found" className='xl:flex w-44' /></Link>
                    <div className=' grid grid-rows-2 gap-y-3 justify-center xl:hidden'>
                        <div className=' text-4xl text-center'>
                            <p className='font-light'>Regístrate</p>
                        </div>
                        <div className='w-full flex gap-x-3 '>
                            <p className='font-normal text-lg'>¿Ya tienes una cuenta? </p>
                            <Link to="/Iniciar-sesion" className='text-link font-normal text-lg'>Iniciar sesión</Link>
                        </div>
                    </div>
                </header>
                <main className='Main py-10 mb-5 rounded-xl justify-center xl:w-full xl:grid xl:grid-cols-2 xl:border-none'>
                    <div className='hidden xl:flex w-full justify-center items-center'>
                        <img src={Users} alt="" className='w-2/3 h-1/2 block' />
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className='"w-full xl:w-10/12 flex flex-wrap items-center flex-col xl:border xl:border-black p-5 rounded-xl pb-10 mb-8 xl:mx-20'>
                        <div className='hidden xl:grid grid-rows-2 gap-y-3 justify-center'>
                            <div className='text-center'>
                                <p className='text-2xl font-bold'>Regístrate</p>
                            </div>
                            <div className='w-full flex gap-x-3 '>
                                <p className='font-normal text-base'>¿Ya tienes una cuenta? </p>
                                <Link to="/Iniciar-sesion" className='text-link font-normal text-base'>Iniciar sesión</Link>
                            </div>
                        </div>
                        <label htmlFor="" className=''>
                            <p>Correo</p>
                            <input
                                type="email"
                                value={email}
                                onChange={(event) => {
                                    handleChange(event, setEmail)
                                }}
                                placeholder='Ingrese su correo'
                                className='border border-black xl:w-96 w-72 p-3 rounded-xl pl-3 mb-5 my-3' />
                        </label>
                        <label htmlFor="" className=''>
                            <p>Confirme su correo</p>
                            <input
                                type="email"
                                value={remail}
                                onChange={(event) => {
                                    handleChange(event, setRemail)
                                }}
                                placeholder='Confirme su correo '
                                className='border border-black xl:w-96 w-72 p-3 rounded-xl pl-3 mb-5 my-3' />
                        </label>
                        <label htmlFor="" className=''>
                            <p>Contraseña</p>
                            <input
                                type="password"
                                value={password}
                                onChange={(event) => {
                                    handleChange(event, setPaswword)
                                }}
                                placeholder='Ingrese su contraseña'
                                className='border border-black xl:w-96 w-72 p-3 rounded-xl pl-3 mb-5 my-3' />
                        </label>
                        <label htmlFor="" className=''>
                            <p>Confirme su contraseña</p>
                            <input
                                type="password"
                                value={Rpasswod}
                                onChange={(event) => {
                                    handleChange(event, setRpassword)
                                }}
                                placeholder='Confirme su contraseña '
                                className='border border-black xl:w-96 w-72 p-3 rounded-xl pl-3 mb-5 my-3' />
                        </label>
                        <button
                            type='submit'
                            className='w-56 h-12 text-base bg-home border border-black rounded-xl font-bold'>
                            Registrate
                        </button>
                    </form>
                </main>
            </div>
        </div>
    )
}
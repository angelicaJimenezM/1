//Importamos el logo de la pagina
import MSG from '../assets/Icons/Logo.jpg';
import Users from '../assets/Image/Users.png'
import signUp from '../assets/Image/sign-up.png'
//Importamos el componente link para crear los enlaces de la pagina
import { Link, useNavigate } from 'react-router-dom';
//almacenamos los valores de los inputs en el estado
import { useState } from 'react'
//-------------------------
import { createUserRequest } from '../api/user.api';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Icons } from '../Components/Icons';
import { Successful } from '../Utils/Alerts';
export const UserForm = () => {
    let navigate = useNavigate()
    const [emailLocal, setEmailLocal] = useState(''); // Estado local para el email
    const [passwordLocal, setPasswordLocal] = useState(''); // 
    const [tipo_usuario, setTipo_usuario] = useState('');

    const handleChange = (e, setValue) => {
        setValue(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
        try {
            // Llama a la función createUserRequest para enviar los datos del usuario al backend
            const response = await createUserRequest({
                email: emailLocal,
                passw: passwordLocal,
                tipo_usuario
            });
            Successful();
            console.log(response); // Maneja la respuesta del backend, por ejemplo, muestra un mensaje de éxito (Registrado con exito)
            response == 'Turista' ? navigate('/Registrate/Turista',{state :{email: emailLocal, passw: passwordLocal, usuario: tipo_usuario}}) : response == 'Guia' ? navigate('/Registrate/Guia', { state: { email: emailLocal, passw: passwordLocal, usuario: tipo_usuario } }) : navigate('/Registrate/Proveedor')
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            // Maneja cualquier error que pueda ocurrir al enviar la solicitud
        }
    }
    return (
        <div className="flex flex-col  items-center bg-white xl:mx-20 rounded-xl h-auto">
            <header className='w-full flex flex-col items-center xl:flex-row xl:justify-around'>
                <div className='w-full pl-5'> <Link to='/'><img src={MSG} alt="No found" className='xl:flex w-16 xl:w-20' /></Link></div>
                <div className=' grid grid-rows-2 gap-y-3 justify-center xl:hidden'>
                    <div className='text-center'>
                        <p className='font-extrabold text-2xl tracking-wider'>Regístrate</p>
                    </div>
                </div>
            </header>
            <main className='Main mb-5 rounded-xl justify-center xl:w-full xl:grid xl:grid-cols-2 xl:border-none'>
                <div className='hidden xl:flex w-full justify-center items-center '>
                    <img src={Users} alt="" className='w-2/4 h-1/2 block' />
                </div>
                <div className='flex justify-center xl:hidden'>
                    <img src={signUp} alt="" className='w-52 block' />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className='w-full xl:w-10/12 p-5 rounded-xl xl:mx-20 '>
                    <div className='hidden xl:grid grid-rows-2 gap-y-3 justify-center xl:pr-16'>
                        <div className='text-center'>
                            <p className='text-2xl font-extrabold'>Regístrate</p>
                        </div>
                        <div className='w-full flex gap-x-3 '>
                            <p className='font-normal text-base'>¿Ya tienes una cuenta? </p>
                            <Link to="/Iniciar-sesion" className='text-link font-normal text-base'>Iniciar sesión</Link>
                        </div>
                    </div>
                    <label htmlFor="" className=''>
                        <span className='EmailText relative font-extrabold'>Correo</span>
                        <span className='email relative mx-2'><Icons icon={faEnvelope} css='text-xl' /></span>
                        <input
                            type="email"
                            value={emailLocal}
                            onChange={(event) => {
                                handleChange(event, setEmailLocal)
                            }}
                            placeholder='Ingrese su correo'
                            className='xl:w-96 w-full p-3 pl-9 mb-5 my-3 border border-gray-300 bg-input rounded-lg text-black outline-none placeholder:text-black' />
                    </label>
                    <label htmlFor="" className=''>
                        <span className='PasswText relative  font-extrabold'>Constraseña</span>
                        <span className='passw relative'><Icons icon={faLock} css='text-xl mx-2' /></span>
                        <input
                            type="password"
                            value={passwordLocal}
                            onChange={(event) => {
                                handleChange(event, setPasswordLocal)
                            }}
                            placeholder='Ingrese su contraseña'
                            className='xl:w-96 w-full p-3 pl-9 mb-5 border border-gray-300 bg-input rounded-lg text-black outline-none placeholder:text-black' />
                    </label>
                    <div className='relative bottom-2'>
                        <span className='CuentaText relative font-extrabold'>Tipo de cuenta</span>
                        <span><Icons icon={faFilter} css='Filter text-xl relative' /></span>
                        <select name="" id="" className='xl:w-96 w-full p-3 pl-9 my-3 border border-gray-300 bg-input rounded-lg text-black outline-none' onChange={(event) => { handleChange(event, setTipo_usuario) }}>
                            <option value="">Selecciona una opción</option>
                            <option value="Turista">Turista</option>
                            <option value="Guia">Guia</option>
                            <option value="Proveedor">Proveedor</option>
                        </select>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center gap-x-3 my-5 xl:pr-16'>
                        <button
                            type='submit'
                            className='bg-signUp w-40 p-4 text-center rounded-full text-gray-700 font-bold'>
                            Crear cuenta
                        </button>
                        <div className='xl:hidden flex my-5 gap-x-5'>
                            <p className='font-normal text-lg'>¿Ya tienes una cuenta? </p>
                            <Link to="/Iniciar-sesion" className='text-link font-normal text-lg underline'>Iniciar sesión</Link>
                        </div>
                        <nav className='xl:my-3'>
                            <ul>
                                <li className='w-full border border-home p-5 rounded-lg'><Icons icon={faGoogle} css={'text-lg mx-2'} />Continue con google</li>
                                <li></li>
                            </ul>
                        </nav>
                    </div>
                </form>
            </main>
        </div>
    )
}
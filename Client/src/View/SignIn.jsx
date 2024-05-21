import Front from '../assets/Image/Beach-cuate.png';

import MSG from '../assets/Icons/Logo.jpg';

import signIn from '../assets/Image/SignIn.png';

import { Link } from 'react-router-dom';

import { useState } from 'react';

import { loginRequest } from '../api/user.api'
import { useNavigate } from 'react-router-dom';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Icons } from '../Components/Icons';
export const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [tipo_usuario, setTipo_usuario] = useState('');

    const handleChange = (e, setValue) => {
        setValue(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginRequest({
                email: email,
                passw: password,
                tipo_usuario
            })
            console.log(response)
            navigate(`${response.redirectUrl}`,{state:{response}})
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="flex flex-col  items-center bg-white xl:mx-20 rounded-xl h-auto">
            <header className='w-full flex flex-col items-center xl:flex-row xl:justify-around '>
                <div className='w-full pl-5'> <Link to='/'><img src={MSG} alt="No found" className='xl:flex w-16 xl:w-20' /></Link></div>
                <div className=' grid grid-rows-2 gap-y-3 justify-center xl:hidden'>
                    <div className=' text-4xl text-center'>
                        <p className='font-light'>Iniciar Sesión</p>
                    </div>
                </div>
            </header>
            <main className="Main mb-5 rounded-xl justify-center xl:w-full xl:grid xl:grid-cols-2 xl:border-none">
                <div className='hidden xl:flex w-full justify-center items-center'>
                    <img src={Front} alt="" className='w-2/3 block mb-36' />
                </div>
                <div className='flex justify-center xl:hidden'>
                    <img src={signIn} alt="" className='w-52 block' />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className='w-full xl:w-10/12 p-5 rounded-xl xl:mx-20    '>
                    <div className='hidden xl:grid grid-rows-2 gap-y-3 justify-center xl:pr-16'>
                        <div className='text-center'>
                            <p className='text-2xl font-extrabold'>Iniciar sesión</p>
                        </div>
                        <div className='hidden xl:flex gap-x-3 '>
                            <p className='font-normal text-lg'>¿Aun no tienes una cuenta? </p>
                            <Link to="/Registrate" className='text-link font-normal text-lg'>Registrate</Link>
                        </div>
                    </div>
                    <label htmlFor="" className=''>
                        <span className='EmailText relative font-extrabold'>Correo</span>
                        <span className='email relative mx-2'><Icons icon={faEnvelope} css='text-xl' /></span>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => {
                                handleChange(event, setEmail)
                            }}
                            placeholder='Ingrese su correo'
                            className='xl:w-96 w-full p-3 pl-9 mb-5 my-3 border border-gray-300 bg-input rounded-lg text-black outline-none placeholder:text-black' />
                    </label>
                    <label htmlFor="" className=''>
                        <span className='PasswText relative  font-extrabold'>Constraseña</span>
                        <span className='passw relative'><Icons icon={faLock} css='text-xl mx-2' /></span>
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => {
                                handleChange(event, setPassword)
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
                            Iniciar sesión
                        </button>
                        <div className='w-full flex justify-center gap-x-3 xl:hidden mt-3 '>
                            <p className='font-normal text-lg'>¿Aun no tienes una cuenta? </p>
                            <Link to="/Registrate" className='text-link font-normal text-lg underline'>Registrate</Link>
                        </div>
                        <nav className='my-6 xl:my-3'>
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
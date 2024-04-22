import Front from '../assets/Image/Beach-cuate.png';
import MSG from '../assets/Icons/Logo.jpg';
import { Link } from 'react-router-dom';
import { Button } from '../Components/Button'
import { useState } from 'react';
import {loginRequest} from '../api/user.api'
export const SignIn = () => {
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const handleChange = (e, setValue) => {
        setValue(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await loginRequest({
                email:email,
                passw:password
            }) 
            console.log(response)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className="h-screen xl:h-auto bg-home py-4 xl:py-20">
            <div className="flex flex-col  items-center mx-4   my-2 p-5 bg-white xl:mx-20 rounded-xl h-auto">
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
                <main className="Main py-10 mb-5 px-10 rounded-xl xl:w-full xl:grid xl:grid-cols-2 xl:border-none">
                    <div className='hidden xl:flex w-full justify-center items-center'>
                        <img src={Front} alt="" className='w-11/12 block' />
                    </div>
                    <form onSubmit={handleSubmit} action="" className="w-full xl:w-10/12 flex flex-col xl:border xl:border-black xl:px-14 xl:py-12 xl:rounded-2xl xl:mx-20">
                        <div className='hidden xl:grid grid-rows-2 gap-y-3 justify-center mb-3'>
                            <div className='w-full text-center'>
                                <p className='text-2xl font-bold'>Iniciar Sesión </p>
                            </div>
                            <div className='flex gap-x-1 justify-center'>
                                <p className='font-normal text-base '>¿Aun no tienes una cuenta? </p>
                                <Link to="/Registrate" className='text-link font-normal text-base'>Regístrate</Link>
                            </div>
                        </div>
                        <label htmlFor="">Correo</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(event) => {
                                handleChange(event, setEmail)
                            }}
                            placeholder="Ingrese su correo"
                            className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
                        />
                        <label htmlFor="">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => {
                                handleChange(event, setPassword)
                            }}
                            placeholder="Ingrese su contraseña"
                            className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
                        />
                        <div className='text-center'>
                            <Button
                                label="Inciar Sesión"
                                style={{
                                    background: "#9ED4C6",
                                    border: "1px solid #000",
                                    color: "#000",
                                    marginTop: "2em"
                                }}
                            />
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}
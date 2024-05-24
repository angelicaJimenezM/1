//Importamos el logo de la pagina
import MSG from '../assets/Icons/Logo.jpg';
import TouristIMg from '../assets/Image/Tourist.png';
import TouristIMG from '../assets/Image/Tourist.jpeg';
//Importamos el hook useState para almacenar el valor de los inputs
import { useState } from 'react'
//-----------------------
import { Link } from 'react-router-dom'
//Importamos la funcion que valida las expresiones regulares 
import { handleChangeText, handleChangenumber } from '../Utils/InputValidation'
//------------------------------------------------------------
import { createTouristRequest } from '../api/user.api.js'
//-----------------------------------------------------------
import { Button } from "../Components/Button";
import { Successful, Errors } from '../Utils/Alerts.js';
import { useLocation } from 'react-router-dom';

export const Tourist = () => {
    const location = useLocation();
    const { state } = location
    const { passw, usuario } = state
    console.log(state.email, passw, usuario)
    //Almacenamos el valor del input en el estado utilizando el hook useState
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [genero, setGenero] = useState('');
    const [idiomas, setIdiomas] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contacto, setContacto] = useState('');
    const [interes, setInteres] = useState('');
    const [nivel, setNivel] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createTouristRequest({
                nombre: nombre,
                apellido: apellido,
                edad: edad,
                sexo: genero,
                interas: interes,
                s_email: email,
                n_telefono: telefono,
                c_emergencia: contacto,
                n_idiomas: idiomas,
                idiomas: nivel,
                email: state.email,
                passw,
                tipo_usuario: usuario,
            })
            if (response.status === 200) {

                Successful(response.data.Message)
            }

        } catch (error) {
            // El servidor respondió con un código de estado fuera del rango 200
            if (error.response.status === 400) {
                Errors(`${error.response.data.Message} : ${error.response.data.errores}`);
            }

        }
    }
    return (
        <div className='bg-home py-4 xl:py-20'>
            <div className="flex flex-col  items-center mx-4 my-2 p-5 bg-white xl:mx-20 rounded-xl h-auto ">
                <header className=' w-full flex flex-col items-center xl:flex-row xl:justify-around '>
                    <Link to='/'><img src={MSG} alt="No found" className='xl:flex w-44' /></Link>
                    <div className='w-full text-center p-1 pb-2 xl:hidden'>
                        <p className='text-2xl font-bold'>Crea una cuenta como turista </p>
                        <p className='text-base font-bold text-gray-400'>Ingresa tu informacion</p>
                    </div>
                </header>
                <main className='Main py-10 mb-5 px-10 rounded-xl xl:w-full xl:grid xl:grid-cols-2 xl:border-none'>

                    <div className='hidden xl:flex w-full justify-center items-center'>
                        <img src={TouristIMG} alt="" className=' block pr-10 rounded-full' />
                    </div>

                    <form onSubmit={handleSubmit} action="" className='Form w-full flex flex-col overflow-y-auto xl:border xl:border-black xl:max-h-none xl:px-14 xl:py-4 xl:rounded-2xl'>
                        <div className='w-full text-center p-10 pb-2 hidden xl:flex xl:flex-col'>
                            <p className='text-2xl font-bold'>Crea una cuenta como turista </p>
                            <p className='text-base font-bold text-gray-400'>Ingresa tu informacion</p>
                        </div>
                        <label htmlFor="" className=''>
                            <p>Nombre</p>
                            <input
                                type="text"
                                placeholder='Ingrese su nombre'
                                value={nombre}
                                onChange={(event) => {
                                    handleChangeText(event, setNombre)
                                }}
                                title='Escriba solo letras'
                                className='border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none' />
                        </label>
                        <label htmlFor="" className=''>
                            <p>Apellido</p>
                            <input
                                type="text"
                                value={apellido}
                                onChange={(event) => {
                                    handleChangeText(event, setApellido)
                                }}
                                title='Escriba solo letras'
                                placeholder='Ingrese su apellido'
                                className='border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none' />
                        </label>
                        <div className='flex justify-around '>
                            <label htmlFor="" className=''>
                                <p>Edad</p>
                                <input
                                    type="number"
                                    placeholder='20'
                                    value={edad}
                                    onChange={(event) => { handleChangenumber(event, setEdad) }}
                                    className='border border-gray-400 w-14 h-14 xl:pl-3 rounded-full mb-5 my-3 text-center outline-none' />
                            </label>
                            <label htmlFor="" className=''>
                                <p>Sexo</p>
                                <input
                                    type="text"
                                    placeholder='M'
                                    value={genero}
                                    onChange={(event) => {
                                        handleChangeText(event, setGenero)
                                    }}
                                    className='border border-gray-400 w-14 h-14  rounded-full mb-5 my-3 text-center outline-none' />
                            </label>
                            <label htmlFor="" className=''>
                                <p>Idiomas</p>
                                <input
                                    type="number"
                                    placeholder='2'
                                    value={idiomas}
                                    onChange={(event) => {
                                        handleChangenumber(event, setIdiomas)
                                    }}
                                    className='border border-gray-400 w-14 h-14 xl:pl-3 rounded-full mb-5 my-3 text-center outline-none' />
                            </label>
                        </div>
                        <label htmlFor="" className=''>
                            <p>Nivel de idioma</p>
                            <input
                                type="text"
                                value={nivel}
                                onChange={(event) => {
                                    handleChangeText(event, setNivel)
                                }}
                                placeholder='Ingrese su nivel de idioma'
                                className='border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none' />
                        </label>
                        <label htmlFor="" className=''>
                            <p>Correo electronico</p>
                            <input
                                type="text"
                                placeholder='Ingrese su correo'
                                value={email}
                                onChange={(event) => {
                                    handleChangeText(event, setEmail)
                                }}
                                className='border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none' />
                        </label>
                        <label htmlFor="" className=''>
                            <p>Numero de telefono</p>
                            <input
                                type="number"
                                placeholder='Ingrese su numero'
                                value={telefono}
                                onChange={(event) => {
                                    handleChangenumber(event, setTelefono)
                                }}
                                className='border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none' />
                        </label>
                        <label htmlFor="" className=''>
                            <p>Contacto de emergencia</p>
                            <input
                                type="number"
                                placeholder='Ingrese el numero del contacto'
                                value={contacto}
                                onChange={(event) => {
                                    handleChangenumber(event, setContacto)
                                }}
                                className='border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none' />
                        </label>
                        <label htmlFor="" className=''>
                            <p>Intereses</p>
                            <textarea name=""
                                value={interes}
                                onChange={(event) => {
                                    handleChangeText(event, setInteres)
                                }}
                                placeholder='¿Tienes algun interes?'
                                className='TextArea border border-gray-400 w-full rounded-xl resize-none px-3'
                            ></textarea>
                        </label>
                        <div className='text-center'>
                            <Button
                                label="Registrate"
                                style={{
                                    background: "#9ED4C6",
                                    border: "1px solid #000",
                                    color: "#000",
                                }}
                            />
                        </div>
                    </form>
                    <img src={TouristIMg} alt="" className='Tourist xl:hidden' />
                </main>
            </div>
        </div>
    )
}
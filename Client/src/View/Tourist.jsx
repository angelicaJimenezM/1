//Importamos el logo de la pagina
import MSG from '../assets/Icons/Logo.jpg';
import TouristIMg from '../assets/Image/Tourist.png';
//Importamos el componenye del boton ya creado;
import { Button } from '../Components/Button'
export const Tourist = () => {
    return (
        <div className="flex flex-col  items-center mx-3 my-2 p-5 bg-white rounded-xl h-auto ">
            <header className=' w-full flex flex-col items-center'>
                <img src={MSG} alt="No found" className='Logo' />
                <div className='w-full text-center p-1 pb-2'>
                    <p className='text-2xl font-bold'>Crea una cuenta como turista </p>
                    <p className='text-base font-bold text-gray-400'>Ingresa tu informacion</p>
                </div>
            </header>
            <main className='Main py-10 mb-5 px-10 rounded-xl'>
                <form action="" className='Form w-full flex flex-col overflow-y-auto '>
                    <label htmlFor="" className=''>
                        <p>Nombre</p>
                        <input
                            type="text"
                            placeholder='Ingrese su nombre'
                            className='border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none' />
                    </label>
                    <label htmlFor="" className=''>
                        <p>Apellido</p>
                        <input
                            type="text"
                            placeholder='Ingrese su apellido'
                            className='border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none' />
                    </label>
                    <div className='flex justify-around '>
                        <label htmlFor="" className=''>
                            <p>Edad</p>
                            <input
                                type="number"
                                placeholder='20'
                                className='border border-gray-400 w-14 h-14 p-3 rounded-full mb-5 my-3 text-center outline-none' />
                        </label>
                        <label htmlFor="" className=''>
                            <p>Sexo</p>
                            <input
                                type="text"
                                placeholder='M'
                                className='border border-gray-400 w-14 h-14 p-3 rounded-full mb-5 my-3 text-center outline-none' />
                        </label>
                        <label htmlFor="" className=''>
                            <p>Idiomas</p>
                            <input
                                type="number"
                                placeholder='2'
                                className='border border-gray-400 w-14 h-14 p-3 rounded-full mb-5 my-3 text-center outline-none' />
                        </label>
                    </div>
                    <label htmlFor="" className=''>
                        <p>Correo electronico</p>
                        <input
                            type="email"
                            placeholder='Ingrese su correo'
                            className='border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none' />
                    </label>
                    <label htmlFor="" className=''>
                        <p>Numero de telefono</p>
                        <input
                            type="email"
                            placeholder='Ingrese su numero'
                            className='border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none' />
                    </label>
                    <label htmlFor="" className=''>
                        <p>Contacto de emergencia</p>
                        <input
                            type="email"
                            placeholder='Ingrese el numero del contacto'
                            className='border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none' />
                    </label>
                    <label htmlFor="" className=''>
                        <p>Intereses</p>
                        <input
                            type="text"
                            placeholder='¿Tienenes algun interes?'
                            className='border border-gray-400 w-full h-28 p-3 rounded-xl mb-5 my-3 text-center pb-20'
                        />
                    </label>
                    <div className='text-center'>
                        <Button label='Registrate' style={{
                            background: '#9ED4C6',
                            border: '1px solid #000',
                            color: '#000'
                        }} />
                    </div>
                </form>
            <img src={TouristIMg} alt="" className='Tourist' />
            </main>
        </div>
    )
}
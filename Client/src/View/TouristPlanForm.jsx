import Logo from '../assets/Icons/Rio.png';
import { Button } from '../Components/Button';
import { createTouristPackage } from '../api/user.api'
import { useState } from 'react'
import  {Successful} from '../Utils/Alerts.js'
export const TouristPlanForm = () => {

    const [nombre, setNombre] = useState('');
    const [destinos, setDestinos] = useState('');
    const [fecha_salida, setFecha_salida] = useState('');
    const [fecha_llegada, setFecha_llegada] = useState('');
    const [actividades, setActividades] = useState('');
    const [alojamiento, setAlojamiento] = useState('');
    const [comidas, setComidas] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createTouristPackage({
                nombre,
                destinos,
                fecha_salida,
                fecha_llegada,
                actividades,
                alojamiento,
                comidas,
            })
            console.log(response)
            Successful();
        } catch (e) {
            console.error(e)
        }
    }
    const handleChange = (e, setValue) => {
        setValue(e.target.value);
    }
    return (
        <>
            <header className='flex justify-center'>
                <img src={Logo} alt="No found" className='w-10/12 absolute' />
            </header>
            <main className='TouristPlan m-3 
             rounded-lg mt-60 py-20'>
                <form onSubmit={handleSubmit} action="" className='w-full h-auto flex justify-center flex-col items-center p-2 '>
                    <h1 className='text  font-bold p-2 '>Registremos tu plan turistico!</h1>
                    <input
                        type="text"
                        placeholder='Nombre'
                        value={nombre}
                        onChange={(event) => {
                            handleChange(event, setNombre)
                        }}
                        className='w-80 border-b border-black pb-1 text-lg outline-none font-normal my-3 ' />
                    <input
                        type="text"
                        placeholder='Destinos'
                        value={destinos}
                        onChange={(event) => {
                            handleChange(event, setDestinos)
                        }}
                        className='w-80 border-b border-black pb-1 text-lg outline-none font-normal my-3 ' />
                    <div className='w-full flex justify-center text-lg my-3'>
                        <label htmlFor="" className='flex gap-x-5 font-normal text-gray-400'><p className='py-2'>
                            Fecha de salida
                        </p>
                            <input
                                type="date"
                                value={fecha_salida}
                                onChange={(event) => {
                                    handleChange(event, setFecha_salida)
                                }}
                                className='border border-black p-1 rounded-lg' />
                        </label>
                    </div>
                    <div className='w-full flex justify-center text-lg my-3'>
                        <label htmlFor="" className='flex gap-x-1 font-normal text-gray-400'><p className='py-2'>
                            Fecha de Regreso
                        </p>
                            <input
                                type="date"
                                value={fecha_llegada}
                                onChange={(event) => {
                                    handleChange(event, setFecha_llegada)
                                }}
                                className='border border-black p-1 rounded-lg' />
                        </label>
                    </div>
                    <input type="text" placeholder='Actividades (Opcional)'
                        value={actividades}
                        onChange={(event) => {
                            handleChange(event, setActividades)
                        }}
                        className='w-80 border-b border-black pb-1 text-lg outline-none font-normal my-5 ' />
                    <input type="text" placeholder='Alojamiento (Opcional)'
                        value={alojamiento}
                        onChange={(event) => {
                            handleChange(event, setAlojamiento)
                        }}
                        className='w-80 border-b border-black pb-1 text-lg outline-none font-normal my-5 ' />
                    <input type="text" placeholder='Comidas (Opcional)'
                        value={comidas}
                        onChange={(event) => {
                            handleChange(event, setComidas)
                        }}
                        className='w-80 border-b border-black pb-1 text-lg outline-none font-normal my-5 ' />
                    <Button label={"Registrar"} style={{
                        background: '#9ED4C6',
                        color: '#000',
                        fontSize: '20px',
                        height: '3em',
                        position: 'relative',
                        top: '1.25rem'
                    }} />
                </form>
            </main>
        </>
    )
}
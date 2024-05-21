import Logo from '../assets/Icons/Rio.png';
import { Button } from '../Components/Button';
import { createTouristPackage } from '../api/user.api'
import { useState } from 'react'
import { Successful } from '../Utils/Alerts.js'
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
        <section className='xl:grid xl:grid-cols-10'>
            <header className='col-span-3 xl:flex xl:justify-center xl:items-center'>
                <img src={Logo} alt="No found" className='TouristIMG' />
            </header>
            <main className='TouristPlan rounded-lg xl:col-span-7 xl:flex xl:items-center xl:mr-3'>
                <form onSubmit={handleSubmit} action="" className=' w-full xl:h-96 xl:flex-wrap xl:flex-row xl:overflow-y-auto flex justify-center flex-col items-center p-2 '>
                    <div className='w-full xl:flex xl:justify-start  xl:items-start xl:mx-4'>
                        <h1 className='xl:text-2xl font-bold p-2 '>Registremos tu plan turistico!</h1>
                    </div>
                    <div className='xl:w-full xl:grid xl:grid-cols-2'>
                        <div className='xl:flex xl:flex-col xl:justify-center xl:items-start mx-5'>
                            <input
                                type="text"
                                placeholder='Nombre'
                                value={nombre}
                                onChange={(event) => {
                                    handleChange(event, setNombre)
                                }}
                                className='w-80 xl:w-64 Itinerary p-1 text-lg xl:text-sm  outline-none font-normal my-3 pl-2 rounded-md placeholder:text-gray-500' />
                            <input
                                type="text"
                                placeholder='Destinos'
                                value={destinos}
                                onChange={(event) => {
                                    handleChange(event, setDestinos)
                                }}
                                className='w-80 xl:w-64 Itinerary p-1 text-lg xl:text-sm  outline-none font-normal my-3 pl-2 rounded-md placeholder:text-gray-500' />
                            <div className='w-full flex justify-start text-lg my-3'>
                                <label htmlFor="" className='flex gap-x-5 font-normal text-gray-400 xl:text-sm'><p className='py-2'>
                                    Fecha de salida
                                </p>
                                    <input
                                        type="date"
                                        value={fecha_salida}
                                        onChange={(event) => {
                                            handleChange(event, setFecha_salida)
                                        }}
                                        className='Itinerary p-1 rounded-md mx-2' />
                                </label>
                            </div>
                            <div className='w-full flex justify-start text-lg my-3 xl:text-sm'>
                                <label htmlFor="" className='flex gap-x-1 font-normal text-gray-400'><p className='py-2'>
                                    Fecha de Regreso
                                </p>
                                    <input
                                        type="date"
                                        value={fecha_llegada}
                                        onChange={(event) => {
                                            handleChange(event, setFecha_llegada)
                                        }}
                                        className='Itinerary p-1 rounded-md mx-2' />
                                </label>
                            </div>
                        </div>
                        <div className='xl:flex xl:flex-col xl:justify-start xl:items-start mx-5'>
                            <input type="text" placeholder='Actividades (Opcional)'
                                value={actividades}
                                onChange={(event) => {
                                    handleChange(event, setActividades)
                                }}
                                className='w-80 xl:w-64 Itinerary p-1 text-lg xl:text-sm  outline-none font-normal my-3 pl-2 rounded-md placeholder:text-gray-500' />
                            <input type="text" placeholder='Alojamiento (Opcional)'
                                value={alojamiento}
                                onChange={(event) => {
                                    handleChange(event, setAlojamiento)
                                }}
                                className='w-80 xl:w-64 Itinerary p-1 text-lg xl:text-sm  outline-none font-normal my-3 pl-2 rounded-md placeholder:text-gray-500' />
                            <input type="text" placeholder='Comidas (Opcional)'
                                value={comidas}
                                onChange={(event) => {
                                    handleChange(event, setComidas)
                                }}
                                className='w-80 xl:w-64 Itinerary p-1 text-lg xl:text-sm  outline-none font-normal my-3 pl-2 rounded-md placeholder:text-gray-500' />
                            <Button label={"Registrar"} style={{
                                width: '10rem',
                                background: '#9ED4C6',
                                color: '#000',
                                fontSize: '15px',
                                height: '2.5em',
                                position: 'relative',
                                top: '1.25rem'
                            }} />
                        </div>
                    </div>
                </form>
            </main>
        </section>
    )
}
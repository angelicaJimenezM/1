import Logo from '../assets/Icons/Rio.png';
import { Button } from '../Components/Button'
export const TouristPlanForm = () => {
    return (
        <>
            <header className='flex justify-center'>
                <img src={Logo} alt="No found" className='w-10/12 absolute' />
            </header>
            <main className='TouristPlan m-3 
             rounded-lg mt-60 py-20'>
                <form action="" className='w-full h-auto flex justify-center flex-col items-center p-2 '>
                    <h1 className='text  font-bold p-2 '>Registremos tu plan turistico!</h1>
                    <input type="text" placeholder='Nombre' className='w-80 border-b border-black pb-1 text-lg outline-none font-normal my-3 ' />
                    <input type="text" placeholder='Destinos' className='w-80 border-b border-black pb-1 text-lg outline-none font-normal my-3 ' />
                    <div className='w-full flex justify-center text-lg my-3'>
                        <label htmlFor="" className='flex gap-x-5 font-normal text-gray-400'><p className='py-2'>
                            Fecha de salida
                        </p>
                            <input type="date" className='border border-black p-1 rounded-lg' />
                        </label>
                    </div>
                    <div className='w-full flex justify-center text-lg my-3'>
                        <label htmlFor="" className='flex gap-x-1 font-normal text-gray-400'><p className='py-2'>
                            Fecha de Regreso
                        </p>
                            <input type="date" className='border border-black p-1 rounded-lg' />
                        </label>
                    </div>
                    <input type="text" placeholder='Actividades (Opcional)' className='w-80 border-b border-black pb-1 text-lg outline-none font-normal my-5 ' />
                    <input type="text" placeholder='Alojamiento (Opcional)' className='w-80 border-b border-black pb-1 text-lg outline-none font-normal my-5 ' />
                    <input type="text" placeholder='Comidas (Opcional)' className='w-80 border-b border-black pb-1 text-lg outline-none font-normal my-5 ' />
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
import { Icons } from '../Components/Icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
//----------------------------------------------
import Check from '../assets/Icons/Check.png';
//----------------------------------------------
export const ContentModal = () => {
    
    return (
        <div className={`fixed top-0 left-0 w-screen h-screen bg-modal flex justify-center items-center z-50`}>
            <main className="w-80 h-72 px-5 bg-white rounded-2xl ">
                <header className='w-full flex justify-end'><button
                ><Icons icon={faX} css='text-xl  p-2 cursor-pointer' /></button></header>
                <div className='w-full h-72 grid grid-rows-2'>
                    <div className='flex justify-center items-center'>
                        <img src={Check} alt="" className='h-20' />
                    </div>
                    <div className='w-full'>
                        <p className='text-xl text-center'>Te has registrado e iniciado sesión exitosamente</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
import { useEffect } from 'react';
import wiz from '../../assets/Image/wiz.png';
import send from '../../assets/Icons/send.png';
import { Socket } from '../../api/Socket.io.js';
import { useState } from 'react';


export const ChatView = () => {

    const [message, setMessage] = useState('');
    const [storeMessage,setStoreMessage] = useState([])
    const [socket, setSocket] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newMessage = {
            from: 'Me: ',
            data: message
        }
        
        if (socket) {
            socket.emit('chat', message);
            setStoreMessage([...storeMessage, newMessage])
            setMessage('')
        }
    } 
    
    useEffect(() => {
        const socketInstance = Socket();
        setSocket(socketInstance)
        
        socketInstance.on('chat', message => {
            console.log(message)
            receiveMessage(message)
        })
        return () => {
            socketInstance.disconnect();
        }
    }, []);

    
    const receiveMessage = (messages)=>{
        //Operador de propagacion.
        setStoreMessage((state) => [...state, messages])
    }
    return (
        <section className="Chat w-96 min-h-64 rounded-lg pb-5 pr-5">
            <header className="flex justify-start items-center">
                <div className="w-10 h-10 rounded-full m-5">
                    <img src={wiz} alt="No round" className='rounded-full' />
                </div>
                <div>
                    <h2>Josee</h2>
                    <h3 className="text-xs">Josesslcedo@gmail.com</h3>
                </div>
            </header>
            <form onSubmit={handleSubmit}>
                <aside>
                    <ul className='Message min-h-56 max-h-60 flex flex-row flex-wrap overflow-y-auto'>
                        {
                            storeMessage.map((dataMessage,i)=>(
                                <li key ={i} className={`${dataMessage.from === 'Me: ' ? 'bg-sky-300 table p-2 h-10 mx-2  rounded-lg my-2': 'bg-home table p-1 rounded-lg SecondMessage mt-2 h-10'}`}>
                                    {dataMessage.from} {dataMessage.data} 
                                </li>
                            ))
                        }
                    </ul>
                    <div className='grid grid-cols-10 my-2'>
                        <div className='ContentMessage col-span-8'>
                            <textarea
                                value={message}
                                onChange={(e) => { setMessage(e.target.value) }}
                                cols={1} rows={1}
                                type="text"
                                className='textArea w-64 min-h-8 h-full border border-borderInput border-opacity-30 rounded-md outline-none pl-2 ml-5 placeholder:text-black resize-none'
                                placeholder='Aa'
                            />
                        </div>
                        <div className='w-full flex justify-center items-center sborder border-black col-span-2'>
                            <button>
                                <img src={send} alt="" className='w-8 cursor-pointer' />
                            </button>
                        </div>
                    </div>
                </aside>
            </form>
        </section>
    );
};

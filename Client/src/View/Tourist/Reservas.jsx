import { useState, useEffect } from "react"
import { showReservas } from "../../api/user.api"
import Reserve from '../../assets/Image/Reserve.png'
import user from '../../assets/Icons/user.png'
import bck from '../../assets/Icons/backpack.png'
import hash from '../../assets/Icons/hash.png'

export const Reservas = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await showReservas();
                setData(response);
            } catch (e) {
                console.error(e)
            }
        }
        getData();
    }, [])

    return (

        <main className="grid grid-cols-10">
            <div className="col-span-4 ">
                <img src={Reserve} alt="no foun" className="w-full " />
            </div>
            <div className="col-span-6 PackageView w-10/12 mx-5 rounded-2xl ">
            {
                data.map((datos) => (
                    <ul key={datos.id} className="flex flex-col justify-center items-center">
                        <li className="my-5 flex items-center"><img src={user} alt="no found" className="w-8" /><p className="Itinerary p-2 rounded-xl">Identificacion del Usuario: {datos.turista_id}</p></li>
                        <li className="my-5 flex items-center"><img src={bck} alt="No found" className="w-8" /><p className="Itinerary p-2 rounded-xl flex items-center">Identificacion del Paquete <img src={hash} alt="No found" className="w-5" /> {datos.itinerario_id}</p></li>
                    </ul>
                ))
            }
            </div>
        </main>

    )
}
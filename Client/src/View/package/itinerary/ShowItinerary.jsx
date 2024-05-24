import { showItinerario, showPackage } from "../../../api/user.api.js"
import { useState, useEffect } from "react";
import logo from '../../../assets/Image/Itinerarios.jpg'
import bus from '../../../assets/Icons/bus.png'
import mp from '../../../assets/Icons/Map.png'
import calendar from '../../../assets/Icons/calendar.png'
import bck from '../../../assets/Icons/backpack.png'
import cutlery from '../../../assets/Icons/cutlery.png'
import list from '../../../assets/Icons/list.png'
import hash from '../../../assets/Icons/hash.png'
import { useNavigate } from 'react-router-dom'
export const ShowItinerary = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([])
    const [Spackage, setSpackage] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const dataPackage = await showPackage()
                const response = await showItinerario();
                setData(response)
                setSpackage(dataPackage)
            } catch (e) {
                console.error("Error al obtener los datos: ", e)
            }
        };
        getData();
    }, [])
    return (
        <main className="w-full ">
            <div>
                <h1 className="mx-7 text-xl font-extrabold ">Planes turisticos</h1>
            </div>
            <form className="mx-6 flex justify-center gap-4">
                {data.map(Itinerario => (
                    <ul key={Itinerario.nit} className=" PackageContainer PackageView bg-white flex flex-col my-5 gap-y-3 pb-5 rounded-lg jus">
                        <li className="Itinerary flex w-24 p-2 rounded-lg text-sm mx-4 my-2 font-semibold items-center">Paquete<img src={hash} alt="no foun" className="w-5" />{Itinerario.nit}</li>
                        <div className="w-full flex justify-center items-center">
                            <img src={logo} alt="No found" className="w-56" />
                        </div>
                        {
                            Spackage.filter((pkg) => pkg.nit == Itinerario.ID_paquetes).map(PackateT => (
                                <ul key={PackateT.nit} className="w-full text-center font-semibold text-lg">
                                    <li>{PackateT.nombre}</li>
                                    <li className="justify-start calendar pl-1 flex text-xs my-2  font-semibold items-center"><p className="flex justify-center items-center gap-x-1"><img src={calendar} alt="No found" className="w-5" />{new Date(PackateT.fecha_salida).toLocaleDateString()}-{new Date(PackateT.fecha_llegada).toLocaleDateString()}</p></li>
                                </ul>
                            ))
                        }
                        <li className="text-sm p-5">{Itinerario.DESCRIPCION}</li>
                        <ul className="">
                            <li className="flex gap-x-2 text-sm rounded-xl mx-5 font-semibold mb-2 items-center">
                                <img src={bus} alt="No foun" className="w-6" /> {Itinerario.CUPOS}
                            </li>
                            {
                                Spackage.filter((pkg) => pkg.nit == Itinerario.ID_paquetes).map(PackateT => (
                                    <ul key={PackateT.nit} className="text-sm">
                                        <li className="Map flex rounded-xl text-sm mx-4 font-semibold items-center"><img src={mp} alt="No found" className="w-6" />{PackateT.destinos}</li>
                                        <li className="Map my-2 flex rounded-xl text-sm mx-4 font-semibold items-center">
                                            <img src={list} alt="No foun" className="w-6 block" />{PackateT.actividades}
                                        </li>
                                        <li className="Map my-2 flex rounded-xl text-sm mx-4 font-semibold items-center">
                                            <img src={bck} alt="No foun" className="w-6" /> {PackateT.alojamiento}
                                        </li>
                                        <li className="Map my-2 flex rounded-xl text-sm mx-4 font-semibold items-center"><img src={cutlery} alt="No foun" className="w-6" />{PackateT.comidas}</li>
                                    </ul>
                                ))
                            }
                        </ul>
                        <div className="w-full flex justify-center">
                            <button onClick={() => navigate('/Msg/Turista/Itinerario/Form')} className="Itinerary Button w-52 p-1 text-center rounded-xl font-bold cursor-pointer">Reserver Itinerario</button>
                        </div>
                    </ul>

                ))}
            </form>
        </main>
    )
}
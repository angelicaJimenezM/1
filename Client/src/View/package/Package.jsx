import { showPackage } from "../../api/user.api.js"
import { useState, useEffect } from "react";
import calendar from '../../assets/Icons/calendar.png'
import Logo from '../../assets/Image/Logo2.jpg'
import mp from '../../assets/Icons/Map.png'
import list from '../../assets/Icons/list.png'
import bck from '../../assets/Icons/backpack.png'
import cutlery from '../../assets/Icons/cutlery.png'
import {useNavigate} from 'react-router-dom'
export const Package = () => {
    const naviagte = useNavigate();
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await showPackage();
                setData(response)
            } catch (e) {
                console.error("Error al obtener los datos: ", e)
            }
        };
        getData();
    }, [])
    return (
        <main className="w-full ">
            <div>
                <h1 className="mx-7 text-xl font-extrabold ">Mis planes turisticos</h1>
            </div>
            <div className="mx-6 flex justify-center gap-4">
                {data.map(Package => (
                    <ul key={Package.nit} className=" PackageContainer PackageView bg-white flex flex-col my-5 gap-y-3 pb-5 rounded-lg jus">
                        <li className="flex justify-end items-center mx-2 text-xs"> <img src={calendar} alt='No found' className="w-4" />
                            <p className="mx-2"> {new Date(Package.fecha_salida).toLocaleDateString()} - {new Date(Package.fecha_llegada).toLocaleDateString()}</p></li>
                        <div className="w-full flex justify-center items-center ">
                            <img src={Logo} alt="No found" className="w-40" />
                        </div>
                        <li className="flex text-center justify-center items-center mx-2 text-2xl font-semibold">
                            <p className="ml-3">{Package.nombre}</p>
                        </li>
                        <li className="flex items-center mx-2 text-sm">
                            <img src={mp} alt='no found' className="w-6" />
                            <p className="ml-3">{Package.destinos}</p>
                        </li>
                        <li className="flex items-center mx-2 text-sm">
                            <img src = {list} alt = 'no found' className="w-6" /><p className="ml-3">{Package.actividades}</p>
                        </li>
                        <li className="flex items-center mx-2 text-sm"><img src = {bck} alt = "No found" className="w-6"/><p className="ml-3">{Package.alojamiento}</p></li>
                        <li className="flex items-center mx-2 text-sm"><img src = {cutlery} alt = 'No found' className="w-6" /><p className="ml-3">{Package.comidas}</p></li>
                        <ul className="flex flex-col gap-x-5 justify-center items-center gap-y-5">
                            <li className="Itinerary Button w-52 p-1 text-center rounded-xl font-bold cursor-pointer" onClick={()=>naviagte(`/Msg/Guia/TouristPlan/${Package.nit}`)}>Editar</li>
                            <li className="Itinerary bg-red-400 w-52 p-1 text-center rounded-xl font-bold cursor-pointer" onClick={()=>naviagte(`/Msg/TouristPlan/${Package.nit}`)}>Eliminar</li>
                        </ul>
                    </ul>
                ))}
            </div>
        </main>
    )
}
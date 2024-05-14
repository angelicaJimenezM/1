import { showPackage } from "../../api/user.api.js"
import { useState, useEffect } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuHotel } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";

export const Package = () => {
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
        <main className="w-screen flex flex-col items-center ">
            <h1 className="absolute text-2xl font-extrabold">Mis planes turisticos</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#B0DBD0" fillOpacity="1" d="M0,224L34.3,240C68.6,256,137,288,206,293.3C274.3,299,343,277,411,240C480,203,549,149,617,144C685.7,139,754,181,823,218.7C891.4,256,960,288,1029,293.3C1097.1,299,1166,277,1234,266.7C1302.9,256,1371,256,1406,256L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
            {
                data.map(Package =>
                    <ul key={Package.nit} className="TouristPlan bg-Card rounded-3xl w-10/12  my-3 flex flex-col gap-y-3 flex-wrap overflow-y-auto pb-5">
                        <li className="flex items-center mx-2 text-xl"><MdDriveFileRenameOutline />
                            <p className="ml-3">{Package.nombre}</p>
                        </li>
                        <li className="flex items-center mx-2 text-xl">
                            <SlLocationPin />
                            <p className="ml-3">{Package.destinos}</p>
                        </li>
                        <li className="flex items-center mx-2 text-xl"> <CiCalendarDate />
                            <p className="mx-2"> {new Date(Package.fecha_salida).toLocaleDateString()} - {new Date(Package.fecha_llegada).toLocaleDateString()}</p></li>
                        <li className="flex items-center mx-2 text-xl">
                            <IoGameControllerOutline /><p className="ml-3">{Package.actividades}</p>
                        </li>
                        <li className="flex items-center mx-2 text-xl"><LuHotel /><p className="ml-3">{Package.alojamiento}</p></li>
                        <li className="flex items-center mx-2 text-xl"><IoFastFoodOutline /><p className="ml-3">{Package.comidas}</p></li>
                        <ul className="flex gap-x-5 justify-center">
                            <li className="border border-black w-20 p-1 text-center rounded-xl font-bold"><Link>Editar</Link></li>
                            <li className="border border-black w-20 p-1 text-center rounded-xl font-bold"><Link>Eliminar</Link></li>
                        </ul>
                    </ul>
                )
            }
        </main>
    )
}
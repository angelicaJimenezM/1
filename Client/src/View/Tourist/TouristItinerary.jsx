import { createReserva } from "../../api/user.api.js"
import { useState } from "react";
import Logo from '../../assets/Image/reserva.png'
export const TouristItinerary = () => {
    const [usuario, setUsuario] = useState()
    const [itinerario, setItinerario] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createReserva({
                turista_id: usuario,
                itinerario_id: itinerario
            })
            console.log(response)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <main className="grid grid-cols-10">
            <div className="col-span-4 ">
                <img src={Logo} alt="No found" className="mx-5" />
            </div>
            <form onSubmit={handleSubmit} className="Itinerary w-10/12 col-span-6 flex flex-col items-center gap-y-5 rounded-2xl ml-10">
                <div className="w-full">
                    <h1 className="text-2xl font-semibold mx-3 my-5">Reservemos tu itinerario </h1>
                </div>
                <input
                    type="number"
                    value={usuario}
                    onChange={(e) => { setUsuario(e.target.value) }}
                    className="Itinerary rounded-md mx-5 p-2 w-1/2 outline-none"
                    placeholder="Ingrese su nit" />
                <input
                    type="number"
                    value={itinerario}
                    onChange={(e) => { setItinerario(e.target.value) }}
                    className="Itinerary rounded-md mx-5 p-2 w-1/2 outline-none"
                    placeholder="Ingrese el nit del itineraio" />
                <button className="Itinerary Button text-center rounded-md font-bold cursor-pointer w-1/2 p-2">Reservar</button>
            </form>
        </main>
    )
}
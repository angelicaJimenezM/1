import { Itinerario } from "../../../models/PaqueteTuristicos/itinerario/Itinerario.js"
import { ItinerarioRepository } from "../../../models/PaqueteTuristicos/itinerario/ItinerarioRepository.js";

const repository = new ItinerarioRepository();

export const createItinerary = async (req,res)=>{
    const {ID_paquetes, DESCRIPCION, CUPOS} = req.body;
    const CreateItinerario = new Itinerario(ID_paquetes, DESCRIPCION, CUPOS);
    try{
        const insert = await repository.insertItinerario(CreateItinerario);
       console.log(insert)
    }catch(e){
        console.error(e)
    }
}
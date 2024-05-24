import { Itinerario } from "../../../models/PaqueteTuristicos/itinerario/Itinerario.js";
import { ItinerarioRepository } from "../../../models/PaqueteTuristicos/itinerario/ItinerarioRepository.js";

const repository = new ItinerarioRepository();

export const createItinerary = async (req, res) => {
  const { ID_paquetes, DESCRIPCION, CUPOS } = req.body;
  const CreateItinerario = new Itinerario(ID_paquetes, DESCRIPCION, CUPOS);
  try {
    const insert = await repository.insertItinerario(CreateItinerario);
    console.log(insert);
  } catch (e) {
    console.error(e);
  }
};
export const ShowItinerary = async (req, res) => {
  try {
    const showPackage = await repository.showItinerario();
    res.json(showPackage);
  } catch (error) {
    console.error("Error en el controlador al obtener usuarios:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

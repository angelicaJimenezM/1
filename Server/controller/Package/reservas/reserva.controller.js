import { Reserva } from "../../../models/PaqueteTuristicos/Reservas/Reserva.js";
import { ReservaRepository } from "../../../models/PaqueteTuristicos/Reservas/ReservaRepository.js";

const repository = new ReservaRepository();
export const createItinerary = async (req, res) => {
  const { turista_id, itinerario_id } = req.body;
  const reserva = new Reserva(turista_id, itinerario_id);
  try {
    const insert = await repository.insertItinerario(reserva);
    console.log(insert);
  } catch (e) {
    console.error(e);
  }
};

export const GetData = async (req, res) => {
  try {
    const Data = await repository.showItinerario();
    res.json(Data);
  } catch (error) {
    console.error('Error en el controlador al obtener usuarios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

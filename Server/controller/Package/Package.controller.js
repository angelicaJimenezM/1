import { PaqueteTuristico } from "../../models/PaqueteTuristicos/PaqueteTuristico.js";
import { PaqueteTuristicoRepository } from "../../models/PaqueteTuristicos/PaqueteTuristicoRepository.js";

const paqueteturisticos = new PaqueteTuristicoRepository();
export const createPackage = async (req, res) => {
  const {
    nombre,
    destinos,
    fecha_salida,
    fecha_llegada,
    actividades,
    alojamiento,
    comidas,
  } = req.body;

  const packageT = new PaqueteTuristico(
    nombre,
    destinos,
    fecha_salida,
    fecha_llegada,
    actividades,
    alojamiento,
    comidas
  );

  try{
    const insertPackage = paqueteturisticos.insertPaqueteTuristico(packageT)
  }catch(e){
    console.error(e)
  }
  
};

export const showPackage = async (req, res) => {
  try {
    const showPackage = await paqueteturisticos.showPackage();
    res.json(showPackage);
  } catch (error) {
    console.error('Error en el controlador al obtener usuarios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}


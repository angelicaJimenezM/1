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
    console.log(insertPackage)
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
};

  export const getPaqueteTuristicoById = async (req, res) => {
    const { id } = req.params;
    try {
      const paquete = await paqueteturisticos.getPaqueteTuristicoById(id);
      if (paquete) {
        res.status(200).json({Data: paquete});
      } else {
        res.status(404).json({ message: "Package not found" });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  export const updatePackage = async (req, res) => {
    const { id } = req.params; // Obtener el ID del paquete de los parámetros de la solicitud
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
  
    try {
      const updateResult = await paqueteturisticos.updatePaqueteTuristico(id, packageT); // Pasar el ID del paquete al método de actualización
      res.status(200).json({ message: "Paquete actualizado exitosamente" });
    } catch (error) {
      console.error("Error actualizando paquete:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  };
  
  
  



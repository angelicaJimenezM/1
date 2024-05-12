import { pool } from "../../db.js";

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
  await pool.query(
    "INSERT INTO paqueteturisticos (nombre,destinos,fecha_salida,fecha_llegada,actividades,alojamiento,comidas) VALUES (?,?,?,?,?,?,?)",
    [
      nombre,
      destinos,
      fecha_salida,
      fecha_llegada,
      actividades,
      alojamiento,
      comidas,
    ]
  );
  res.json({
    Message: "Todo correcto",
  });
};

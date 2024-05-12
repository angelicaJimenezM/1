import { pool } from "../../../db.js";
export class ItinerarioRepository {
  async insertItinerario(Itinerario) {
    const sql =
      'INSERT INTO itinerarios(nombre, destinos, fecha_inicio, fecha_final,actividades, transporte, costo_total, duracion, estado,ID_paquetes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    try {
      const [result] = await pool.query(sql, Itinerario.toJSON());
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}

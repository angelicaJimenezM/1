import { pool } from "../../db.js";
export class PaqueteTuristicoRepository {
  async insertPaqueteTuristico(PaqueteTuristico) {
    const sql =
      'INSERT INTO paqueteTuristicos(nombre, destinos, fecha_salida, fecha_llegada, actividades, alojamiento, comidas, costo_total, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    try {
      const [result] = await pool.query(sql, PaqueteTuristico.toJSON());
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}

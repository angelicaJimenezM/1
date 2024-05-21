import { pool } from "../../db.js";
export class PaqueteTuristicoRepository {
  async insertPaqueteTuristico(PaqueteTuristico) {
    const sql =
      "INSERT INTO paqueteturisticos(nombre, destinos, fecha_salida, fecha_llegada, actividades, alojamiento, comidas) VALUES (?, ?, ?, ?, ?, ?, ?)";
    try {
      const [result] = await pool.query(sql, PaqueteTuristico.toJSON());
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }

  async showPackage() {
    const sql = "SELECT * FROM paqueteturisticos";
    try {
      const [rows] = await pool.query(sql);
      return rows;
    } catch (e) {
      console.error(e);
    }
  }
}

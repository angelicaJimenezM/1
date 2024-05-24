import { pool } from "../../../db.js";
export class ItinerarioRepository {
  async insertItinerario(Itinerario) {
    const sql =
      'INSERT INTO itinerarios(ID_paquetes, DESCRIPCION, CUPOS) VALUES (?, ?, ?)';
    try {
      const [result] = await pool.query(sql, Itinerario.toJSON());
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
  async showItinerario() {
    const sql = "SELECT * FROM itinerarios";
    try {
      const [rows] = await pool.query(sql);
      return rows;
    } catch (e) {
      console.error(e);
    }
  }
}

import { pool } from "../../../db.js";
export class ReservaRepository {
  async insertItinerario(Usuario) {
    const sql =
      'INSERT INTO `Turistas_Itinerarios`(turista_id, itinerario_id ) VALUES (?, ?)';
    try {
      const [result] = await pool.query(sql, Usuario.toJSON());
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }

  async showItinerario() {
    const sql = "SELECT * FROM Turistas_Itinerarios";
    try {
      const [rows] = await pool.query(sql);
      return rows;
    } catch (e) {
      console.error(e);
    }
  }
}

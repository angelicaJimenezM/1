import { pool } from "../../db.js";
export class GuideRepository {
  async insertContactanos(Contactanos) {
    const sql =
      'INSERT INTO contactenos(email, mensaje) VALUES (?, ?,)';
    try {
      const [result] = await pool.query(sql, Contactanos.toJSON());
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}

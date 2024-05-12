import { pool } from "../../../db.js";
export class GuideRepository {
  async insertGuide(Guide) {
    const sql =
      'INSERT INTO guia(nombre,apellido,n_telefono,idiomas,n_idiomas,edad,sexo) VALUES (?, ?, ?, ?, ?, ?, ?)';
    try {
      const [result] = await pool.query(sql, Guide.toJSON());
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}

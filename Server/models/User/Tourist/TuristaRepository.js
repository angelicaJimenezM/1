import { pool } from "../../../db.js";
export class TuristaRepository {
  async insertTurista(Turista) {
    const sql =
      'INSERT INTO turista(nombre, apellido, edad, sexo, interas, s_email, n_telefono, c_emergencia, n_idiomas, idiomas,email,passw,tipo_usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    try {
      const [result] = await pool.query(sql, Turista.toJSON());
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}

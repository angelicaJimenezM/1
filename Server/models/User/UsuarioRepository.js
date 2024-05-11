import { pool } from "../../db.js";
export class UsuarioRepository {
  async insertUsuario(Usuario) {
    const sql =
      'INSERT INTO guia(email,pasw) VALUES (?, ?)';
    try {
      const [result] = await pool.query(sql, Usuario.toJSON());
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}

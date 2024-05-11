import { pool } from "../../db.js";
export class ReservaRepository {
  async insertUsuario(Usuario) {
    const sql =
      'INSERT INTO usuarios(n_cliente, n_personas, nombre_paquete,nombre_guia, nit_itinerario, anticipo ) VALUES (?, ?, ?, ?, ?, ?)';
    try {
      const [result] = await pool.query(sql, Usuario.toJSON());
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}

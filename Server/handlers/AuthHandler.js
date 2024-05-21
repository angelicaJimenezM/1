import { pool } from "../db.js";

class AuthHandler {
  constructor(tipo_usuario) {
    this.tipo_usuario = tipo_usuario;
  }
  async authenticate(email, passw) {
    
    // Realizar la consulta a la tabla correspondiente
    const [result] = await pool.query(
      `SELECT * FROM ${this.tipo_usuario} WHERE email = ? AND passw = ?`,
      [email, passw]
    );
    
    // Devolver true si se encontraron resultados, de lo contrario false
    return result;
  }
}

export default AuthHandler;

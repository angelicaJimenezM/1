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

  async getPaqueteTuristicoById(id_paquete) {
    const sql = "SELECT * FROM paqueteturisticos WHERE nit = ?";
    try {
      const [rows] = await pool.query(sql, [id_paquete]);
      return rows[0];
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
  async updatePaqueteTuristico(id, paqueteTuristico) {
    const sql = "UPDATE paqueteturisticos SET nombre = ?, destinos = ?, fecha_salida = ?, fecha_llegada = ?, actividades = ?, alojamiento = ?, comidas = ? WHERE nit = ?";
    try {
      const values = paqueteTuristico.toJSON();
      // Agregar el ID del paquete al final del array de valores
      values.push(id);
      const [result] = await pool.query(sql, values);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
}

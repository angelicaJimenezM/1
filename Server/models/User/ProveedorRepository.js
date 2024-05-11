import { pool } from "../../db.js";
export class ProveedorRepository {
  async insertProveedor(Proveedor) {
    const sql =
      'INSERT INTO proveedor(nombre, nombre_empresa, tipo_servicio, tarifa, condiciones_pago, n_telefono, s_email) VALUES (?, ?, ?, ?, ?, ?, ?)';
    try {
      const [result] = await pool.query(sql, Proveedor.toJSON());
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}

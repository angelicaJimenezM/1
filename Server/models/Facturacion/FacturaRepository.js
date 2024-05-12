import { pool } from "../../db.js";
export class FacturaRepository {
  async inserFactura(Factura) {
    const sql =
      'INSERT INTO factura( n_factura, nombre, cliente, fecha_emision, subtotal, descuentos, total ) VALUES (?, ?, ?, ?, ?, ?, ?)';
    try {
      const [result] = await pool.query(sql, Factura.toJSON());
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}

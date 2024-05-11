import { pool } from "../../db.js";
export class ChatRepository {
  async insertGuide(Chat) {
    const sql =
      'INSERT INTO chat( nombre, mensaje) VALUES (?, ?,)';
    try {
      const [result] = await pool.query(sql, Chat.toJSON());
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}

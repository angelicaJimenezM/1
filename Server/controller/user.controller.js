import { pool } from "../db.js";

export const createUser = async (req, res) => {
  const { email, passw, tipo_usuario } = req.body;
  await pool.query("INSERT INTO usuarios(email, passw, tipo_usuario) VALUES (?,?,?)", [
    email,
    passw,
    tipo_usuario
  ]);
  res.json({"URL": "Registro exitoso"})

};

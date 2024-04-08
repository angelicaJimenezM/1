import { pool } from "../db.js";

export const getUser = (req, res) => {
  res.send("Obteniendo usuarios");
};

export const createUser = (req, res) => {
  const { email, passw } = req.body;
  pool.query("INSERT INTO usuarios(email, passw) VALUES (?,?)", [
    email,
    passw,
  ]);
  res.send("Creando usuarios");
};

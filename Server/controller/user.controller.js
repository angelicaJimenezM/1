import { pool } from "../db.js";

export const createUser = async (req, res) => {
  const { email, passw } = req.body;
  await pool.query("INSERT INTO usuarios(email, passw) VALUES (?,?)", [
    email,
    passw,
  ]);
  res.json({"URL": "/Registrate/typeUser"})

};

import { pool } from "../db.js";

export const createGuide = async (req, res) => {
  const {
    nombre,
    apellido,
    n_telefono,
    idiomas,
    n_idiomas,
    edad,
    sexo,
    s_email,
  } = req.body;
  await pool.query(
    "INSERT INTO guia(nombre,apellido,n_telefono,idiomas,n_idiomas,edad,sexo,s_email) VALUES (?,?,?,?,?,?,?,?)",
    [nombre, apellido, n_telefono, idiomas, n_idiomas, edad, sexo, s_email]
  );
  res.send("Usuario creado");
};

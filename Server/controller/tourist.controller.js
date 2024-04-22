import { pool } from "../db.js";
export const createTourist = async (req, res) => {
  const {
    nombre,
    apellido,
    edad,
    sexo,
    interas,
    s_email,
    n_telefono,
    c_emergencia,
    n_idiomas,
    idiomas,
  } = req.body;
  await pool.query(
    "INSERT INTO turista(nombre,apellido,edad,sexo,interas,s_email,n_telefono,c_emergencia,n_idiomas,idiomas) VALUES(?,?,?,?,?,?,?,?,?,?)",
    [
      nombre,
      apellido,
      edad,
      sexo,
      interas,
      s_email,
      n_telefono,
      c_emergencia,
      n_idiomas,
      idiomas,
    ]
  );
  res.send("Creando Turista");
};

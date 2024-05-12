import { pool } from "../../db.js";
export const login = async (req, res) => {
  const { email, passw, tipo_usuario } = req.body;
  const data = await pool.query(
    "SELECT * FROM usuarios WHERE email = ? AND passw = ? AND tipo_usuario = ?",
    [email, passw, tipo_usuario]
  );
  data[0].length > 0
    ? res.json({ redirectUrl: "/Msg" })
    : res.json({
        Message: "No encontrado",
      });
};

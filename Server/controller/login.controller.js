import { pool } from "../db.js";
export const login = async (req, res) => {
  const { email, passw } = req.body;
  const data = await pool.query(
    "SELECT * FROM usuarios WHERE email = ? AND passw = ?",
    [email, passw]
  );
  data[0].length > 0 ? res.json({ "redirectUrl": "/Msg" }) : res.json({
    "Message":"No encontrado"
  }) 
};

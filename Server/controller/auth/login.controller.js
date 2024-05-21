import AuthHandler from "../../handlers/AuthHandler.js";

   export const login = async (req, res) => {
    const { email, passw, tipo_usuario } = req.body;
    try {
      const authHandler = new AuthHandler(tipo_usuario);
      const result = await authHandler.authenticate(email, passw);

      result.length > 0
        ? res.json({ redirectUrl: "/Msg", content: result })
        : res.json({ Message: "No encontrado" });
      return result;
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  }



import { TuristaRepository } from "../../models/User/Tourist/TuristaRepository.js";
import { Turista } from "../../models/User/Tourist/Turista.js";
import { TuristaHelper } from "../../models/User/Tourist/TuristaHelper.js";

const turistaRepositosy = new TuristaRepository();
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
    email,
    passw,
    tipo_usuario,
  } = req.body;

  const tourist = new Turista(
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
    email,
    passw,
    tipo_usuario
  );
  console.log(tourist)
  // Validamos los datos
  const dataValided = TuristaHelper.validarTurista(tourist);

  if (dataValided.length === 0) {
    try {
      // Registrar al turista
      const insertTourist = await turistaRepositosy.insertTurista(tourist);
      return res
        .status(200)
        .json({ Message: `Su cuenta se ha creado correctamente` });
    } catch (e) {
      console.error("Error al registrar turista: ", e);
      return res
        .status(500)
        .json({ Message: "Error interno del servidor al registrar la cuenta" });
    }
  } else {
    return res.status(400).json({Message:`Lamentablemente no se pudo registrar su cuenta. Por favor, verifique los datos`,
                                errores: dataValided,
      });
  }
};

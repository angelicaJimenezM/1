import { GuideRepository } from "../models/User/GuideRepository.js";
import { Guide } from "../models/User/Guide.js";
import { GuideHelper } from "../models/User/GuideHelper.js";

const guideRepository = new GuideRepository();
export const createGuide = async (req, res) => {
  const { nombre, apellido, n_telefono, idiomas, n_idiomas, edad, sexo } =
    req.body;

  const guide = new Guide(
    nombre,
    apellido,
    n_telefono,
    idiomas,
    n_idiomas,
    edad,
    sexo
  );

  //Validar los datos
  const erros = GuideHelper.validarGuide(guide);
  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }
  //Registrar el guia en la base de datos
  try {
    const insertarGuide = await guideRepository.insertGuide(guide);
    console.log(insertarGuide);
  } catch (error) {
    console.error("Error al registrar guía:", error);
    // Maneja el error
  }
};

import { GuideRepository } from "../../models/User/Guide/GuideRepository.js";
import { Guide } from "../../models/User/Guide/Guide.js";

const guideRepository = new GuideRepository();
export const createGuide = async (req, res) => {
  const {nombre, apellido, n_telefono, idiomas, n_idiomas, edad, sexo, email, passw, tipo_usuario} = req.body;


  const guide = new Guide(nombre, apellido, n_telefono, idiomas, n_idiomas, edad, sexo, email, passw, tipo_usuario);

  //Registrar el guia en la base de datos
  try {
    const insertarGuide = await guideRepository.insertGuide(guide);
    console.log(insertarGuide);
  } catch (error) {
    console.error("Error al registrar guía:", error);
    // Maneja el error
  }
};

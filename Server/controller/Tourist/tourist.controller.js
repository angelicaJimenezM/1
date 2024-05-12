import { TuristaRepository } from "../../models/User/Tourist/TuristaRepository.js";
import { Turista } from "../../models/User/Tourist/Turista.js";

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
    idiomas
  );
  

  //Registrar al turista
  try{
    const insertTourist = await turistaRepositosy.insertTurista(tourist);
    console.log(insertTourist);
  }catch(e){
    console.error("Error al registrar turista: ",e)
  }
};

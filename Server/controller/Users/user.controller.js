import { Usuario } from "../../models/User/Usuario.js";
import { UsuarioHelper } from "../../models/User/UsuarioHelper.js";
import { UsuarioRepository } from "../../models/User/UsuarioRepository.js";

const usuariosRepository = new UsuarioRepository();
export const createUser = async (req, res) => {
  const { email, passw, tipo_usuario } = req.body;
  const users = new Usuario(email,passw,tipo_usuario);

  //validamos los datos
  const erros = UsuarioHelper.validarUsuario(users);

  erros.length > 0 ? res.status(400).json({erros}): res.status(200).json({tipo_usuario})

  //Registramos el usuarios en la base de datos
  try{
    const insertUsers =usuariosRepository.insertUsuario(users);
    console.log(insertUsers)
  }catch(e){
    console.error(e)
  }
};

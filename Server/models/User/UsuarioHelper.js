export class UsuarioHelper {
    static validarUsuario(Usuario) {
      const errors = [];
      if (
        !Usuario.email ||
        !Usuario.passw ||
        !Usuario.tipo_usuario
      ) {
        errors.push("Todos los campos son obligatorios");
      }
      return errors;
    }
  }
  
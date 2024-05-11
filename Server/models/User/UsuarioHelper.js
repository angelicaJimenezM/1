export class UsuarioHelper {
    static validarUsuario(Usuario) {
      const errors = [];
      if (
        !Usuario.email ||
        !Usuario.pawss 
      ) {
        errors.push("Todos los campos son obligatorios");
      }
      return errors;
    }
  }
  
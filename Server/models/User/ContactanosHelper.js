export class ContactanosHelper {
    static validarContactanos(Contactanos) {
      const errors = [];
      if (
        !Contactanos.email ||
        !Contactanos.mensaje 
      ) {
        errors.push("Todos los campos son obligatorios");
      }
      return errors;
    }
  }
  
export class ChatHelper {
    static validarChat(Chat) {
      const errors = [];
      if (
        !Chat.nombre ||
        !Chat.mensaje 
   
      ) {
        errors.push("Todos los campos son obligatorios");
      }
      return errors;
    }
  }
  
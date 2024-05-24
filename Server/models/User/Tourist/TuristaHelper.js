export class TuristaHelper {

  static validarTurista(Turista) {
    const errors = [];
    if (
      !Turista.nombre || typeof Turista.nombre !== 'string'
    ) {
      errors.push("El nombre es obligatorio y debe ser una cadena de texto");
    }
    return errors;
  }

}

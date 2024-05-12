export class TuristaHelper {
    static validarTurista(Turista) {
      const errors = [];
      if (
        !Turista.nombre ||
        !Turista.apellido ||
        !Turista.edad ||
        !Turista.sexo ||
        !Turista.interas||
        !Turista.s_email||
        !Turista.n_telefono ||
        !Turista.c_emergencia||
        !Turista.n_idiomas|| 
        !Turista.idiomas 
      ) {
        errors.push("Todos los campos son obligatorios");
      }
      return errors;
    }
  }
  
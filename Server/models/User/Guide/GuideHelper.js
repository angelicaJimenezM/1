export class GuideHelper {
  static validarGuide(guide) {
    let errors = [];

    if (!guide.email || typeof guide.email !== 'string') {
      errors.push("Correo inválido");
    }

    if (!guide.passw || typeof guide.passw !== 'string') {
      errors.push("Contraseña inválida");
    }

    if (!guide.nombre || typeof guide.nombre !== 'string') {
      errors.push("Nombre inválido");
    }

    if (!guide.apellido || typeof guide.apellido !== 'string') {
      errors.push("Apellido inválido");
    }

    if (!guide.n_telefono || typeof guide.n_telefono !== 'string') {
      errors.push("Número de teléfono inválido");
    }

    if (!Array.isArray(guide.idiomas) || guide.idiomas.length === 0) {
      errors.push("Idiomas inválidos");
    }

    if (!Number.isInteger(guide.n_idiomas) || guide.n_idiomas <= 0) {
      errors.push("Número de idiomas inválido");
    }

    if (!Number.isInteger(guide.edad) || guide.edad <= 0) {
      errors.push("Edad inválida");
    }

    if (!guide.sexo || typeof guide.sexo !== 'string') {
      errors.push("Sexo inválido");
    }

    return errors;
  }
}

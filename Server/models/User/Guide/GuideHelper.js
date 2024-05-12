export class GuideHelper {
  static validarGuide(Guide) {
    const errors = [];
    if (
      !Guide.nombre ||
      !Guide.apellido ||
      !Guide.n_telefono ||
      !Guide.idiomas ||
      !Guide.n_idiomas ||
      !Guide.edad ||
      !Guide.sexo
    ) {
      errors.push("Todos los campos son obligatorios");
    }
    return errors;
  }
}

export class PaqueteTuristicoHelper {
    static validarPaqueteTuristico(PaqueteTuristico) {
      const errors = [];
      if (
        !PaqueteTuristico.nombre ||
        !PaqueteTuristico.destinos ||
        !PaqueteTuristico.fecha_salida ||
        !PaqueteTuristico.fecha_llegada ||
        !PaqueteTuristico.actividad||
        !PaqueteTuristico.alojamiento ||
        !PaqueteTuristico.comidas ||
        !PaqueteTuristico.costo_total ||
        !PaqueteTuristico.estado
      ) {
        errors.push("Todos los campos son obligatorios");
      }
      return errors;
    }
  }
  
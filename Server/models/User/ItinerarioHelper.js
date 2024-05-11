export class ItinerarioHelper {
    static validarItinerario(Itinerario) {
      const errors = [];
      if (
        !Itinerario.nombre ||
        !Itinerario.destinos ||
        !Itinerario.fecha_inicio ||
        !Itinerario.fecha_final ||
        !Itinerario.actividades ||
        !Itinerario.transporte ||
        !Itinerario.costo_total ||
        !Itinerario.duracion ||
        !Itinerario.estado ||
        !Itinerario.ID_paquetes
      ) {
        errors.push("Todos los campos son obligatorios");
      }
      return errors;
    }
  }
  
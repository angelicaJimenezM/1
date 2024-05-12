export class ReservaHelper {
    static validarReserva(Reserva) {
      const errors = [];
      if (
        !Reserva.n_cliente ||
        !Reserva.n_personas ||
        !Reserva.nombre_paquete ||
        !Reserva.nombre_guia ||
        !Reserva.nit_itinerario||
        !Reserva.anticipo
      ) {
        errors.push("Todos los campos son obligatorios");
      }
      return errors;
    }
  }
  
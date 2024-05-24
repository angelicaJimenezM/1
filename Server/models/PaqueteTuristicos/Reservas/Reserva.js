export class Reserva {
  constructor(turista_id, itinerario_id) {
    this.turista_id = turista_id;
    this.itinerario_id = itinerario_id;
  }
  toJSON() {
    return [this.turista_id, this.itinerario_id];
  }
}

export class Itinerario {
  constructor(ID_paquetes, DESCRIPCION, CUPOS) {
    this.ID_paquetes = ID_paquetes;
    this.descripcion = DESCRIPCION;
    this.cupos = CUPOS;
  }
  toJSON() {
    return [
        this.ID_paquetes,
        this.descripcion,
        this.cupos 
    ];
  }
}

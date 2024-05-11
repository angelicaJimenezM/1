export class PaqueteTuristico{
    constructor(nombre, destinos, fecha_salida, fecha_llegada, actividades,  alojamiento, comidas, costo_total, estado
){
    this.nombre = nombre;
    this.destinos = destinos;
    this.fecha_salida = fecha_salida;
    this.fecha_llegada = fecha_llegada;
    this.actividades = actividades;
    this.alojamiento = alojamiento;
    this.comidas = comidas;
    this.costo_total = costo_total;
    this.estado = estado;
    }
    toJSON(){
        return[
            this.nombre,
            this.destinos,
            this.fecha_salida,
            this.fecha_llegada,
            this.actividades,
            this.alojamiento,
            this.comidas,
            this.costo_total,
            this.estado
        ];
    }
}
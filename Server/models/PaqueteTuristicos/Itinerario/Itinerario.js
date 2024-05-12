export class Itinerario{
    constructor(nombre, destinos, fecha_inicio, fecha_final, actividades, transporte, costo_total, duracion, estado, ID_paquetes
){
        this.nombre = nombre;
        this.destinos = destinos;
        this.fecha_inicio = fecha_inicio;
        this.fecha_final = fecha_final;
        this.actividades = actividades;
        this.transporte = transporte;
        this.costo_total = costo_total
        this.duracion = duracion;
        this.estado = estado;
        this.ID_paquetes = ID_paquetes;
    }
    toJSON(){
        return[
            this.nombre,
            this.destinos,
            this.fecha_inicio,
            this.fecha_final,
            this.actividades,
            this.transporte,
            this.costo_total,
            this.duracion,
            this.estado,
            this.ID_paquetes
        ];
    }
}
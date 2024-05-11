export class Reserva{
    constructor(n_cliente, n_personas, nombre_paquete,
                nombre_guia, nit_itinerario, anticipo 
){
        this.n_cliente = n_cliente;
        this.n_personas = n_personas;
        this.nombre_paquete = nombre_paquete;
        this.nombre_guia = nombre_guia;
        this.nit_itinerario = nit_itinerario;
        this.anticipo = anticipo;
    }
    toJSON(){
        return[
            this.n_cliente,
            this.n_personas,
            this.nombre_paquete,
            this.nombre_guia,
            this.nit_itinerario,
            this.anticipo
        ];
    }
}
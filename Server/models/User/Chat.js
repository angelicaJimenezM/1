export class Chat{
    constructor( nombre, mensaje){
        this.nombre = nombre;
        this.mensaje = mensaje
    }
    toJSON(){
        return[
            this.nombre,
            this.mensaje
        ];
    }
}
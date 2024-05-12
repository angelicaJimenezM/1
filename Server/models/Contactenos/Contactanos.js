export class Contactanos{
    constructor( email, mensaje
){
    this.email = email;
    this.mensaje = mensaje;
}
toJSON(){
    return[
        this.email,
        this.mensaje
    ];
}
}
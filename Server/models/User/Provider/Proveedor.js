export class Proveedor{
    constructor(nombre, nombre_empresa, tipo_servicio, tarifa, 
        condiciones_pago, n_telefono, s_email
){
    this.nombre = nombre;
    this.nombre_empresa = nombre_empresa;
    this.tipo_servicio = tipo_servicio;
    this.tarifa = tarifa;
    this.condiciones_pago = condiciones_pago;
    this.n_telefono = n_telefono;
    this.s_email = s_email;
}
toJSON(){
    return[
        this.nombre,
        this.nombre_empresa,
        this.tipo_servicio,
        this.tarifa,
        this.condiciones_pago,
        this.n_telefono,
        this.s_email
    ];
}

}
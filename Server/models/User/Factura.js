export class Factura{
    constructor( n_factura, nombre, cliente, fecha_emision, subtotal, descuentos, total
){
    this.n_factura = n_factura;
    this.nombre = nombre;
    this.cliente = cliente;
    this.fecha_emision = fecha_emision;
    this.subtotal = subtotal;
    this.descuentos = descuentos;
    this.total = total;
}
    toJSON(){
        return[
            this.n_factura,
            this.nombre,
            this.cliente,
            this.fecha_emision,
            this.subtotal,
            this.descuentos,
            this.total
        ];
    }
}
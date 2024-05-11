export class FacturaHelper {
    static validarFactura(Factura) {
      const errors = [];
      if (
        !Factura.n_factura ||
        !Factura.nombre ||
        !Factura.cliente ||
        !Factura.fecha_emision ||
        !Factura.subtotal ||
        !Factura.descuento ||
        !Factura.total
      ) {
        errors.push("Todos los campos son obligatorios");
      }
      return errors;
    }
  }
  
export class ProveedorHelper {
    static validarProveedor(Proveedor) {
      const errors = [];
      if (
        !Proveedor.nombre ||
        !Proveedor.nombre_empresa ||
        !Proveedor.tipo_servicio ||
        !Proveedor.tarifa ||
        !Proveedor.condiciones_pago ||
        !Proveedor.n_telefono ||
        !Proveedor.s_email
      ) {
        errors.push("Todos los campos son obligatorios");
      }
      return errors;
    }
  }
  
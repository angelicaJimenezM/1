import { ProveedorRepository } from "../../models/User/Provider/ProveedorRepository.js";
import { Proveedor } from "../../models/User/Provider/Proveedor.js";

const providerRepository = new ProveedorRepository();

export const createProvider = async (req, res) => {
  const {
    nombre,
    nombre_empresa,
    tipo_servicio,
    tarifa,
    condiciones_pago,
    n_telefono,
    s_email,
  } = req.body;

  const provider = new Proveedor(
    nombre,
    nombre_empresa,
    tipo_servicio,
    tarifa,
    condiciones_pago,
    n_telefono,
    s_email
  );

  try {
    const insertProvider = await providerRepository.insertProveedor(provider);
    console.log(insertProvider);
  } catch (e) {
    console.error(e);
  }
};

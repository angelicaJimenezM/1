import { Usuario } from "../Usuario.js";

export class Guide extends Usuario {

  constructor(nombre, apellido, n_telefono, idiomas, n_idiomas, edad, sexo, email, passw, tipo_usuario) {
    super(email, passw, tipo_usuario); 
    this.nombre = nombre;
    this.apellido = apellido;
    this.n_telefono = n_telefono;
    this.idiomas = idiomas;
    this.n_idiomas = n_idiomas;
    this.edad = edad;
    this.sexo = sexo;
  }
  
  toJSON() {
    return [
      this.nombre,
      this.apellido,
      this.n_telefono,
      this.idiomas,
      this.n_idiomas,
      this.edad,
      this.sexo,
      ...super.toJSON(), // Incluye email, passw y tipo_usuario
    ];
  }
  
}

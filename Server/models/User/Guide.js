export class Guide {
  constructor(nombre, apellido, n_telefono, idiomas, n_idiomas, edad, sexo) {
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
      this.sexo
    ];
  }
  
}

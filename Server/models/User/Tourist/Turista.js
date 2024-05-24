export class Turista{
    constructor(nombre, apellido, edad, sexo, interas, s_email, n_telefono, 
        c_emergencia, n_idioma, idiomas, email, passw, tipo_usuario
){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
    this.interas = interas;
    this.s_email = s_email;
    this.n_telefono = n_telefono;
    this.c_emergencia = c_emergencia;
    this.n_idioma = n_idioma;
    this.idiomas = idiomas;
    this.email = email;
    this.passw = passw;
    this.tipo_usuario = tipo_usuario;
}
    toJSON(){
        return[
            this.nombre,
            this.apellido,
            this.edad,
            this.sexo,
            this.interas,
            this.s_email,
            this.n_telefono,
            this.c_emergencia,
            this.n_idioma,
            this.idiomas,
            this.email,
            this.passw,
            this.tipo_usuario
        ];
    }
}
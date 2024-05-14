export class Usuario{
    constructor(email,passw,tipo_usuario){
        this.email = email;
        this.passw = passw;
        this.tipo_usuario = tipo_usuario
    }
    toJSON(){
        return[
            this.email,
            this.passw,
            this.tipo_usuario
        ];
    }
}

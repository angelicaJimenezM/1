export class Usuario{
    constructor(email,pasw){
        this.email = email;
        this.pasw = pasw;
    }
    toJSON(){
        return[
            this.email,
            this.pasw
        ];
    }
}

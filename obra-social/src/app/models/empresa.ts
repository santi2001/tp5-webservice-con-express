export class Empresa {
    _id : string;
    nombre : string;
    email : string;

    constructor(_id ?:string,nombre ?: string, email ?: string)
    {
        this._id=_id;
        this.nombre=nombre;
        this.email= email;
    }
}


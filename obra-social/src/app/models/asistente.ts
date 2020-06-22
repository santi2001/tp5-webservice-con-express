export class Asistente {
    _id: string;
    usuario : string;
    nombreDeOrganizacion : string;
    solicitudConstancia : boolean=false;
    
    Asistente(_id? : string,usuario? : string, nombreDeOrganizacion? : string, solicitudConstancia? : boolean )
    {
        this._id=_id;
        this.usuario= usuario;
        this.nombreDeOrganizacion= nombreDeOrganizacion;
        this.solicitudConstancia=solicitudConstancia;
    }
}

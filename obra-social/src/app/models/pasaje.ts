import { Adelanto } from './adelanto';

export class Pasaje {
    _id : string;
    dni : number;
    categoria: string;
    precio : number;
    fecha : Date;
    adelantos : Array<Adelanto> = new Array<Adelanto>();
    habilitar : boolean=true;
    constructor(_id? : string,dni?: number, categoria?: string, precio?: number,fecha?: Date)
    {
        this.dni=dni;
        this.categoria=categoria;
        this.precio=precio;
        this.fecha=fecha;
    }
}

import { Empresa } from './empresa';

export class Mensaje {
    para : number;
    desde : number;
    texto : string;
    fecha : Date;
    empresa : Empresa;
    Mensaje(para? : number, desde? : number,texto? : string, fecha? : Date , empresa ? : Empresa)
    {
        this.para = para;
        this.desde = desde;
        this.texto = texto;
        this.fecha = fecha;
        this.empresa = empresa;
    }
}

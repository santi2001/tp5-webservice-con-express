import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mensaje } from '../models/mensaje';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url : string ="http://localhost:3000/api/punto2/";
  constructor(private _http : HttpClient) {

   }
   public agregarMensaje(mensaje : Mensaje): Observable<any>
   {
    const httpOptions = {
      headers :new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body= JSON.stringify(mensaje);
    return this._http.post(this.url,body,httpOptions);
    }
    public obtenerMesaje (): Observable<any>
    {
      const httpOptions = {
        headers :new HttpHeaders({
        })
      };
      return this._http.get(this.url,httpOptions);
    }
    public obtenerEmpresas (): Observable<any>
    {
      const httpOptions = {
        headers :new HttpHeaders({
        })
      };
      return this._http.get("http://localhost:3000/api/empresa/",httpOptions);
    }
    public agregarEmpresa (empresa : Empresa): Observable<any>
    {
      const httpOptions = {
        headers :new HttpHeaders({
          "Content-Type": "application/json"
        })
      };
      var body= JSON.stringify(empresa);
      return this._http.post("http://localhost:3000/api/empresa/",body,httpOptions);
    }
}

import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  listaventa: Array<Pasaje>;
  url : string = "http://localhost:3000/api/punto3/";
  constructor(private _http : HttpClient) {
    this.listaventa=new Array<Pasaje>();
  
   }
   obtenerlistaventa(): Observable<any>
   {
    const httpOptions =
    { 
      headers :   new HttpHeaders({

      })
    };
     return this._http.get(this.url,httpOptions)
   }
  agregarVenta(venta: Pasaje): Observable<any>
  {
    const httpOptions =
    { 
      headers :   new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body= JSON.stringify(venta);
    return this._http.post(this.url,body,httpOptions);
  }
   agregarAdelanto(pasaje : Pasaje):Observable <any>
   {
    const httpOptions =
    { 
      headers :   new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body= JSON.stringify(pasaje);
return this._http.put(this.url+pasaje._id,body,httpOptions);
   }
   modificarPasaje(pasaje: Pasaje):Observable<any>
   {
    const httpOptions =
    { 
      headers :   new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body= JSON.stringify(pasaje);
return this._http.put(this.url+pasaje._id,body,httpOptions);
   }
   public eliminarPasaje(_id: String): Observable<any>
    {
       const httpOptions= {
          headers : new HttpHeaders({ })
    };
      return this._http.delete(this.url+_id,httpOptions);
    }
}

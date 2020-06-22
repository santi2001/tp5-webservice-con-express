import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asistente } from '../models/asistente';

@Injectable({
  providedIn: 'root'
})
export class Punto2Service {

   url:string= "http://localhost:3000/api/punto1/";
  constructor( private _http : HttpClient) { 

  }
  public obtenerlistado(): Observable<any>
  {
    const httpOptions =
    { 
      headers :   new HttpHeaders({

      })
    };
    return this._http.get(this.url,httpOptions);
  }

  public agregarAsistente(asistente: Asistente): Observable<any>
  {
    const httpOptions = {
      headers :new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body= JSON.stringify(asistente);

    return this._http.post(this.url,body,httpOptions);
    }
  
public eliminarAsistente(_id: String): Observable<any>
{
  const httpOptions= {
   headers : new HttpHeaders({

   })
  };
return this._http.delete(this.url+_id,httpOptions);
}
public modificarAsistente(asistente : Asistente)
{
  const httpOptions = {
    headers :new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  var body= JSON.stringify(asistente);

  return this._http.put(this.url+asistente._id,body,httpOptions);
  }
}
  

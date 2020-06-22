import { Injectable } from '@angular/core';
import { Palabra } from '../models/palabra';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Punto4Service {

  lista_objetos: Array<Palabra>;
  url : string ="http://localhost:3000/api/punto4/"
  constructor(private _http : HttpClient) {
    this.lista_objetos=new Array<Palabra>();
    this.lista_objetos.push(new Palabra("chipmunk","ardilla","ardilla.jpeg"));
    this.lista_objetos.push(new Palabra("elephant","elefante","elefante.jpg"));
    this.lista_objetos.push(new Palabra("tiger","tigre","tigre.jpg"));
    this.lista_objetos.push(new Palabra("bear","oso","oso.jpg"));
    this.lista_objetos.push(new Palabra("zebra","cebra","cebra.jpg"));
    this.lista_objetos.push(new Palabra("mouse","raton","raton.jpg"));
    this.lista_objetos.push(new Palabra("dog","perro","perro.jpg"));
    this.lista_objetos.push(new Palabra("panda","panda","panda.jpg"));
    this.lista_objetos.push(new Palabra("panther","pantera","pantera.jpg"));
    this.lista_objetos.push(new Palabra("wolf","lobo","lobito.jpg"));
  }
   public obtenerlista(): Observable<any>
   {
    const httpOptions =
    { 
      headers :   new HttpHeaders({

      })
    };
return this._http.get(this.url,httpOptions);
   }
   public agregarpalabra(palabra: Palabra): Observable<any>
   {
     const httpOptions = {
       headers :new HttpHeaders({
         "Content-Type": "application/json"
       })
     };
     var body= JSON.stringify(palabra);
 
     return this._http.post(this.url,body,httpOptions);
     }
   public completarBackend()
   {
     for (let i in this.lista_objetos)
     {
      this.agregarpalabra(this.lista_objetos[i]).subscribe(
        (result)=>
        {

        }
      )
     }
   }
}

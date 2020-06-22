import { Component, OnInit } from '@angular/core';
import { Palabra } from 'src/app/models/palabra';
import { Punto4Service } from 'src/app/services/punto4.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { $ } from 'protractor';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
stringimage: string;
vidas: number=6;
puntuacion: number=0;
tamanio_palabra: number;
listapalabras : Array<Palabra>;
objeto: Palabra; 
r : number=0;
objeto2: Palabra; 
palabraing: Array<string>;
  constructor(private palabraservicio: Punto4Service) { 
    this.objeto=new Palabra();
    this.palabraing=new  Array<string>();
    this.obtenerlista();
 }

  ngOnInit(): void {
   
  }
  obtenerlista()
  {
    this.listapalabras=new Array<Palabra>();
    this.palabraservicio.obtenerlista().subscribe(
      (result)=>
      {
        if(result.length==0)
          {  
             this.palabraservicio.completarBackend();// coloque este metodo para cargar el backend por primera vez... 
          }
          for(let i in result)
            {
              this.objeto2=new Palabra();
              Object.assign(this.objeto2,result[i]);
              this.listapalabras.push(this.objeto2);
            }
            this.objeto=this.listapalabras[this.r];
            this.tamanio_palabra=this.objeto.palabra_ingles.length;
            this.palabraing=new Array<string>(this.tamanio_palabra);
       
      }
    );
  }
  controlar(num: number)
  { 
          if(this.palabraing.join("").toLowerCase()==this.objeto.palabra_ingles)//cambia de imagen cuando escribe la palabra correctamente
          {
            this.cambiarPalabra();
          }
          if(this.palabraing[num]!=null)
          {

            if( this.palabraing[num].toLowerCase()==this.objeto.palabra_ingles[num])
            {
              this.puntuacion++;
            
            }
            else
            { //evita que se cuente como error cuando c borra y queda vacio el campo
              if(this.palabraing[num]!="")
              {
                this.vidas--;  
                this.mostrarMensaje();
              }
              
            }
          }
  }
  cambiarPalabra()
  {
    
    this.r++;
    if(this.r==this.listapalabras.length)
    {
      this.mostrarMensaje();
      this.r=0;

    }
    this.objeto=this.listapalabras[this.r];
    this.tamanio_palabra=this.objeto.palabra_ingles.length;
    this.palabraing=new Array<string>(this.tamanio_palabra);
    
  }
  mostrarMensaje()
  {
    if(this.vidas==0 )
       {
        this.vidas=0;
        window.alert("su puntuacion es: "+this.puntuacion + " Fin del juego :(" );
        this.r=0;
        this.vidas=6; this.objeto=this.listapalabras[this.r];
        this.tamanio_palabra=this.objeto.palabra_ingles.length;
        this.palabraing=new Array<string>(this.tamanio_palabra);
        
       }
       else{
         if( this.r==10)
         {
          window.alert("su puntuacion es: "+this.puntuacion+ "  el juego finalizo..." );
          this.puntuacion=0;
          
         }
       }
  }
}
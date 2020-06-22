import { Component, OnInit } from '@angular/core';
import { Asistente } from 'src/app/models/asistente';
import { Punto2Service } from 'src/app/services/punto2.service';
import { Empresa } from 'src/app/models/empresa';
import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  asistencia : Asistente;
  asistencia2 : Asistente;
  listaAsistencia : Array<Asistente>;
  asistenteselect : Asistente;
  pass : number;
  constructor(private punto2service : Punto2Service,private toas : ToastrService) {
    this.asistencia=new Asistente();
    this.asistencia2=new Asistente();
    this.listaAsistencia= new Array<Asistente>();
    this. asistenteselect = new Asistente();
    this.obtenerinformes();
   }

  ngOnInit(): void {
  }
  enviarinforme()
  {
    this.punto2service.agregarAsistente(this.asistencia).subscribe(
      (result)=>{
        this.toas.success("Ha tenido exito", "Se agrego el asistente de forma correcta");
        this.obtenerinformes();
        this.asistencia=new Asistente();
      },
      (error)=>{}
    )
  }
  obtenerinformes()
  {
    this.punto2service.obtenerlistado().subscribe(
      (result)=>{
      
        this.listaAsistencia= new Array<Asistente>();
        for(let i in result)
        {
          Object.assign(this.asistencia2,result[i]);
          this.listaAsistencia.push(this.asistencia2);
          this.asistencia2=new Asistente();
        }
       
      },
      (error)=>{
        alert("no se pudo realizar la peticion");
      }
    )
  }
  public eliminar(Asi: Asistente)
  {
    console.log(Asi._id);
    this.punto2service.eliminarAsistente(Asi._id).subscribe(
     (result)=> {
       this.obtenerinformes();
       this.toas.info("informacion", "Se elimino el asistente");
      },
      (error)=>{
        this.toas.error("error", "Por favor vuelva a intentarlo");
      }
    )
  }
  public seleccionarAsistente(item : Asistente)
  {
    Object.assign(this.asistenteselect,item);
    var nodo = document.getElementById("radio");
    var a = document.createAttribute("checked");
    var nodo1 = document.getElementById("radio1");
    var b = document.createAttribute("checked");
    if(this.asistenteselect.solicitudConstancia==true)
    {
        if(nodo1.getAttributeNode("checked")!=null)
          {
             nodo1.removeAttributeNode(nodo1.getAttributeNode("checked"));
          }
        nodo.setAttributeNode(a);
    }
    else{
          if(nodo.getAttributeNode("checked")!=null)
          {
              nodo.removeAttributeNode(nodo.getAttributeNode("checked"));
          }
          nodo1.setAttributeNode(b);


        }

  }
  public limpiarmodal()
  {
    this.asistenteselect=new Asistente();
  }
  public cambiarestado(a : number)
  {
    if(a==1)
    {
      this.asistenteselect.solicitudConstancia=true;
    }
    else{
      this.asistenteselect.solicitudConstancia=false;
    }
  
    console.log(this.asistenteselect.solicitudConstancia);
  }
  public cambiarestados(a : boolean)
  {
    
      this.asistencia.solicitudConstancia=a;
      console.log(this.asistencia.solicitudConstancia);
      }
  modificarAsistenteconfirmacion()
  {

      this.punto2service.modificarAsistente(this.asistenteselect).subscribe(
        (result)=>
        {   this.toas.info("informacion", "el asistente"+ this.asistenteselect.usuario+ " fue modificado" );
          this.obtenerinformes();

          
        }
      )
  }

}

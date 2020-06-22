import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/models/mensaje';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  title : 'toastr-video';
  mensaje : Mensaje;
  mensajeg: Mensaje;
  tamaximo  : number=30;
  tamaniotexto: number;
  empresa : Empresa;
  mensajes : Array<Mensaje>;
  empresas: Array<Empresa>;
  constructor(private mensajeservice : EmpresaService, private toastr : ToastrService) { 
    this.mensaje = new Mensaje();
    this.mensajeg = new Mensaje();
    this.mensajes = new Array<Mensaje>();
    this.empresa= new Empresa();
    this.empresas=new  Array<Empresa>();
    this.obtenermensajes();
    this.obtenerEmpresas();
   // this.agregarEmpresa();
  }

  ngOnInit(): void {
  }
  public cambiarTamanioTexto()
  {
    this.tamaniotexto= this.mensaje.texto.length;
    //console.log(this.tamaniotexto);
  }
  public enviarMensaje()
  {
    this.mensaje.fecha= new Date();
    for(let i in this.empresas)
    {
      if(this.empresa.nombre==this.empresas[i].nombre)
      {
      Object.assign(this.empresa,this.empresas[i]);
      console.log(this.empresa);
      }
    }
    this.mensaje.empresa=this.empresa;
    this.mensajeservice.agregarMensaje(this.mensaje).subscribe(
      (result)=>{
        this.obtenermensajes();
        this.empresa=new Empresa();
        this.mensaje=new Mensaje();
        this.toastr.success("Ha tenido exito", " Exito!");
      },
      (error)=>{
        this.toastr.error("hubo un error", " vuelva a intentarlo");
      }
    )

  }
  public obtenerEmpresas()
  {
    var empresaa : Empresa= new Empresa();
    this.mensajeservice.obtenerEmpresas().subscribe(
      (result)=>{
        for(let i in result)
        {
          empresaa=new Empresa();
          Object.assign(empresaa,result[i]);
          this.empresas.push(empresaa);
        }
        console.log(this.empresas);
      }
    )
  }
  public obtenermensajes()
  {
    this.mensajes = new Array<Mensaje>();
    this.mensajeservice.obtenerMesaje().subscribe(
      (result)=>{
        for(let mensaje2 in result)
        {
          this.mensajeg=new Mensaje();
          Object.assign(this.mensajeg,result[mensaje2]);
          this.mensajes.push(this.mensajeg);
        }
        console.log(result);
      }
    )
  }
  agregarEmpresa()
  {
  this.empresa.email="santigo";
  this.empresa.nombre="noc";
    this.mensajeservice.agregarEmpresa(this.empresa).subscribe(
      (result)=>{
        this.toastr.success("Ha tenido exito", " Empresa Agregada Correctamente");
      }
    )
  }
}

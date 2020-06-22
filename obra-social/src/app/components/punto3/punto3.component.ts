import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { VentaService } from 'src/app/services/venta.service';
import { Adelanto } from 'src/app/models/adelanto';
import { ToastrService} from 'ngx-toastr';
import { error } from 'console';
@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  pasaje: Pasaje;
  listapasajes: Array<Pasaje>;
  precio_descuento:number;
  precio_actual: number;
  mostrar :boolean;
  pasajeselect: Pasaje=new Pasaje();
  adelantonew: Adelanto;
  band=false;
  faltadeinfo=false;
  constructor(private pasajeservice: VentaService , private toaster : ToastrService) {
    this.listapasajes= new Array<Pasaje>();
    this.pasaje=new Pasaje();
    this.adelantonew =new Adelanto();
    this.pasajeselect= new Pasaje();
    this.obtenerlista();
  }
  public  agregarlista()
   {   this.pasaje.fecha=new Date();
     this.pasajeservice.agregarVenta(this.pasaje).subscribe(
       (result)=>
       {
        this.toaster.success("Ha tenido exito", "Se agrego la venta de forma correcta");
         this.obtenerlista();
       },
       (error)=>{
        this.toaster.error("Error inesperado", "Vuelva a intentarlo");
       }
     );
    this.pasaje=new Pasaje();
    this.mostrar=false;
   }
   obtenerlista()
   {
     var pasaje2 : Pasaje = new Pasaje();
     this.listapasajes= new Array<Pasaje>();
     var j: number=0;
     this.pasajeservice.obtenerlistaventa().subscribe(
       (result)=>{
         for(let i in result)
         {
           pasaje2 = new  Pasaje();
          Object.assign(pasaje2,result[i]);
          j=0;
          for(let i in pasaje2.adelantos)
          {
           j= j + pasaje2.adelantos[i].montoAdelanto;
          }
          if(j>=pasaje2.precio)
          {
           pasaje2.habilitar=false;
          }
          this.listapasajes.push(pasaje2);
         }
       }
     );
   }

  ngOnInit(): void {
  }

  public calcularDescuento()
  {
     if( this.pasaje.precio!=null)
      {
        this.faltadeinfo=false;
        if(this.pasaje.categoria=='m')
        {
          this.precio_descuento=(this.pasaje.precio*25)/100;
          this.precio_actual=this.pasaje.precio-this.precio_descuento;
          this.mostrar=true;
        
        }
        else{
          if(this.pasaje.categoria=='j')
          {
            this.precio_descuento=(this.pasaje.precio*50)/100;
            this.precio_actual=this.pasaje.precio-this.precio_descuento;
            this.mostrar=true;
          
          }
          else{
            this.mostrar=false;
          }
      }
    
    }
    else{
      this.faltadeinfo=true;
    }
  
    }
  public limpiar()
  {
    this.pasaje=new Pasaje();
  }
  public limpiarmodal()
  {
    this.adelantonew=new Adelanto();
    this.pasajeselect=new Pasaje();
  }
  public seleccionarPasaje(pasaje : Pasaje,band? :boolean)
  {
    Object.assign(this.pasajeselect,pasaje);
    console.log(this.pasajeselect);

  }
  public actualizarAdelanto()
  {
    this.adelantonew.fecha=new Date();
  this.pasajeselect.adelantos.push(this.adelantonew);
    this.pasajeservice.agregarAdelanto(this.pasajeselect).subscribe(
      (result)=>{
        this.toaster.success("Operacion exitosa", "Se agrego el adelanto");
        this.obtenerlista();

      },
      (error)=>{
        this.toaster.error("Error inesperado", "Vuelva a intentarlo");
      }
    )
    this.limpiarmodal();
  }
  public mostrare(pasaje : Pasaje)
  {
    Object.assign(this.pasajeselect,pasaje);
    this.band=true;
  }
  public modificarPasaje(pasaje :Pasaje)
  {
      Object.assign (this.pasajeselect,pasaje);
  }
  public modificarPasajeconfirmacion()
  {
    this.pasajeservice.modificarPasaje(this.pasajeselect).subscribe(
      (result)=>{
        this.toaster.info("informacion", "Se modifico el pasaje");
        this.obtenerlista();
      },
      (error)=>{
        this.toaster.error("Error inesperado", "Vuelva a intentarlo");
      }
    )
    this.limpiarmodal();
  }
  public eliminarPasaje(pasaje: Pasaje)
  {
    this.pasajeservice.eliminarPasaje(pasaje._id).subscribe(
     (result)=> {
      this.toaster.info("informacion", "Se elimino el pasaje");
       this.obtenerlista();
       this.band=false;
      },
      (error)=>{
        this.toaster.error("Error inesperado", "Vuelva a intentarlo");
      }
    )
  }
  public eliminarAdelanto(adelanto :Adelanto)
  { 
    var adelantoss : Array<Adelanto>= new Array<Adelanto>();
    var adelantose : Adelanto= new Adelanto();
    for( let i in this.pasajeselect.adelantos)
    { adelantose = new Adelanto();
      if(adelanto._id!=this.pasajeselect.adelantos[i]._id)
      {
        Object.assign(adelantose,this.pasajeselect.adelantos[i]);
        adelantoss.push(adelantose);
      }
    }
    
    this.pasajeselect.adelantos=adelantoss;
    if(this.pasajeselect.adelantos.length==0)
    {
      this.band=false;
    }
    this.pasajeservice.agregarAdelanto(this.pasajeselect).subscribe(
      (result)=>{
        this.toaster.info("informacion", "Se elimino el adelanto");
        this.obtenerlista();
      },  (error)=>{
        this.toaster.error("Error inesperado", "Vuelva a intentarlo");
      }
    )
    this.limpiarmodal();
  }
}

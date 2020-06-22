import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from '@angular/forms';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { NgxDataTableModule} from "angular-9-datatable";
import { Punto4Component } from './components/punto4/punto4.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http';
import{ToastrModule} from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Punto1Component,
    Punto2Component,
    Punto3Component,
    Punto4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   NgxDataTableModule,
   AlifeFileToBase64Module,
   HttpClientModule,
   BrowserAnimationsModule,
   ToastrModule.forRoot(
     {
       closeButton:true,
       timeOut:1000,
       progressBar: true,
       progressAnimation: "increasing",
       extendedTimeOut :500,
       maxOpened :2,
       preventDuplicates :true
     }
   )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

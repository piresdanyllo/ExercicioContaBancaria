import { TransferenciasComponent } from './componentes/transferencias/transferencias.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransferenciaService } from './servicos/transferencia.service';
import { EditarComponent } from './componentes/editar/editar.component';
import { AdicionarComponent } from './componentes/adicionar/adicionar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    TransferenciasComponent,
    EditarComponent,
    AdicionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TransferenciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

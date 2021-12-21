import { TransferenciasComponent } from './componentes/transferencias/transferencias.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './componentes/editar/editar.component';
import { AdicionarComponent } from './componentes/adicionar/adicionar.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: InicioComponent },
  { path: 'transferencias', component: TransferenciasComponent },
  { path: 'edit/:id', component: EditarComponent },
  { path: 'adicionar', component: AdicionarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

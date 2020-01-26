import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InteraccionesComponent} from './interacciones/interacciones.component';
import {InteraccionesFormComponent} from './interacciones-form/interacciones-form.component';


const routes: Routes = [
  {
    path: '',
    component: InteraccionesComponent,
    data: {
      title: 'Interacciones con los clientes'
    }
  }, {
    path: 'crear',
    component: InteraccionesFormComponent,
    data: {
      title: 'Interacciones con los clientes / Nuevo'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteraccionesRoutingModule {
}

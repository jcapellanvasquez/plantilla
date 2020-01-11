import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EjemploServicioComponent} from './ejemplo-servicio/ejemplo-servicio.component';
import {EjemploFormComponent} from './ejemplo-form/ejemplo-form.component';


const routes: Routes = [
  {
    path: '',
    component: EjemploServicioComponent,
    data: {
      title: 'Ejemplo Servicio'
    }
  },
  {
    path: 'form',
    component: EjemploFormComponent,
    data: {
      title: 'Ejemplo Form'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjemploServicioRoutingModule {
}

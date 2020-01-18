import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EjemploServicioRoutingModule} from './ejemplo-servicio-routing.module';
import {EjemploServicioComponent} from './ejemplo-servicio/ejemplo-servicio.component';
import {HttpClientModule} from '@angular/common/http';
import {EjemploFormComponent} from './ejemplo-form/ejemplo-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [EjemploServicioComponent, EjemploFormComponent],
  imports: [
    CommonModule,
    EjemploServicioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule

  ],
  exports: []
})
export class EjemploServicioModule {
}

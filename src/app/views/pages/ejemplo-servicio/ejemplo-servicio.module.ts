import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjemploServicioRoutingModule } from './ejemplo-servicio-routing.module';
import { EjemploServicioComponent } from './ejemplo-servicio/ejemplo-servicio.component';
import {HttpClientModule} from '@angular/common/http';
import { EjemploFormComponent } from './ejemplo-form/ejemplo-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [EjemploServicioComponent, EjemploFormComponent],
  imports: [
    CommonModule,
    EjemploServicioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EjemploServicioModule { }

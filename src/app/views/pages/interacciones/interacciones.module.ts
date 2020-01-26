import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InteraccionesRoutingModule} from './interacciones-routing.module';
import {InteraccionesComponent} from './interacciones/interacciones.component';
import {AppSharedModule} from '../../../app-shared.module';
import { InteraccionesFormComponent } from './interacciones-form/interacciones-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [InteraccionesComponent, InteraccionesFormComponent],
    imports: [
        CommonModule,
        InteraccionesRoutingModule,
        AppSharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class InteraccionesModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsuarioRoutingModule} from './usuario-routing.module';
import {UsuarioComponent} from './usuario/usuario.component';
import {UsuarioFormComponent} from './usuario-form/usuario-form.component';
import {AppSharedModule} from '../../../app-shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [UsuarioComponent, UsuarioFormComponent],
    imports: [
        CommonModule,
        UsuarioRoutingModule,
        AppSharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        UsuarioFormComponent
    ]
})
export class UsuarioModule {
}

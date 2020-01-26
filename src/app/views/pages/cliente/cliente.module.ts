import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClienteRoutingModule} from './cliente-routing.module';
import {ClienteComponent} from './cliente/cliente.component';
import {AppSharedModule} from '../../../app-shared.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [ClienteComponent, ClienteFormComponent],
    imports: [
        CommonModule,
        ClienteRoutingModule,
        AppSharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
    entryComponents:[
        ClienteFormComponent
    ]
})
export class ClienteModule {
}

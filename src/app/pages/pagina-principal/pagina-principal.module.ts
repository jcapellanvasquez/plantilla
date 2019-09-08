import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormulaReactivoComponent } from './formula-reactivo/formula-reactivo.component';

@NgModule({
  declarations: [PrincipalComponent,FormComponent, FormulaReactivoComponent],
  imports: [
    CommonModule,
    PaginaPrincipalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PaginaPrincipalModule { }

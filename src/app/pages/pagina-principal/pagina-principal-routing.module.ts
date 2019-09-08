import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { FormulaReactivoComponent } from './formula-reactivo/formula-reactivo.component';

const routes: Routes = [
  {path:'',component: PrincipalComponent},
  {path:'formulario-reactivo',component: FormulaReactivoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaPrincipalRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthComponent } from './layouts/auth/auth.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  {
    path: 'auth',
    loadChildren:'./layouts/auth/auth.module#AuthModule'
    //component: AuthComponent,
    // children: [{
    //   path: '',
    //   loadChildren: './layouts/auth/auth.module#AuthModule'
    // }]
  },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true,
       enableTracing: true 
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

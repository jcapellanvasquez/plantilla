import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers
import {DefaultLayoutComponent} from './containers';

import {P404Component} from './views/error/404.component';
import {P500Component} from './views/error/500.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {P403Component} from './views/error/p403/p403.component';
import {SessionGuard} from './utils/session.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'interacciones',
    pathMatch: 'full',

  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '403',
    component: P403Component,
    data: {
      title: 'Page 403'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    },
    canActivate: [SessionGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate:[SessionGuard],
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule),
        canActivate:[SessionGuard],
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule),
        canActivate:[SessionGuard],
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule),
        canActivate:[SessionGuard],
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate:[SessionGuard],
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule),
        canActivate:[SessionGuard],
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule),
        canActivate:[SessionGuard],
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule),
        canActivate:[SessionGuard],
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule),
        canActivate:[SessionGuard],
      },
      {
        path: 'ejemplo-servicio',
        loadChildren: () => import('./views/pages/ejemplo-servicio/ejemplo-servicio.module').then(m => m.EjemploServicioModule),
        canActivate:[SessionGuard],
      },
      {
        path: 'cliente',
        loadChildren: () => import('./views/pages/cliente/cliente.module').then(m => m.ClienteModule),
        canActivate:[SessionGuard],
      },
      {
        path: 'usuario',
        loadChildren: () => import('./views/pages/usuario/usuario.module').then(m => m.UsuarioModule),
        canActivate:[SessionGuard],
      },
      {
        path: 'interacciones',
        loadChildren: () => import('./views/pages/interacciones/interacciones.module').then(m => m.InteraccionesModule),
        canActivate:[SessionGuard],
      },
    ]
  },
  {path: '**', component: P404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: !true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

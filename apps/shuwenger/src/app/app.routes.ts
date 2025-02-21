import { Route } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard/dashboard.component';
//import { AuthLayoutComponent } from './layout/auth/auth.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/dashboard/dashboard').then(
            (m) => m.dashboardRoutes
          ),
      },
    ],
  },
  //{
  //  path: '',
  //  component: AuthLayoutComponent,
  //  children: [
  //    {
  //      path: 'login',
  //      loadChildren: () =>
  //        import('./features/login/login.component').then(
  //          (m) => m.LoginComponent
  //        ),
  //    },
  //  ],
  //},
];

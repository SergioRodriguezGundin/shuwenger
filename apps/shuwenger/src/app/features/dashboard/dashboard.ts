import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'races',
    loadComponent: () =>
      import('./races/races.component').then((m) => m.RacesComponent),
  },
  {
    path: 'teams',
    loadComponent: () =>
      import('./teams/teams.component').then((m) => m.TeamsComponent),
  },
  {
    path: 'drivers',
    loadComponent: () =>
      import('./drivers/drivers.component').then((m) => m.DriversComponent),
  },
];

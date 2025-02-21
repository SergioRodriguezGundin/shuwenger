import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
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

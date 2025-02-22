import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Home | F1 Dashboard',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'races',
    title: 'Races | F1 Dashboard',
    loadComponent: () =>
      import('./races/races.component').then((m) => m.RacesComponent),
  },
  {
    path: 'teams',
    title: 'Teams | F1 Dashboard',
    loadComponent: () =>
      import('./teams/teams.component').then((m) => m.TeamsComponent),
  },
  {
    path: 'drivers',
    title: 'Drivers | F1 Dashboard',
    loadComponent: () =>
      import('./drivers/drivers.component').then((m) => m.DriversComponent),
  },
];

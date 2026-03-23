import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'cars',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/cars/cars.page').then(m => m.CarsPage),
  },
  {
    path: 'cars/:id/reserve',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/reservation/reservation.page').then(m => m.ReservationPage),
  },
  {
    path: 'cars/:id/reserve/:resId',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/reservation/reservation.page').then(m => m.ReservationPage),
  },
  {
    path: 'cars/:id/history',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/history/history.page').then(m => m.HistoryPage),
  },
  { path: '**', redirectTo: 'login' },
];

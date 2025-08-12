import { Routes } from '@angular/router';
import { Todo } from './todo/todo';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: Todo,
      }, // eager loading
      {
        path: 'todo',
        redirectTo: '',
      },
      {
        path: 'table',
        loadComponent: () => import('./table/table').then((m) => m.Table), // lazy loading
      },
    ],
  },
];

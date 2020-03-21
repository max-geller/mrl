import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

import { AdminLogsComponent } from './admin-logs/admin-logs.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'logs', component: AdminLogsComponent },
  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
  { path: 'app', loadChildren: () => import('./app-settings/app-settings.module').then(m => m.AppSettingsModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
];

export const AdminRoutes = RouterModule.forChild(routes);

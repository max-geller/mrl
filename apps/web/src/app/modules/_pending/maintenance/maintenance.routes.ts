import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceComponent } from './maintenance.component';

const routes: Routes = [
  { path: '', component: MaintenanceComponent },
  { path: 'monitoring', loadChildren: () => import('./monitoring/monitoring.module').then(m => m.MonitoringModule) },
  { path: 'systems', loadChildren: () => import('./systems/systems.module').then(m => m.SystemsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutes { }

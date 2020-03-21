import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { MaintenanceRoutes } from './maintenance.routes';

import { MaintenanceComponent } from './maintenance.component';

import { MonitoringModule } from './monitoring/monitoring.module';
import { SystemsModule } from './systems/systems.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaintenanceRoutes,
    SystemsModule,
    MonitoringModule
  ],
  declarations: [MaintenanceComponent]
})
export class MaintenanceModule {}

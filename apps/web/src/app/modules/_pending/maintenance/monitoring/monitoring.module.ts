import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { MonitoringRoutes } from './monitoring.routes';

import { MonitoringComponent } from './monitoring.component';

@NgModule({
  imports: [CommonModule, SharedModule, MonitoringRoutes],
  declarations: [MonitoringComponent]
})
export class MonitoringModule {}

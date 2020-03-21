import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutes } from './modules.routes';
import { AdminModule } from './admin/admin.module';
import { AnalyticsModule } from './research/analytics.module';
import { CommissioningModule } from './_pending/commissioning/cx.module';
import { ControlsModule } from './_pending/controls/controls.module';
import { DesignModule } from './_pending/design/design.module';
import { EstimatingModule } from './estimating/estimating.module';
import { MaintenanceModule } from './_pending/maintenance/maintenance.module';
import { ManagementModule } from './management/management.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { FilesModule } from './files/files.module';
import { PursueModule } from './_pending/pursue/pursue.module';
import { SuccessModule } from './_pending/success/success.module';
import { TenantsModule } from './tenants/tenants.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AdminModule,
    AnalyticsModule,
    CommissioningModule,
    ControlsModule,
    DesignModule,
    TasksModule,
    FilesModule,
    EstimatingModule,
    MaintenanceModule,
    ManagementModule,
    ProjectsModule,
    PursueModule,
    TenantsModule,
    SuccessModule,
    ModulesRoutes,
  ]
})
export class ModulesModule { }

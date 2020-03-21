import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ReportsRoutes } from './reports.routes';

import { ReportsComponent } from './reports.component';

@NgModule({
  imports: [CommonModule, SharedModule, ReportsRoutes],
  declarations: [ReportsComponent]
})
export class ReportsModule {}

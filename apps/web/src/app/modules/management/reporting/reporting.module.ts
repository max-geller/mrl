import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { ReportingRoutes } from './reporting.routes';

import { ReportingComponent } from './reporting.component';

@NgModule({
  imports: [CommonModule, SharedModule, ReportingRoutes],

  declarations: [ReportingComponent]
})
export class ReportingModule {}

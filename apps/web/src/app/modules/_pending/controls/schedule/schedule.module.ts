import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ScheduleRoutes } from './schedule.routes';

import { ScheduleComponent } from './schedule.component';

@NgModule({
  imports: [CommonModule, SharedModule, ScheduleRoutes],
  declarations: [ScheduleComponent]
})
export class ScheduleModule {}

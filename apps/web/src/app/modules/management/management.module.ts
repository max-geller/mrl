import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ManagementRoutes } from './management.routes';

import { ManagementComponent } from './management.component';

import { MeetingsModule } from './meetings/meetings.module';

@NgModule({
  imports: [CommonModule, SharedModule, ManagementRoutes, MeetingsModule],
  declarations: [ManagementComponent]
})
export class ManagementModule {}

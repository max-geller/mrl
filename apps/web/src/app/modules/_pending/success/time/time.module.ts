import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';

import { TimeRoutes } from './time.routes';

import { TimeComponent } from './time.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule, TimeRoutes],

  declarations: [TimeComponent],

  providers: []
})
export class TimeModule {}

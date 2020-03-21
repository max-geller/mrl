import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { SubmittalsRoutes } from './submittals.routes';

import { SubmittalsComponent } from './submittals.component';

@NgModule({
  imports: [CommonModule, SharedModule, SubmittalsRoutes],
  declarations: [SubmittalsComponent]
})
export class SubmittalsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { GoalsRoutes } from './goals.routes';

import { GoalsComponent } from './goals.component';

@NgModule({
  declarations: [GoalsComponent],

  imports: [CommonModule, SharedModule, GoalsRoutes]
})
export class GoalsModule {}

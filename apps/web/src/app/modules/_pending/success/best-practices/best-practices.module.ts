import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { BestPracticesRoutes } from './best-practices.routes';

import { BestPracticesComponent } from './best-practices.component';

@NgModule({
  declarations: [BestPracticesComponent],

  imports: [CommonModule, SharedModule, BestPracticesRoutes]
})
export class BestPracticesModule {}

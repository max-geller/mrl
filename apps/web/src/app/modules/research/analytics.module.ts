import { CalculatorsModule } from './calculators/calculators.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { AnalyticsRoutes } from './analytics.routes';

import { AnalyticsComponent } from './analytics.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AnalyticsRoutes
  ],
  declarations: [
    AnalyticsComponent,
  ]
})
export class AnalyticsModule { }

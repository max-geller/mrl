import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ForecastRoutes } from './forecast.routes';

import { ForecastComponent } from './forecast.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ForecastRoutes
  ],
  declarations: [
    ForecastComponent,
  ]
})
export class ForecastModule { }

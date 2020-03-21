import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { HistoricalRoutes } from './historical.routes';

import { HistoricalComponent } from './historical.component';

@NgModule({
  declarations: [
    HistoricalComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    HistoricalRoutes,
  ]
})
export class HistoricalModule { }

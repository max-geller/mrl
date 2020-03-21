import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { ControlsRoutes } from './controls.routes';

import { ReportsModule } from './reports/reports.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ProcurementModule } from './procurement/procurement.module';
import { ForecastModule } from './forecast/forecast.module';
import { ContractsModule } from './contracts/contracts.module';
import { BudgetsModule } from './budgets/budgets.module';
import { BiddingModule } from './bidding/bidding.module';

import { ControlsComponent } from './controls.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BudgetsModule,
    ContractsModule,
    ForecastModule,
    ProcurementModule,
    ScheduleModule,
    ReportsModule,
    BiddingModule,
    ControlsRoutes
  ],

  declarations: [ControlsComponent]
})
export class ControlsModule {}

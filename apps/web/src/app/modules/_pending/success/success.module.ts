import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { SuccessRoutes } from './success.routes';

import { GoalsModule } from './goals/goals.module';
import { SlackModule } from './slack/slack.module';
import { TimeModule } from './time/time.module';
import { ExpensesModule } from './expenses/expenses.module';
import { SupportModule } from './support/support.module';

import { SuccessComponent } from './success.component';
import { TestPrepModule } from './test-prep/test-prep.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GoalsModule,
    ExpensesModule,
    TimeModule,
    SlackModule,
    SupportModule,
    TestPrepModule,
    SuccessRoutes
  ],
  declarations: [SuccessComponent]
})
export class SuccessModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { BudgetsRoutes } from './budgets.routes';

import { BudgetsComponent } from './budgets.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BudgetsRoutes
  ],
  declarations: [
    BudgetsComponent,
  ]
})
export class BudgetsModule { }

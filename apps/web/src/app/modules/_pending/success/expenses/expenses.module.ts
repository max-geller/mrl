import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ExpenseRoutes } from './expenses.routes';
import { ExpensesComponent } from './expenses.component';

@NgModule({
  declarations: [ExpensesComponent],

  imports: [CommonModule, SharedModule, ExpenseRoutes]
})
export class ExpensesModule {}

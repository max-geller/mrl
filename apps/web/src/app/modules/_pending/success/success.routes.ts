
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from './success.component';
import { TestPrepComponent } from './test-prep/test-prep.component';

const routes: Routes = [
  { path: '', component: SuccessComponent },
  { path: 'test-prep', component: TestPrepComponent },
  { path: 'best-practices', loadChildren: () => import('./best-practices/best-practices.module').then(m => m.BestPracticesModule) },
  { path: 'slack', loadChildren: () => import('./slack/slack.module').then(m => m.SlackModule) },
  { path: 'support', loadChildren: () => import('./support/support.module').then(m => m.SupportModule) },
  { path: 'time', loadChildren: () => import('./time/time.module').then(m => m.TimeModule) },
  { path: 'expenses', loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule) },
  { path: 'goals', loadChildren: () => import('./goals/goals.module').then(m => m.GoalsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessRoutes { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignComponent } from './design.component';

const routes: Routes = [
  { path: '', component: DesignComponent },
  { path: 'review', loadChildren: () => import('./review/review.module').then(m => m.ReviewModule) },
  { path: 'systems', loadChildren: () => import('./systems/systems.module').then(m => m.SystemsModule) },
  { path: 'survey', loadChildren: () => import('./survey/survey.module').then(m => m.SurveyModule) },
  { path: 'programming', loadChildren: () => import('./programming/programming.module').then(m => m.ProgrammingModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutes { }

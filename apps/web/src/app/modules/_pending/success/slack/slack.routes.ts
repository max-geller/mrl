import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlackComponent } from './slack.component';

const routes: Routes = [
  { path: '', component: SlackComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlackRoutes { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestPracticesComponent } from './best-practices.component';

const routes: Routes = [
  { path: '', component: BestPracticesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestPracticesRoutes { }

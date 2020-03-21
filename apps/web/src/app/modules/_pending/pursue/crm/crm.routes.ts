import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CRMComponent } from './crm.component';

const routes: Routes = [
  { path: '', component: CRMComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRMRoutes { }

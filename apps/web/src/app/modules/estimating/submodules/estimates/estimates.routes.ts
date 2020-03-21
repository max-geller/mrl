
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewEstimateComponent } from './views/modals/new-estimate/new-estimate.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/modules/estimating/estimates/project-info', pathMatch: 'full'},
  { path: 'help', component: HelpComponent },
  { path: 'new-estimate', component: NewEstimateComponent },
//  { path: 'historical', loadChildren: () => import('./historical/historical.module').then(m => m.HistoricalModule) },
//  { path: 'cost-indices', loadChildren: () => import('./cost-indices/cost-indices.module').then(m => m.CostIndicesModule) },
//  { path: 'systems', loadChildren: () => import('./systems/systems.module').then(m => m.SystemsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatesRoutes { }

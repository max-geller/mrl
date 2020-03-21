import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastComponent } from './forecast.component';

const routes: Routes = [
  { path: '', component: ForecastComponent },
//  { path: 'historical', loadChildren: () => import('./historical/historical.module').then(m => m.HistoricalModule) },
//  { path: 'cost-indices', loadChildren: () => import('./cost-indices/cost-indices.module').then(m => m.CostIndicesModule) },
//  { path: 'systems', loadChildren: () => import('./systems/systems.module').then(m => m.SystemsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastRoutes { }
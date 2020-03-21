
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';

const routes: Routes = [
  { path: '', component: AnalyticsComponent },
  { path: 'historical', loadChildren: () => import('./historical/historical.module').then(m => m.HistoricalModule) },
  { path: 'cost-indices', loadChildren: () => import('./cost-indices/cost-indices.module').then(m => m.CostIndicesModule) },
  { path: 'systems', loadChildren: () => import('./systems/systems.module').then(m => m.SystemsModule) },
  { path: 'trades', loadChildren: () => import('./trades/trades.module').then(m => m.TradesModule) },
  { path: 'calculators', loadChildren: () => import('./calculators/calculators.module').then(m => m.CalculatorsModule) },
  { path: 'references', loadChildren: () => import('./references/references.module').then(m => m.ReferencesModule) },
  { path: 'trades', loadChildren: () => import('./trades/trades.module').then(m => m.TradesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutes { }

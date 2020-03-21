import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimatesComponent } from './submodules/estimates/estimates.component';
import { EstimatingLayoutComponent } from './submodules/estimates/views/estimating-layout/estimating-layout.component';

const routes: Routes = [

  { path: '', component: EstimatesComponent },
  {
    path: 'estimates',
    component: EstimatingLayoutComponent,
    loadChildren: () => import('./submodules/estimates/estimates.module').then(m => m.EstimatesModule)
  },
  { path: 'modeling', loadChildren: () => import('./submodules/modeling/modeling.module').then(m => m.ModelingModule) },
  { path: 'items', loadChildren: () => import('./submodules/items/items.module').then(m => m.ItemsModule) },
  { path: 'database', loadChildren: () => import('./submodules/database/database.module').then(m => m.DatabaseModule) },
  { path: 'assemblies', loadChildren: () => import('./submodules/assemblies/assemblies.module').then(m => m.AssembliesModule) },
  { path: 'labor', loadChildren: () => import('./submodules/labor/labor.module').then(m => m.LaborModule) },
  { path: 'variance', loadChildren: () => import('./submodules/variance/variance.module').then(m => m.VarianceModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatingRoutes { }

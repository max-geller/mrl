import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'activations', loadChildren: () => import('./activations/activations.module').then(m => m.ActivationsModule) },
  { path: 'presentations', loadChildren: () => import('./presentations/presentations.module').then(m => m.PresentationsModule) },
  { path: 'punchlist', loadChildren: () => import('./punchlist/punchlist.module').then(m => m.PunchlistModule) },
  { path: 'systems', loadChildren: () => import('./system/system.module').then(m => m.SystemModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CxRoutingModule { }

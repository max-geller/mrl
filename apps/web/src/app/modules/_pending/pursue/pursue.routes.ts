
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PursueComponent } from './pursue.component';

const routes: Routes = [
  { path: '', component: PursueComponent },
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) },
  { path: 'proposals', loadChildren: () => import('./proposals/proposals.module').then(m => m.ProposalsModule) },
  { path: 'resumes', loadChildren: () => import('./resumes/resumes.module').then(m => m.ResumesModule) },
  { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
  { path: 'crm', loadChildren: () => import('./crm/crm.module').then(m => m.CRMModule) },
  { path: 'rates', loadChildren: () => import('./rates/rates.module').then(m => m.RatesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PursueRoutes { }

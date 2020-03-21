import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'meetings', loadChildren: () => import('./meetings/meetings.module').then(m => m.MeetingsModule) },
  { path: 'reports', loadChildren: () => import('./reporting/reporting.module').then(m => m.ReportingModule) },
  { path: 'inspections', loadChildren: () => import('./inspections/inspections.module').then(m => m.InspectionsModule) },
  { path: 'rfis', loadChildren: () => import('./rfis/rfis.module').then(m => m.RfisModule) },
  { path: 'submittals', loadChildren: () => import('./submittals/submittals.module').then(m => m.SubmittalsModule) },
  { path: 'actions', loadChildren: () => import('./actions/actions.module').then(m => m.ActionsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutes { }

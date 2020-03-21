import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { TradesComponent } from './trades/trades.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SystemsComponent } from './systems/systems.component';
import { WbsComponent } from './wbs/wbs.component';
import { EstimateInfoComponent } from './estimate-info/estimate-info.component';
import { ContractBuilderComponent } from './contract-builder/contract-builder.component';
import { StructureComponent } from './structure/structure.component';


const routes: Routes = [

  { path: 'project-info', component: ProjectInfoComponent },
  { path: 'estimate-info', component: EstimateInfoComponent },
  { path: 'trades', component: TradesComponent },
  { path: 'qualficiations', component: QualificationsComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'systems', component: SystemsComponent },
  { path: 'wbs', component: WbsComponent },
  { path: 'structure', component: StructureComponent },
  { path: 'contracts', component: ContractBuilderComponent },
//  { path: 'historical', loadChildren: () => import('./historical/historical.module').then(m => m.HistoricalModule) },
//  { path: 'cost-indices', loadChildren: () => import('./cost-indices/cost-indices.module').then(m => m.CostIndicesModule) },
//  { path: 'systems', loadChildren: () => import('./systems/systems.module').then(m => m.SystemsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutes { }

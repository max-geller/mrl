import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../../../shared/shared.module';
import { RouterModule } from '@angular/router';

import { SetupRoutes } from './setup.routes';

import { ProjectInfoComponent } from './project-info/project-info.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { WbsComponent } from './wbs/wbs.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EstimateInfoComponent } from './estimate-info/estimate-info.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { SystemsComponent } from './systems/systems.component';
import { StructureComponent } from './structure/structure.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule, SetupRoutes],

  declarations: [
    ProjectInfoComponent,
    DocumentationComponent,
    EstimateInfoComponent,
    QualificationsComponent,
    ScheduleComponent,
    WbsComponent,
    StructureComponent,
    SystemsComponent
  ]
})
export class SetupModule {}

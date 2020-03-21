import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ProjectsRoutes } from './projects.routes';

import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { ProjectCategoriesComponent } from './pages/project-categories/project-categories.component';
import { NewStageComponent } from './pages/new-stage/new-stage.component';
import { ManageStagesComponent } from './pages/manage-stages/manage-stages.component';

@NgModule({
  imports: [CommonModule, SharedModule, ProjectsRoutes],

  providers: [],

  declarations: [
    EditProjectComponent,
    NewProjectComponent,
    ProjectCategoriesComponent,
    ProjectsListComponent,
    NewStageComponent,
    ManageStagesComponent
  ]
})
export class ProjectsModule {}

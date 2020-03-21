import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { ProjectCategoriesComponent } from './pages/project-categories/project-categories.component';
import { ManageStagesComponent } from './pages/manage-stages/manage-stages.component';
import { NewStageComponent } from './pages/new-stage/new-stage.component';

const routes: Routes = [
  { path: '', component:  ProjectsListComponent },
  { path: 'new', component:  NewProjectComponent },
  { path: 'edit', component:  EditProjectComponent },
  { path: 'categories', component:  ProjectCategoriesComponent },
  { path: 'manage-stages', component:  ManageStagesComponent },
  { path: 'new-stage', component:  NewStageComponent },
//  { path: 'budgets', loadChildren: () => import('./budgets/budgets.module').then(m => m.ActivationsModule) },
//  { path: 'presentations', loadChildren: () => import('./presentations/presentations.module').then(m => m.PresentationsModule) },
//  { path: 'punchlist', loadChildren: () => import('./punchlist/punchlist.module').then(m => m.PunchlistModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutes { }

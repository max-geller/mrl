import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeComponent } from './time.component';

const routes: Routes = [
  { path: '', component: TimeComponent },
];

export const TimeRoutes = RouterModule.forChild(routes);

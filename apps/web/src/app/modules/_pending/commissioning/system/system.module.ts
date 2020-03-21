import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { SystemRoutes } from './system.routes';

import { SystemComponent } from './system.component';

@NgModule({
  declarations: [
    SystemComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    SystemRoutes
  ]
})
export class SystemModule { }

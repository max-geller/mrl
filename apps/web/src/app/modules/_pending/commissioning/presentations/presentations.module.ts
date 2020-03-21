import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { PresentationsRoutes } from './presentations.routes';

import { PresentationsComponent } from './presentations.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PresentationsRoutes
  ],
  declarations: [
    PresentationsComponent,
  ]
})
export class PresentationsModule { }

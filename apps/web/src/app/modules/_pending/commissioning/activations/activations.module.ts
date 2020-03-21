import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ActivationsRoutes } from './activations.routes';

import { ActivationsComponent } from './activations.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ActivationsRoutes
  ],
  declarations: [
    ActivationsComponent,
  ]
})
export class ActivationsModule { }

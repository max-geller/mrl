import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { CostIndicesRoutes } from './cost-indices.routes';
import { CostIndicesComponent } from './cost-indices.component';

@NgModule({
  declarations: [
    CostIndicesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CostIndicesRoutes,
  ]
})
export class CostIndicesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ProcurementRoutes } from './procurement.routes';

import { ProcurementComponent } from './procurement.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProcurementRoutes
  ],

  declarations: [
    ProcurementComponent,
  ]
})
export class ProcurementModule { }

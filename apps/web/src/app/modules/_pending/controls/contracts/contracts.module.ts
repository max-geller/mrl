import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ContractsRoutes } from './contracts.routes';

import { ContractsComponent } from './contracts.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContractsRoutes
  ],
  declarations: [
    ContractsComponent,
  ]
})
export class ContractsModule { }

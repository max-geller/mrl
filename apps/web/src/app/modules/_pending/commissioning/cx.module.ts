import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { CxRoutingModule } from './cx.routes';

import { CxComponent } from './cx.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CxRoutingModule,
  ],
  declarations: [
    CxComponent,
  ]
})
export class CommissioningModule { }

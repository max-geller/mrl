import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { ReferencesRoutes } from './references.routes';

import { ReferencesComponent } from './references.component';
import { CecComponent } from './codes/cec/cec.component';
import { CbcComponent } from './codes/cbc/cbc.component';
import { NecComponent } from './codes/nec/nec.component';
import { NfpaComponent } from './codes/nfpa/nfpa.component';

@NgModule({
  declarations: [
    ReferencesComponent,
    CecComponent,
    CbcComponent,
    NecComponent,
    NfpaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReferencesRoutes,
  ]
})
export class ReferencesModule { }

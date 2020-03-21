import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { CRMRoutes } from './crm.routes';

import { CRMComponent } from './crm.component';

@NgModule({
  declarations: [CRMComponent],

  imports: [CommonModule, SharedModule, CRMRoutes]
})
export class CRMModule {}

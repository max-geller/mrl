import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ProposalsRoutes } from './proposals.routes';

import { ProposalsComponent } from './proposals.component';

@NgModule({
  declarations: [ProposalsComponent],

  imports: [CommonModule, SharedModule, ProposalsRoutes]
})
export class ProposalsModule {}

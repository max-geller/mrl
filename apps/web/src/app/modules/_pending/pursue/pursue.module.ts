import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { PursueRoutes } from './pursue.routes';

import { ClientsModule } from './clients/clients.module';
import { ProposalsModule } from './proposals/proposals.module';
import { ResumesModule } from './resumes/resumes.module';
import { RatesModule } from './rates/rates.module';
import { CRMModule } from './crm/crm.module';
import { ResourcesModule } from './resources/resources.module';

import { PursueComponent } from './pursue.component';
import { LeadsModule } from './leads/leads.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClientsModule,
    ProposalsModule,
    ResumesModule,
    RatesModule,
    CRMModule,
    ResourcesModule,
    LeadsModule,
    PursueRoutes
  ],
  declarations: [PursueComponent]
})
export class PursueModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ClientsRoutes } from './clients.routes';

import { ClientsComponent } from './clients.component';
import { ActiveClientsComponent } from './active-clients/active-clients.component';
import { ActiveProspectsComponent } from './active-prospects/active-prospects.component';

@NgModule({
  declarations: [
    ClientsComponent,
    ActiveClientsComponent,
    ActiveProspectsComponent
  ],

  imports: [CommonModule, SharedModule, ClientsRoutes]
})
export class ClientsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { SupportRoutes } from './support.routes';

import { SupportComponent } from './support.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

@NgModule({
  declarations: [SupportComponent, NewTicketComponent],

  imports: [CommonModule, SharedModule, SupportRoutes]
})
export class SupportModule {}

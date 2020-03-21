import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { ActionsRoutes } from './actions.routes';

import { ActionsComponent } from './actions.component';

@NgModule({
  imports: [CommonModule, SharedModule, ActionsRoutes],
  declarations: [ActionsComponent]
})
export class ActionsModule {}

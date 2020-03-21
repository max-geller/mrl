import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { SlackRoutes } from './slack.routes';

import { SlackComponent } from './slack.component';

@NgModule({
  declarations: [SlackComponent],
  imports: [CommonModule, SharedModule, SlackRoutes]
})
export class SlackModule {}

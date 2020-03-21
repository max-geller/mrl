import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { SurveyRoutes } from './survey.routes';

import { SurveyComponent } from './survey.component';

@NgModule({
  declarations: [SurveyComponent],

  imports: [CommonModule, SharedModule, SurveyRoutes]
})
export class SurveyModule {}

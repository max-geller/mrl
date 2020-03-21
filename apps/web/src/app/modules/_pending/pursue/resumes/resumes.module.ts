import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ResumeRoutes } from './resumes.routes';

import { ResumeComponent } from './resumes.component';

@NgModule({
  declarations: [ResumeComponent],

  imports: [CommonModule, SharedModule, ResumeRoutes]
})
export class ResumesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ProgrammingRoutes } from './programming.routes';

import { ProgrammingComponent } from './programming.component';

@NgModule({
  declarations: [ProgrammingComponent],

  imports: [CommonModule, SharedModule, ProgrammingRoutes]
})
export class ProgrammingModule {}

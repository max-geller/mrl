import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { LaborRoutes } from './labor.routes';

import { LaborComponent } from './labor.component';

@NgModule({
  imports: [CommonModule, SharedModule, LaborRoutes],
  declarations: [LaborComponent]
})
export class LaborModule {}

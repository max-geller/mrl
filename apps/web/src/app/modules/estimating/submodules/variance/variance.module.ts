import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { VarianceRoutes } from './variance.routes';

import { VarianceComponent } from './variance.component';

@NgModule({
  imports: [CommonModule, SharedModule, VarianceRoutes],
  declarations: [VarianceComponent]
})
export class VarianceModule {}

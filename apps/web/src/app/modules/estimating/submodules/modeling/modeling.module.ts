import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ModelingRoutes } from './modeling.routes';

import { ModelingComponent } from './modeling.component';

@NgModule({
  imports: [CommonModule, SharedModule, ModelingRoutes],
  declarations: [ModelingComponent]
})
export class ModelingModule {}

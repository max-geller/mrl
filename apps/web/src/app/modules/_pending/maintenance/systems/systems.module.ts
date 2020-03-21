import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { SystemsRoutes } from './systems.routes';

import { SystemsComponent } from './systems.component';

@NgModule({
  imports: [CommonModule, SharedModule, SystemsRoutes],
  declarations: [SystemsComponent]
})
export class SystemsModule {}

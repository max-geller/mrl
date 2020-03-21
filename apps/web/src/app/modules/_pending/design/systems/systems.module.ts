import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { SystemsRoutes } from './systems.routes';

import { SystemsComponent } from './systems.component';

@NgModule({
  declarations: [SystemsComponent],

  imports: [CommonModule, SharedModule, SystemsRoutes]
})
export class SystemsModule {}

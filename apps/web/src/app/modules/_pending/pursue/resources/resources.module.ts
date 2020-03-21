import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ResourcesRoutes } from './resources.routes';

import { ResourcesComponent } from './resources.component';

@NgModule({
  declarations: [ResourcesComponent],

  imports: [CommonModule, SharedModule, ResourcesRoutes]
})
export class ResourcesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { DesignRoutes } from './design.routes';

import { DesignComponent } from './design.component';

@NgModule({
  declarations: [DesignComponent],

  imports: [CommonModule, SharedModule, DesignRoutes]
})
export class DesignModule {}

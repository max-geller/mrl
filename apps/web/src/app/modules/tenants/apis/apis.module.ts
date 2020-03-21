import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { APIsRoutes } from './apis.routes';

import { APIsComponent } from './apis.component';

@NgModule({
  imports: [CommonModule, SharedModule, APIsRoutes],

  declarations: [APIsComponent]
})
export class APIsModule {}

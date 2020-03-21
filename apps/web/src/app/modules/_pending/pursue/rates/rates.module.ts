import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { RatesRoutes } from './rates.routes';

import { RatesComponent } from './rates.component';

@NgModule({
  declarations: [RatesComponent],

  imports: [CommonModule, SharedModule, RatesRoutes]
})
export class RatesModule {}

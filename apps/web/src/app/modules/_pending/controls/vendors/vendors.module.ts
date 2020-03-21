import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { VendorsRoutes } from './vendors.routes';

import { VendorsComponent } from './vendors.component';

@NgModule({
  imports: [CommonModule, SharedModule, VendorsRoutes],
  declarations: [VendorsComponent]
})
export class VendorsModule {}

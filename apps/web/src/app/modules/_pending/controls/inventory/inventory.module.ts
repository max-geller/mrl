import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { InventoryRoutes } from './inventory.routes';

import { InventoryComponent } from './inventory.component';

@NgModule({
  imports: [CommonModule, SharedModule, InventoryRoutes],

  declarations: [InventoryComponent]
})
export class InventoryModule {}

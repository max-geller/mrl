import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ItemsRoutes } from './items.routes';

import { ItemsComponent } from './items.component';

@NgModule({
  imports: [CommonModule, SharedModule, ItemsRoutes],
  declarations: [ItemsComponent]
})
export class ItemsModule {}

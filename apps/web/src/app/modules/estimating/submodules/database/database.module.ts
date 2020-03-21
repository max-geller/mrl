import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { DatabaseComponent } from './database.component';
import { DatabaseRoutes } from './database.routes';

@NgModule({
  imports: [CommonModule, SharedModule, DatabaseRoutes],
  declarations: [DatabaseComponent]
})
export class DatabaseModule {}

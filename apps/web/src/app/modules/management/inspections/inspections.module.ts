import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { InspectionsRoutes } from './inspections.routes';

import { InspectionsComponent } from './inspections.component';

@NgModule({
  imports: [CommonModule, SharedModule, InspectionsRoutes],
  declarations: [InspectionsComponent]
})
export class InspectionsModule {}

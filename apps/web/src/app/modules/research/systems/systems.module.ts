import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { SystemsRoutes } from './systems.routes';
import { SystemsComponent } from './systems.component';
import { EditSystemComponent } from './edit-system/edit-system.component';
import { ManageSystemsComponent } from './manage-systems/manage-systems.component';
import { NewSystemComponent } from './new-system/new-system.component';
import { SystemDetailsComponent } from './system-details/system-details.component';

@NgModule({
  declarations: [
    SystemsComponent,
    EditSystemComponent,
    ManageSystemsComponent,
    NewSystemComponent,
    SystemDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SystemsRoutes,
  ]
})
export class SystemsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutes } from './modules.routes';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AdminModule,
    ModulesRoutes,
  ]
})
export class ModulesModule { }

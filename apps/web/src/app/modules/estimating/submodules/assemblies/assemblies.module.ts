import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { AssembliesRoutes } from './assemblies.routes';

import { AssembliesComponent } from './assemblies.component';

@NgModule({
  imports: [CommonModule, SharedModule, AssembliesRoutes],

  declarations: [AssembliesComponent]
})
export class AssembliesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { EstimatingRoutes } from './estimating.routes';

import { ModelingModule } from './submodules/modeling/modeling.module';
import { DatabaseModule } from './submodules/database/database.module';
import { EstimatesModule } from './submodules/estimates/estimates.module';
import { LaborModule } from './submodules/labor/labor.module';
import { AssembliesModule } from './submodules/assemblies/assemblies.module';
import { EstimateService } from './services/estimate.service';
import { ItemsModule } from './submodules/items/items.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EstimatingRoutes,
    ModelingModule,
    DatabaseModule,
    EstimatesModule,
    AssembliesModule,
    ItemsModule,
    LaborModule
  ],

  declarations: [],

  providers: [EstimateService]
})
export class EstimatingModule {}

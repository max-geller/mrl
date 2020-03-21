import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { CalculatorsRoutes } from './calculators.routes';

import { CalculatorsComponent } from './calculators.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { WireFillComponent } from './wire-fill/wire-fill.component';
import { GeneratorSizingComponent } from './generator-sizing/generator-sizing.component';
import { VoltageDropComponent } from './voltage-drop/voltage-drop.component';

@NgModule({
  declarations: [
    CalculatorsComponent,
    ConversionsComponent,
    GeneratorSizingComponent,
    VoltageDropComponent,
    WireFillComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CalculatorsRoutes,
  ]
})
export class CalculatorsModule { }

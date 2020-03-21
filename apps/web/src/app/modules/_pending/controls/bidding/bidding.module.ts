import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { BiddingRoutes } from './bidding.routes';

import { BiddingComponent } from './bidding.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BiddingRoutes
  ],

  declarations: [
    BiddingComponent,
  ]
})
export class BiddingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { PunchlistRoutes } from './punchlist.routes';

import { PunchlistComponent } from './punchlist.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PunchlistRoutes
  ],
  declarations: [
    PunchlistComponent,
  ]
})
export class PunchlistModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

import { ReviewRoutes } from './review.routes';

import { ReviewComponent } from './review.component';

@NgModule({
  declarations: [ReviewComponent],

  imports: [CommonModule, SharedModule, ReviewRoutes]
})
export class ReviewModule {}

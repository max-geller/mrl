import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPrepComponent } from './test-prep.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TestPrepComponent]
})
export class TestPrepModule { }

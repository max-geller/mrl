import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';

import { AuthLayoutComponent } from './auth-layout.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    AuthLayoutComponent,
    IconMenuComponent,
    MainMenuComponent
  ]
})
export class AuthLayoutModule { }

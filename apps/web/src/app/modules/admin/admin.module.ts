
import { AdminRoutes } from './admin.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';

import { AuthService } from '../../core/auth/auth.service';
import { UserService } from './users/user.service';

import { AdminComponent } from './admin.component';

import { AdminLogsComponent } from './admin-logs/admin-logs.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RolesModule,
    UsersModule,
    AdminRoutes
  ],

  declarations: [
    AdminComponent,
    AdminLogsComponent,
  ],
  providers: [
    AuthService,
    UserService
  ]
})
export class AdminModule { }

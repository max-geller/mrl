import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { TradesRoutes } from './trades.routes';

import { TradesComponent } from './trades.component';
import { AgreementDetailsComponent } from './unions/agreement-details/agreement-details.component';
import { EditAgreementComponent } from './unions/edit-agreement/edit-agreement.component';
import { EditLocalComponent } from './unions/edit-local/edit-local.component';
import { EditTradeComponent } from './unions/edit-trade/edit-trade.component';
import { EditUnionComponent } from './unions/edit-union/edit-union.component';
import { LocalDetailsComponent } from './unions/local-details/local-details.component';
import { ManageLocalsComponent } from './unions/manage-locals/manage-locals.component';
import { ManageTradesComponent } from './unions/manage-trades/manage-trades.component';
import { ManageUnionsComponent } from './unions/manage-unions/manage-unions.component';
import { NewAgreementComponent } from './unions/new-agreement/new-agreement.component';
import { NewLocalComponent } from './unions/new-local/new-local.component';
import { NewTradeComponent } from './unions/new-trade/new-trade.component';
import { NewUnionComponent } from './unions/new-union/new-union.component';

@NgModule({
  declarations: [
    TradesComponent,
    AgreementDetailsComponent,
    EditAgreementComponent,
    EditLocalComponent,
    EditTradeComponent,
    EditUnionComponent,
    LocalDetailsComponent,
    ManageLocalsComponent,
    ManageTradesComponent,
    ManageUnionsComponent,
    NewAgreementComponent,
    NewLocalComponent,
    NewTradeComponent,
    NewUnionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TradesRoutes,
  ]
})
export class TradesModule { }

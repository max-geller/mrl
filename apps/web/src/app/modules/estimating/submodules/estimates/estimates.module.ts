import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';

import { EstimatesRoutes } from './estimates.routes';

import { SetupModule } from './views/estimating-layout/setup/setup.module';

import { EstimatesComponent } from './estimates.component';
import { EstimateScheduleComponent } from './views/estimate-schedule/estimate-schedule.component';
import { AnalyticsComponent } from './views/estimating-layout/analytics/analytics.component';
import { BreakdownComponent } from './views/estimating-layout/breakdown/breakdown.component';
import { ContractBuilderComponent } from './views/estimating-layout/setup/contract-builder/contract-builder.component';
import { DatabaseSidenavComponent } from './views/estimating-layout/takeoff/database-sidenav/database-sidenav.component';
import { EquipmentComponent } from './views/estimating-layout/equipment/equipment.component';
import { ExtensionComponent } from './views/estimating-layout/extension/extension.component';
import { FinalPricingComponent } from './views/estimating-layout/final-pricing/final-pricing.component';
import { GeneralExpensesComponent } from './views/estimating-layout/general-expenses/general-expenses.component';
import { HelpComponent } from './help/help.component';
import { IncidentalLaborComponent } from './views/estimating-layout/incidental-labor/incidental-labor.component';
import { IndicatorsComponent } from './views/estimating-layout/indicators/indicators.component';
import { IndirectLaborComponent } from './views/estimating-layout/indirect-labor/indirect-labor.component';
import { LaborColumnComponent } from './views/estimating-layout/labor-column/labor-column.component';
import { LaborEscalationComponent } from './views/estimating-layout/labor-escalation/labor-escalation.component';
import { LaborFactorComponent } from './views/estimating-layout/labor-factor/labor-factor.component';
import { MarketComparisonComponent } from './views/estimating-layout/analytics/visualization/market-comparison/market-comparison.component';
import { NewEstimateComponent } from './views/modals/new-estimate/new-estimate.component';
import { ProjectCategoriesComponent } from './views/estimating-layout/setup/project-info/project-categories/project-categories.component';
import { QuotedMaterialsComponent } from './views/estimating-layout/quoted-materials/quoted-materials.component';
import { ReportStylesComponent } from './views/widgets/report-styles/report-styles.component';
import { SubcontractorsComponent } from './views/estimating-layout/subcontractors/subcontractors.component';
import { TakeoffComponent } from './views/estimating-layout/takeoff/takeoff.component';
import { TemplatesComponent } from './views/navigation/header/templates/templates.component';
import { TotalsFooterComponent } from './views/navigation/totals-footer/totals-footer.component';
import { TradesComponent } from './views/estimating-layout/setup/trades/trades.component';
import { GroupExtensionComponent } from './views/estimating-layout/extension/group-extension/group-extension.component';
import { VisualizationComponent } from './views/estimating-layout/analytics/visualization/visualization.component';
import { DirectLaborComponent } from './views/estimating-layout/direct-labor/direct-labor.component';
import { HeaderComponent } from './views/navigation/header/header.component';
import { ManageEstimateComponent } from './views/estimating-layout/manage-estimate/manage-estimate.component';
import { EstimatingLayoutComponent } from './views/estimating-layout/estimating-layout.component';
import { SetupComponent } from './views/estimating-layout/setup/setup.component';
import { ActiveEstimatesComponent } from './views/widgets/active-estimates/active-estimates.component';
import { CostSfComponent } from './views/widgets/cost-sf/cost-sf.component';
import { CostSystemComponent } from './views/widgets/cost-system/cost-system.component';
import { DatabaseComponent } from './views/widgets/database/database.component';
import { EstimateCalendarComponent } from './views/widgets/estimate-calendar/estimate-calendar.component';
import { EstimateProgressComponent } from './views/widgets/estimate-progress/estimate-progress.component';
import { ProjectTemplatesComponent } from './views/widgets/project-templates/project-templates.component';
import { TeamManagementComponent } from './views/widgets/team-management/team-management.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SetupModule,
    RouterModule,
    EstimatesRoutes
  ],

  declarations: [
    EstimatesComponent,
    AnalyticsComponent,
    BreakdownComponent,
    ContractBuilderComponent,
    DatabaseSidenavComponent,
    EquipmentComponent,
    ExtensionComponent,
    FinalPricingComponent,
    GeneralExpensesComponent,
    HelpComponent,
    IncidentalLaborComponent,
    IndicatorsComponent,
    IndirectLaborComponent,
    LaborColumnComponent,
    LaborEscalationComponent,
    LaborFactorComponent,
    MarketComparisonComponent,
    NewEstimateComponent,
    ProjectCategoriesComponent,
    QuotedMaterialsComponent,
    SubcontractorsComponent,
    TakeoffComponent,
    TemplatesComponent,
    TotalsFooterComponent,
    TradesComponent,
    VisualizationComponent,
    GroupExtensionComponent,
    DirectLaborComponent,
    HeaderComponent,
    ManageEstimateComponent,
    EstimatingLayoutComponent,
    SetupComponent,
    EstimateScheduleComponent,
    ActiveEstimatesComponent,
    CostSfComponent,
    CostSystemComponent,
    DatabaseComponent,
    EstimateCalendarComponent,
    EstimateProgressComponent,
    ProjectTemplatesComponent,
    ReportStylesComponent,
    TeamManagementComponent,
    HelpComponent
  ]
})
export class EstimatesModule {}

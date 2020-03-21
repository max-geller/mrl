import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportComponent } from './support.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

const routes: Routes = [
  { path: '', component: SupportComponent },
  { path: 'new-ticket', component: NewTicketComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutes { }

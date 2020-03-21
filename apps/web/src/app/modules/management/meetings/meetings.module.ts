import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { MeetingsRoutes } from './meetings.routes';

import { MeetingsComponent } from './meetings.component';

import { MeetingService } from './meetings.service';
import { EditAgendaComponent } from './edit-agenda/edit-agenda.component';
import { ManageMeetingsComponent } from './manage-meetings/manage-meetings.component';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';
import { NewAgendaComponent } from './new-agenda/new-agenda.component';
import { NewMeetingComponent } from './new-meeting/new-meeting.component';
import { NewTemplateComponent } from './new-template/new-template.component';
import { NewTopicComponent } from './new-topic/new-topic.component';

@NgModule({
  imports: [CommonModule, SharedModule, MeetingsRoutes],
  declarations: [
    MeetingsComponent,
    EditAgendaComponent,
    ManageMeetingsComponent,
    MeetingDetailsComponent,
    NewAgendaComponent,
    NewMeetingComponent,
    NewTemplateComponent,
    NewTopicComponent
  ],
  providers: [MeetingService]
})
export class MeetingsModule {}

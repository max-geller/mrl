import { Component, OnInit } from '@angular/core';
import { Meeting, MeetingService } from './meetings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  meetings$: Observable<Meeting[]>;

  displayedColumns: string[] = [ 'name', 'priority', 'creator' ];
  constructor(private meetingService: MeetingService) {    
  }

  ngOnInit() {
    this.meetings$ = this.meetingService.getAll();
  }
}
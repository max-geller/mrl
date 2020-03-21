import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog, MatSort } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

interface Estimates {
  project?: string;
  designPhase?: string;
  designProgress?: string;
  client?: string;
  category?: string;
  laborHours?: string;
  totalCost?: string;
  type?: string;
  lastSaved?: string;
  status?: string;
}

@Component({
  selector: 'app-estimate-schedule',
  templateUrl: './estimate-schedule.component.html',
  styleUrls: ['./estimate-schedule.component.scss']
})
export class EstimateScheduleComponent {

  activeEstimates: MatTableDataSource <any>;
  displayedColumns = [
    'category',
    'project',
    'designPhase',
    "designProgress",
    "client",
    "laborHours",
    "totalCost",
    "type",
    'lastSaved',
    'status',
    'actions'
  ];

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {}

  ngOnInit() {
    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collection<any>('estimates')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.activeEstimates = new MatTableDataSource(data);
        this.activeEstimates.sort = this.sort;
      });
  }

  // Use the filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.activeEstimates.filter = filterValue;
  }
}

import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatDialog } from '@angular/material';

@Component({
  selector: 'app-submittals',
  templateUrl: './submittals.component.html',
  styleUrls: ['./submittals.component.scss']
})
export class SubmittalsComponent implements OnInit {
  projects: MatTableDataSource<any>;
  displayedColumns = [
    'projectName',
    'lastModified',
    'createdDate',
    'isActive',
    'actions'
  ];
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {}

  ngOnInit() {
    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collection<any>('projects')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.projects = new MatTableDataSource(data);
        this.projects.sort = this.sort;
      });
  }

    // Use the filter
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.projects.filter = filterValue;
    }
  
    // Open the EditTaskComponent


}
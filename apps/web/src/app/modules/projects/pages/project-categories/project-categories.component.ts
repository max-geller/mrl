import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { TaskService } from '../../../tasks/services/task.service';
import { NewProjectCategoryComponent } from '../../modals/new-project-category/new-project-category.component';
import { EditProjectCategoryComponent } from '../../modals/edit-project-category/edit-project-category.component';

@Component({
  selector: 'app-edit-project-types',
  templateUrl: './project-categories.component.html',
  styleUrls: ['./project-categories.component.scss']
})
export class ProjectCategoriesComponent implements OnInit {
  // Configure Material Data Table:
  userDoc: AngularFirestoreDocument;
  tasks: MatTableDataSource<any>;
  displayedColumns = [
    'description',
    'dueDate',
    'effort',
    'priority',
    'status',
    'actions'
  ];

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private afs: AngularFirestore,
    private taskService: TaskService,
    public dialog: MatDialog) {}

  ngOnInit() {
    this.afs
      .collection<any>('tasks').valueChanges()
      .subscribe(data => {
        this.tasks = new MatTableDataSource(data);
        this.tasks.sort = this.sort;
      });
  }

  // Use the filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.tasks.filter = filterValue;
  }

  // Open the EditTaskComponent
  editTask(): void {
    const dialogRef = this.dialog.open(EditProjectCategoryComponent, {
      width: '350px',
      height: '550px',
    });
  }

  newTask(): void {
    const dialogRef = this.dialog.open(NewProjectCategoryComponent, {
      width: '350px',
      height: '650px',
    });
  }
}

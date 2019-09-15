import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { PeopleService } from 'src/services/people.service';
import { People } from './../services/people';
import { ViewCharacterComponent } from './view-character/view-character.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'gender', 'eye_color', 'height', 'birth_year'];
  peopleDatabase: PeopleService | null;
  data = [];
  dataSource = new MatTableDataSource(this.data);

  resultsLength = 0;
  isLoading = true;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog) { }

  ngAfterViewInit() {

    this.peopleDatabase = new PeopleService(this.httpClient);

    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoading = true;
          return this.peopleDatabase!.getAll(this.paginator.pageIndex);
        }),
        map(data => {
          this.isLoading = false;
          this.resultsLength = data.count;
          return data.results;
        }),
        catchError(() => {
          this.isLoading = false;
          return observableOf([]);
        })
      ).subscribe(data => {
        this.dataSource.data = data as People[];
      });
  }

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewCharacter(character) {
    const dialogRef = this.dialog.open(ViewCharacterComponent, {
      height: '600px',
      width: '768px',
      data: { character }
    });
  }
}

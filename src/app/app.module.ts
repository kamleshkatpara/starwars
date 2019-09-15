import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatProgressSpinnerModule
 } from '@angular/material';
import { PeopleService } from './../services/people.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewCharacterComponent } from './view-character/view-character.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewCharacterComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  entryComponents: [ViewCharacterComponent],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

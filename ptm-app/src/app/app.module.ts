/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { MessagesComponent } from './messages/messages.component';
import { SelectorComponent } from './selector/selector.component';
import { OverviewHoursDayComponent } from './overview-hours-day/overview-hours-day.component';
import { OverviewHoursWorkedComponent } from './overview-hours-worked/overview-hours-worked.component';
import { OverviewHoursProjectComponent } from './overview-hours-project/overview-hours-project.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    MessagesComponent,
    SelectorComponent,
    OverviewHoursDayComponent,
    OverviewHoursWorkedComponent,
    OverviewHoursProjectComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

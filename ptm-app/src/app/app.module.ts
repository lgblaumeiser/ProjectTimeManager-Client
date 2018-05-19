import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectorComponent } from './selector/selector.component';
import { OverviewHoursDayComponent } from './overview-hours-day/overview-hours-day.component';
import { OverviewHoursWorkedComponent } from './overview-hours-worked/overview-hours-worked.component';
import { OverviewHoursProjectComponent } from './overview-hours-project/overview-hours-project.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    BookingDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SelectorComponent,
    OverviewHoursDayComponent,
    OverviewHoursWorkedComponent,
    OverviewHoursProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

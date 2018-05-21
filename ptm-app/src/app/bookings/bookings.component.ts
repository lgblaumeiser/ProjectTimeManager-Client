/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Component, OnInit, Input } from '@angular/core';

import { Activity } from '../activity';
import { Booking } from '../booking';

import { BookingService } from '../booking.service';
import { ActivityService } from '../activity.service';
import { DayService } from '../day.service';
import { UserService } from '../user.service';
import { UpdaterService } from '../updater.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[];
  bookingday: string;
  @Input() selectedBooking: Booking;
  activities: Activity[];

  constructor(
    private bookingService: BookingService,
    private activityService: ActivityService,
    private dayService: DayService,
    private userService: UserService,
    private updaterService: UpdaterService
  ) {
    this.selectedBooking = new Booking();
    this.selectedBooking.starttime = '';
    this.selectedBooking.endtime = '';
    this.selectedBooking.bookingday = this.dayService.getDay();
    this.selectedBooking.user = '';
    this.selectedBooking.comment = '';
  }

  ngOnInit() {
    this.handleNewDay(this.dayService.getDay());
    this.readActivities(undefined);
    this.dayService.getDayObs().subscribe(newDay => this.handleNewDay(newDay));
    this.updaterService.getUpdates().subscribe(() => {
      this.handleNewDay(this.bookingday);
      if (this.selectedBooking) {
        this.readActivities(this.selectedBooking.activity);
      }
    });
  }

  private handleNewDay(newDay: string): void {
    this.bookingday = newDay;
    this.bookingService.getBookings(this.bookingday).subscribe(bookings => this.bookings = bookings);
  }

  private readActivities(currentActivity: Activity) {
    this.activityService.getActivities().subscribe(activities => this.preprocessActivities(activities, currentActivity));
  }

  private preprocessActivities(activities: Activity[], currentActivity: Activity) {
    this.activities = activities.filter(activity => activity.hidden === false);
    if (currentActivity) {
      this.activities = this.activities.filter(activity => activity.id != currentActivity.id);
      this.activities = this.activities.concat(currentActivity);
    }
  }

  onSelect(booking: Booking): void {
    this.selectedBooking = booking;
    this.readActivities(this.selectedBooking.activity);
  }

  add(): void {
    if (this.selectedBooking) {
      this.selectedBooking.user = this.userService.getUser();
      this.selectedBooking.bookingday = this.bookingday;
      this.bookingService.addBooking(this.selectedBooking).subscribe(booking => this.updaterService.update());
    }
  }

  change(): void {
    if (this.selectedBooking) {
      this.bookingService.updateBooking(this.selectedBooking).subscribe(() => this.updaterService.update());
    }
  }

  delete(): void {
    if (this.selectedBooking) {
      this.bookingService.deleteBooking(this.selectedBooking).subscribe(() => this.updaterService.update());
    }
  }
}


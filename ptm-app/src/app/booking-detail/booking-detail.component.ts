/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Component, OnInit, Input } from '@angular/core';

import { Activity } from '../activity';
import { Booking } from '../booking';

import { BookingService }  from '../booking.service';
import { DayService } from '../day.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  @Input() booking: Booking;

  constructor(private bookingService: BookingService, private dayService: DayService) {
    this.booking = new Booking();
    this.booking.starttime = '';
    this.booking.endtime = '';
    this.booking.bookingday = this.dayService.getDay();
    this.booking.user = '';
    this.booking.comment = '';
    this.booking.id = -1;
  }

  ngOnInit() { }

  add(): void {
  }

  change(): void {
//    this.bookingService.updateBooking(this.booking).subscribe(() => this.goBack());
  }
}

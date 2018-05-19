/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Component, OnInit } from '@angular/core';

import { Activity } from '../activity';
import { Booking } from '../booking';

import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.getBookings();
  }

  getBookings(): void {
    this.bookingService.getBookings().subscribe(bookings => this.bookings = bookings);
  }
}

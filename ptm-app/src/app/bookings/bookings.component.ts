/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Component, OnInit } from '@angular/core';

import { Activity } from '../activity';
import { Booking } from '../booking';

import { BookingService } from '../booking.service';

import { DayService } from '../day.service';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[];
  bookingday: string;
  selectedBooking: Booking;

  constructor(private bookingService: BookingService, private dayService: DayService, private messageService: MessageService) { }

  ngOnInit() {
    this.bookingday = this.dayService.getDay();
    this.getBookings();
    this.log(`Component Initialized, day: ${this.bookingday}`);
  }

  getBookings(): void {
    this.bookingService.getBookings(this.bookingday).subscribe(bookings => this.bookings = bookings);
  }

  private log(message: string) {
    this.messageService.add('BookingsComponent: ' + message);
  }

  onSelect(booking: Booking): void {
    this.selectedBooking = booking;
  }
}

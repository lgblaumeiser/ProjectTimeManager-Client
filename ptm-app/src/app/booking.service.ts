/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Activity } from './activity';
import { Booking } from './booking';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookingsUrl = 'http://localhost:8080/bookings/';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getBookings(day: string): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.bookingsUrl}${day}`).pipe(
      tap(bookings => this.log(`fetched bookings for day ${day}`)),
      catchError(this.handleError('getBookings', []))
    );
  }

  addBooking(booking: Booking): Observable<Booking> {
    var sendData = new BookingData();
    sendData.activityId = booking.activity.id.toString();
    sendData.user = booking.user;
    sendData.starttime = booking.starttime;
    sendData.endtime = booking.endtime;
    sendData.comment = booking.comment;
    return this.http.post(`${this.bookingsUrl}${booking.bookingday}`, sendData, httpOptions).pipe(
      tap(_ => this.log(`added booking`)),
      catchError(this.handleError<any>('addBooking'))
    );
  }

  updateBooking(booking: Booking): Observable<any> {
    var sendData = new BookingData();
    sendData.activityId = booking.activity.id.toString();
    sendData.user = booking.user;
    sendData.starttime = booking.starttime;
    sendData.endtime = booking.endtime;
    sendData.comment = booking.comment;
    return this.http.post(`${this.bookingsUrl}${booking.bookingday}/${booking.id}`, sendData, httpOptions).pipe(
      tap(_ => this.log(`updated booking id=${booking.id}`)),
      catchError(this.handleError<any>('updateBooking'))
    );
  }

  deleteBooking(booking: Booking): Observable<any> {
    return this.http.delete(`${this.bookingsUrl}${booking.bookingday}/${booking.id}`).pipe(
      tap(_ => this.log(`deleted booking id=${booking.id}`)),
      catchError(this.handleError<any>('deleteBooking'))
    );
  }

  private log(message: string): void {
    this.messageService.add('BookingService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

class BookingData {
  activityId: string;
  user: string;
  starttime: string;
  endtime: string;
  comment: string;
}

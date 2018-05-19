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
  private bookingsUrl = 'http://localhost:8080/bookings/2017-07-26';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.bookingsUrl).pipe(
      tap(bookings => this.log('fetched bookings')),
      catchError(this.handleError('getBookings', []))
    );
  }

  getBooking(id: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.bookingsUrl}/${id}`).pipe(
      tap(_ => this.log(`fetched booking id=${id}`)),
      catchError(this.handleError<Booking>(`getBooking id=${id}`))
    );
  }

  updateBooking(booking: Booking): Observable<any> {
    return this.http.put(`${this.bookingsUrl}/${booking.id}`, booking, httpOptions).pipe(
      tap(_ => this.log(`updated booking id=${booking.id}`)),
      catchError(this.handleError<any>('updateBooking'))
    );
  }

  /** Log a BookingService message with the MessageService */
  private log(message: string) {
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

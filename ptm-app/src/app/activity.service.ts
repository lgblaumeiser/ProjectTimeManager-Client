/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';

import { Activity } from './activity';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activityUrl = 'http://localhost:8080/activities/';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.activityUrl}`).pipe(
      tap(activities => this.log('fetched activities')),
      catchError(this.handleError('getActivities', []))
    );
  }

  addActivity(activity: Activity): Observable<any> {
    return this.http.post(`${this.activityUrl}`, activity, httpOptions).pipe(
      tap(_ => this.log(`created activity ${activity.activityName}`)),
      catchError(this.handleError<any>('addActivity'))
    );
  }

  updateActivity(activity: Activity): Observable<any> {
    return this.http.post(`${this.activityUrl}${activity.id}`, activity, httpOptions).pipe(
      tap(_ => this.log(`created activity ${activity.activityName}`)),
      catchError(this.handleError<any>('addActivity'))
    );
  }

  private log(message: string) {
    this.messageService.add('ActivityService: ' + message);
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

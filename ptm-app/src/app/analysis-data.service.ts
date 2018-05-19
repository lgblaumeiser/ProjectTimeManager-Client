import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AnalysisDataService {
  private ptmUrl = 'http://localhost:8080/analysis/';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getWorkedHoursOfMonth(month: string): Observable<string[][]> {
    const url = `${this.ptmUrl}hours/${month}`;
    return this.http.get<string[][]>(url).pipe(
      tap(results => this.log('fetched work hour analysis results')),
      catchError(this.handleError('getWorkedHoursOfMonth', []))
    );
  }

  getProjectHours(timeframe: string): Observable<string[][]> {
    const url = `${this.ptmUrl}projects/${timeframe}`;
    return this.http.get<string[][]>(url).pipe(
      tap(results => this.log('fetched project hour analysis results')),
      catchError(this.handleError('getProjectHours', []))
    );
  }

  /** Log a AnalysisDataService message with the MessageService */
  private log(message: string) {
    this.messageService.add('AnalysisDataService: ' + message);
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

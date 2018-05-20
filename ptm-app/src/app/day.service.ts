/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  private currentDay: string;
  private currentMonth:string;
  private currentDaySjt: Subject<string>;
  private currentMonthSjt: Subject<string>;
  private currentDayObs: Observable<string>;
  private currentMonthObs: Observable<string>;

  constructor(private messageService: MessageService) {
    this.currentDaySjt = new Subject<string>();
    this.currentDayObs = this.currentDaySjt.asObservable();
    this.currentMonthSjt = new Subject<string>();
    this.currentMonthObs = this.currentMonthSjt.asObservable();

    var today = new Date();
    var currentDayString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    this.setDay(currentDayString);
  }

  getDay(): string {
    return this.currentDay;
  }

  getDayObs(): Observable<string> {
    return this.currentDayObs;
  }

  getMonth(): string {
    return this.currentMonth;
  }

  getMonthObs(): Observable<string> {
    return this.currentMonthObs;
  }

  /** Log a DayService message with the MessageService */
  private log(message: string) {
    this.messageService.add('DayService: ' + message);
  }

  setDay(newDay: string): void {
    this.log(`New day: ${newDay}, new month: ${newDay.substring(0, 7)}`);
    if(newDay.length == 10) {
      this.currentDay = newDay;
      this.currentMonth = newDay.substring(0, 7);
      this.currentDaySjt.next(this.currentDay);
      this.currentMonthSjt.next(this.currentMonth);
    }
  }
}

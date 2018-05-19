import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  private currentDay: Subject<string>;
  private currentMonth: Subject<string>;
  private currentDayObs: Observable<string>;
  private currentMonthObs: Observable<string>;

  constructor(private messageService: MessageService) {
    this.currentDay = new Subject<string>();
    this.currentDayObs = this.currentDay.asObservable();
    this.currentMonth = new Subject<string>();
    this.currentMonthObs = this.currentMonth.asObservable();
  }

  getDay(): Observable<string> {
    return this.currentDayObs
  }

  getMonth(): Observable<string> {
    return this.currentMonthObs;
  }

  /** Log a DayService message with the MessageService */
  private log(message: string) {
    this.messageService.add('DayService: ' + message);
  }

  setDay(newDay: string): void {
    this.log(`New day: ${newDay}, new month: ${newDay.substring(0, 7)}`);
    if(newDay.length == 10) {
      this.currentDay.next(newDay);
      this.currentMonth.next(newDay.substring(0, 7));
    }
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdaterService {
  private updateSubject: Subject<string>;
  private updateObs: Observable<string>;
  private valueString = 'Next Value';

  constructor() {
    this.updateSubject = new Subject<string>();
    this.updateObs = this.updateSubject.asObservable();
  }

  update(): void {
    this.updateSubject.next(this.valueString);
  }

  getUpdates(): Observable<string> {
    return this.updateObs;
  }
}

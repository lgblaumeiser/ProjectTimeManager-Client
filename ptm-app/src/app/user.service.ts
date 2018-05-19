import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: string;

  constructor() { }

  getUser(): Observable<string> {
    return of(this.currentUser)
  }

  setUser(newUser: string): void {
    this.currentUser = newUser;
  }
}

/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: string;

  constructor() { }

  getUser(): string {
    return this.currentUser
  }

  setUser(newUser: string): void {
    this.currentUser = newUser;
  }
}

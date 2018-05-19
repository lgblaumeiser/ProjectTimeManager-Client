/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

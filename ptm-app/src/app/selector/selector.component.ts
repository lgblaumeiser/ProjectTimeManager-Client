/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Component, OnInit, Input } from '@angular/core';

import { tap } from 'rxjs/operators';

import { DayService } from '../day.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  @Input() day: string;
  @Input() user: string;

  constructor(
    private dayService: DayService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getDay();
    this.user = this.userService.getUser();
  }

  getDay(): void {
    this.day = this.dayService.getDay();
    this.dayService.getDayObs().subscribe(day => this.day = day);
  }

  onSelect(): void {
    this.dayService.setDay(this.day);
    this.userService.setUser(this.user);
  }
}

import { Component, OnInit, Input } from '@angular/core';

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
    this.getUser();
  }

  getDay(): void {
    this.dayService.getDay().subscribe(day => this.day = day);
  }

  getUser(): void {
    this.userService.getUser().subscribe(user => this.user = user);
  }

  onSelect(): void {
    this.dayService.setDay(this.day);
    this.userService.setUser(this.user);
  }
}

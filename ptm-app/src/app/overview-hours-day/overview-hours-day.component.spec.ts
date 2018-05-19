/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewHoursDayComponent } from './overview-hours-day.component';

describe('OverviewHoursDayComponent', () => {
  let component: OverviewHoursDayComponent;
  let fixture: ComponentFixture<OverviewHoursDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewHoursDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewHoursDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

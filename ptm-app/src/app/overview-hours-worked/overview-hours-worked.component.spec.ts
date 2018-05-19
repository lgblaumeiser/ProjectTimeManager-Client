/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewHoursWorkedComponent } from './overview-hours-worked.component';

describe('OverviewHoursWorkedComponent', () => {
  let component: OverviewHoursWorkedComponent;
  let fixture: ComponentFixture<OverviewHoursWorkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewHoursWorkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewHoursWorkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

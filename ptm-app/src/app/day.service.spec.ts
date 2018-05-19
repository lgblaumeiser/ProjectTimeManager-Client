/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { TestBed, inject } from '@angular/core/testing';

import { DayService } from './day.service';

describe('DayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DayService]
    });
  });

  it('should be created', inject([DayService], (service: DayService) => {
    expect(service).toBeTruthy();
  }));
});

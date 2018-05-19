/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { TestBed, inject } from '@angular/core/testing';

import { BookingService } from './booking.service';

describe('BookingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingService]
    });
  });

  it('should be created', inject([BookingService], (service: BookingService) => {
    expect(service).toBeTruthy();
  }));
});

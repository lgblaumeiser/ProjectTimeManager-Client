/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { TestBed, inject } from '@angular/core/testing';

import { AnalysisDataService } from './analysis-data.service';

describe('AnalysisDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalysisDataService]
    });
  });

  it('should be created', inject([AnalysisDataService], (service: AnalysisDataService) => {
    expect(service).toBeTruthy();
  }));
});

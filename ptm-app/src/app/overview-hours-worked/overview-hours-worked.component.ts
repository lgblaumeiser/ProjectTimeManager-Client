/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Component, OnInit, Input } from '@angular/core';

import { AnalysisDataService } from '../analysis-data.service';
import { DayService } from '../day.service';

@Component({
  selector: 'app-overview-hours-worked',
  templateUrl: './overview-hours-worked.component.html',
  styleUrls: ['./overview-hours-worked.component.css']
})
export class OverviewHoursWorkedComponent implements OnInit {
  analysisData: string[][];

  constructor(
    private dayService: DayService,
    private analysisDataService: AnalysisDataService
  ) { }

  ngOnInit() {
    this.getAnalysisData();
  }

  getAnalysisData(): void {
    this.dayService.getMonth().subscribe(
      newMonth => this.analysisDataService.getWorkedHoursOfMonth(newMonth)
        .subscribe(analysisData => this.analysisData = analysisData));
  }
}

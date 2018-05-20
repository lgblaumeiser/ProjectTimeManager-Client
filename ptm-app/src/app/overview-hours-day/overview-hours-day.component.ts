/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Component, OnInit } from '@angular/core';

import { AnalysisDataService } from '../analysis-data.service';
import { DayService } from '../day.service';

@Component({
  selector: 'app-overview-hours-day',
  templateUrl: './overview-hours-day.component.html',
  styleUrls: ['./overview-hours-day.component.css']
})
export class OverviewHoursDayComponent implements OnInit {
  analysisData: string[][];

  constructor(
    private dayService: DayService,
    private analysisDataService: AnalysisDataService
  ) { }

  ngOnInit() {
    this.getAnalysisData();
  }

  getAnalysisData(): void {
    this.analysisDataService.getProjectHours(this.dayService.getDay())
      .subscribe(analysisData => this.analysisData = analysisData);
    this.dayService.getDayObs().subscribe(
      newDay => this.analysisDataService.getProjectHours(newDay)
        .subscribe(analysisData => this.analysisData = analysisData));
  }
}

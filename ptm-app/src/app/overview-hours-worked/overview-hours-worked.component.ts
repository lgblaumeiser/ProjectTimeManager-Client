/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Component, OnInit, Input } from '@angular/core';

import { AnalysisDataService } from '../analysis-data.service';
import { DayService } from '../day.service';
import { UpdaterService } from '../updater.service';

@Component({
  selector: 'app-overview-hours-worked',
  templateUrl: './overview-hours-worked.component.html',
  styleUrls: ['./overview-hours-worked.component.css']
})
export class OverviewHoursWorkedComponent implements OnInit {
  analysisData: string[][];

  constructor(
    private dayService: DayService,
    private analysisDataService: AnalysisDataService,
    private updaterService: UpdaterService
  ) { }

  ngOnInit() {
    this.handleNewMonth(this.dayService.getMonth());
    this.dayService.getMonthObs().subscribe(newMonth => this.handleNewMonth(newMonth));
    this.updaterService.getUpdates().subscribe(() => this.handleNewMonth(this.dayService.getMonth());
  }

  private handleNewMonth(newMonth: string): void {
    this.analysisDataService.getWorkedHoursOfMonth(newMonth).subscribe(analysisData => this.analysisData = analysisData);
  }
}

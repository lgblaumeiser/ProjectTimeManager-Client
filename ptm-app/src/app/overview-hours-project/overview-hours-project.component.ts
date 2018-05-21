/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Component, OnInit } from '@angular/core';

import { AnalysisDataService } from '../analysis-data.service';
import { DayService } from '../day.service';
import { UpdaterService } from '../updater.service';

@Component({
  selector: 'app-overview-hours-project',
  templateUrl: './overview-hours-project.component.html',
  styleUrls: ['./overview-hours-project.component.css']
})
export class OverviewHoursProjectComponent implements OnInit {
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
    this.analysisDataService.getProjectHours(newMonth).subscribe(analysisData => this.analysisData = analysisData);
  }
}

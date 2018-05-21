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
  selector: 'app-overview-hours-day',
  templateUrl: './overview-hours-day.component.html',
  styleUrls: ['./overview-hours-day.component.css']
})
export class OverviewHoursDayComponent implements OnInit {
  analysisData: string[][];

  constructor(
    private dayService: DayService,
    private analysisDataService: AnalysisDataService,
    private updaterService: UpdaterService
  ) { }

  ngOnInit() {
    this.handleNewDay(this.dayService.getDay());
    this.dayService.getDayObs().subscribe(newDay => this.handleNewDay(newDay));
    this.updaterService.getUpdates().subscribe(() => this.handleNewDay(this.dayService.getDay());
  }

  private handleNewDay(newDay: string): void {
    this.analysisDataService.getProjectHours(newDay).subscribe(analysisData => this.analysisData = analysisData);
  }
}

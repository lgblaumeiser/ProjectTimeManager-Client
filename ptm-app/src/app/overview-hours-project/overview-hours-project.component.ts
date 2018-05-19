import { Component, OnInit } from '@angular/core';

import { AnalysisDataService } from '../analysis-data.service';
import { DayService } from '../day.service';

@Component({
  selector: 'app-overview-hours-project',
  templateUrl: './overview-hours-project.component.html',
  styleUrls: ['./overview-hours-project.component.css']
})
export class OverviewHoursProjectComponent implements OnInit {
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
      newMonth => this.analysisDataService.getProjectHours(newMonth)
        .subscribe(analysisData => this.analysisData = analysisData));
  }
}

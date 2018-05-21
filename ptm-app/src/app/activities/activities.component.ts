/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { Component, OnInit, Input } from '@angular/core';

import { Activity } from '../activity';

import { ActivityService } from '../activity.service';
import { UpdaterService } from '../updater.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[];
  @Input() selectedActivity: Activity;

  constructor(
    private activityService: ActivityService,
    private updaterService: UpdaterService
  ) {
    this.selectedActivity = new Activity();
    this.selectedActivity.activityName = '';
    this.selectedActivity.bookingNumber = '';
    this.selectedActivity.hidden = false;
  }

  ngOnInit() {
    this.getActivities();
    this.updaterService.getUpdates().subscribe(() => this.getActivities());
  }

  getActivities(): void {
    this.activityService.getActivities().subscribe(activities => this.activities = activities);
  }

  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }

  add(): void {
    if (this.selectedActivity) {
      this.activityService.addActivity(this.selectedActivity).subscribe(activity => this.updaterService.update());
    }
  }

  change(): void {
    if (this.selectedActivity) {
      this.activityService.updateActivity(this.selectedActivity).subscribe(() => this.updaterService.update());
    }
  }
}

/*
 * Copyright by Lars Geyer-Blaumeiser <lgblaumeiser@gmail.com>
 *
 * Licensed under MIT license
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingsComponent } from './bookings/bookings.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ActivitiesComponent } from './activities/activities.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'activities', component: ActivitiesComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

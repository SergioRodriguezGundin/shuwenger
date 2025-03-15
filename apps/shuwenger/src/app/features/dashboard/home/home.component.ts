import { Component } from '@angular/core';
import { RacesCalendarComponent } from '../../schedule/components/races-calendar/races-calendar.component';
import { DriverStatsComponent } from '../../drivers/components/driver-stats/driver-stats.component';
import { TeamListComponent } from '@f1/teams/lib/components/team-list/team-list.component';

@Component({
  selector: 'app-home',
  imports: [RacesCalendarComponent, DriverStatsComponent, TeamListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}

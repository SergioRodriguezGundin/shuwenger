import { Component } from '@angular/core';
import { RacesCalendarComponent } from '../../schedule/components/races-calendar/races-calendar.component';
import { DriversTeamsComponent } from '../../teams/components/drivers-teams/drivers-teams.component';
import { DriverStatsComponent } from '../../drivers/components/driver-stats/driver-stats.component';

@Component({
  selector: 'app-home',
  imports: [
    RacesCalendarComponent,
    DriverStatsComponent,
    DriversTeamsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}

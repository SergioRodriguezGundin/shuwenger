import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NextCurrentRaceComponent } from '../next-current-race/next-current-race.component';

@Component({
  selector: 'app-races-calendar',
  templateUrl: './races-calendar.component.html',
  styleUrls: ['./races-calendar.component.css'],
  imports: [NextCurrentRaceComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RacesCalendarComponent {}

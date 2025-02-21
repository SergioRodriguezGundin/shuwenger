import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-races',
  templateUrl: './races.component.html',
  imports: [],
})
export class RacesComponent {}

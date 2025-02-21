import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  imports: [],
})
export class TeamsComponent {}

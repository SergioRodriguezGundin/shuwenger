import { Component } from '@angular/core';
import { TeamsComponent } from '@f1/teams/lib/components/teams/teams.component';

@Component({
  selector: 'app-drivers-teams',
  templateUrl: './drivers-teams.component.html',
  imports: [TeamsComponent],
})
export class DriversTeamsComponent {}

import { ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsStore } from '../../store/teams.store';
@Component({
  selector: 'lib-f1-teams',
  templateUrl: './teams.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsComponent implements OnInit {
  readonly teamsStore = inject(TeamsStore);

  ngOnInit() {
    this.teamsStore.setTeams();
  }
}
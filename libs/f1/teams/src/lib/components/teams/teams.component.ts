import { ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsStore } from '../../store/teams.store';

@Component({
  selector: 'lib-f1-teams',
  templateUrl: './teams.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsComponent{
  readonly teamsStore = inject(TeamsStore);

  teams = computed(() => this.teamsStore.teams());

  setYear(year: string) {
    this.teamsStore.setYear(year);
  }
}
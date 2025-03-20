import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsStore } from '../../store/teams.store';

@Component({
  selector: 'lib-f1-team-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamListComponent {
  readonly teamsStore = inject(TeamsStore);
  teams = computed(() => this.teamsStore.teams());
  skeletonLoader = Array(10).fill('');

  setYear(year: string) {
    this.teamsStore.setYear(year);
  }
}

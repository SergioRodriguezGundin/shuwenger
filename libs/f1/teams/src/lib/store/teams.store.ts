import { computed, inject, resource, ResourceStatus } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withProps, withState } from '@ngrx/signals';
import { TeamsService } from '../services/teams.service';

type TeamsStore = {
  year: string;
}

const initialState: TeamsStore = {
  year: '2024',
};

export const TeamsStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withProps(() => ({
    _teamsService: inject(TeamsService),
  })),
  withProps((store) => ({
    _teamsResource: resource({
      request: store.year,
      loader: ({request: year}) => {
        return store._teamsService.teams(year);
      },
      defaultValue: [],
    })

  })),
  withComputed((store) => ({
    teams: computed(() => store._teamsResource.value()),
    totalTeams: computed(() => store._teamsResource.value().length),
    isLoading: computed(() => store._teamsResource.status() === ResourceStatus.Loading),
  })),
  withMethods((store) => ({
    setYear: (year: string) => {
      patchState(store, {year});
    },
  }))
);
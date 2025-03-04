import { computed, inject } from '@angular/core';
import { ITeam } from '@gunsrf1/api-contracts/src/teams/team.interface';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { TeamsService } from '../services/teams.service';

type TeamsStore = {
  teams: ITeam[] | undefined;
  isLoading: boolean;
}

const initialState: TeamsStore = {
  teams: [],
  isLoading: false,
};

export const TeamsStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withComputed(({teams}) => ({
    totalTeams: computed(() => teams.length),
  })),
  withMethods((store, teamsService =  inject(TeamsService)) => ({
    setTeams: async () => {
      patchState(store, {isLoading: true});
      const teams = await teamsService.getTeams();
      patchState(store, {teams, isLoading: false});
    },
  }))
);

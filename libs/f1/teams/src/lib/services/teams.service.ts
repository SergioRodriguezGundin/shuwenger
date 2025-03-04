import { inject, Injectable } from '@angular/core';
import { ITeam } from '@gunsrf1/api-contracts/src/teams/team.interface';
import { TrpcApiService } from '../../../../../trpc-f1/src/lib/services/trpc-api.service';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private readonly f1Api = inject(TrpcApiService);

  async getTeams(): Promise<ITeam[]> {
    try {
      return await this.f1Api.getF1Trpc().teams.getTeams.query({ year: '2024' });
    } catch (error) {
      console.error('Error fetching teams:', error);
      return [];
    }
  }
}

import { inject, Injectable } from '@angular/core';
import { ITeam } from '@gunsrf1/api-contracts/src/teams/teams.interface';
import { TrpcApiService } from '@trpc-f1/lib/services/trpc-api.service';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private readonly f1Api = inject(TrpcApiService);

  public teams(year: string): Promise<ITeam[]> {
    try {
      return this.f1Api.getF1Trpc().teams.getTeams.query({ year });
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

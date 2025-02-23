export interface Team {
  id: string;
  name: string;
  fullName: string;
  base: string;
  teamChief: string;
  technicalChief: string;
  chassis: string;
  powerUnit: string;
  firstTeamEntry: number;
  worldChampionships: number;
  logo?: string;
  color?: string;
}

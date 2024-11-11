export interface Game {
  id: number;
  sportType: string;
  first_team: string;
  second_team: string;
  odds: { first_team: number; second_team: number };
  bets: { first_team: number; second_team: number };
}

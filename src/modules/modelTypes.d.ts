export type Player = {
  id: number;
  rating: number;
  skillMoves: number;
  weakFoot: number;
  totalStatsInGame: number;
  rarity: number;
  color: string;
  commonName: string;
  league: number;
  position: string;
  pace: number;
  club: number;
  nation: number;
  playerPrice?: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physicality: number;
  goalkeeperAttributes: {
    diving: number | null;
    handling: number | null;
    kicking: number | null;
    positioning: number | null;
    reflexes: number | null;
    speed: number | null;
  };
};

export type PackT = {
  id: number;
  packRating: number;
  packColor: string;
  playersAmount: number;
  packAmount: number;
};

export type UserData = {
  login: string;
  uId: string | null;
  money: number;
  result: { wins: number; draws: number; loses: number };
  goals: { goalsFor: number; goalsAgainst: number };
};

export interface IClubTheme {
  id: number;
  name: string;
  logo: string;
  player?: string;
  clubData?: {
    league: string;
    stadium: string;
    capacity: string;
    manager: string;
    founded: string;
  };
  colors: {
    text: string;
    main: string;
    secondary: string;
  };
}

export type SectionRefType = "home" | "club" | "matches" | "packs" | "players";

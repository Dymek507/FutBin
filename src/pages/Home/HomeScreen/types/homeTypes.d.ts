export interface IClubTheme {
  id: number;
  name: string;
  logo: string;
  colors: {
    text: string;
    main: string;
    secondary: string;
  };
}

export type SectionRefType = "home" | "club" | "matches" | "packs" | "players";

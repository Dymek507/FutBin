import { SectionRefType } from "../types/homeTypes";

interface IViewsList {
  text: string;
  ref: SectionRefType;
  page: number;
}

export const VIEWS_LIST: IViewsList[] = [
  { text: "Home", ref: "home", page: 1 },
  { text: "Chose Team", ref: "club", page: 2 },
  { text: "Play matches", ref: "matches", page: 3 },
  { text: "Draw packs", ref: "packs", page: 4 },
  { text: "Assembly squad", ref: "players", page: 5 },
];

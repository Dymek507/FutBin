import { SectionRefType } from "../types/homeTypes";

interface IViewsList {
  text: string;
  ref: SectionRefType;
  page: number;
}

export const VIEWS_LIST: IViewsList[] = [
  { text: "Home", ref: "home", page: 1 },
  { text: "Team", ref: "team", page: 2 },
  { text: "Packs", ref: "packs", page: 3 },
  { text: "Players", ref: "players", page: 4 },
  { text: "Contact", ref: "contact", page: 5 },
];

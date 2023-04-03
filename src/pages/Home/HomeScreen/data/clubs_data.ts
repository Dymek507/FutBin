import clubLogos from "../../../../assets/landing_page/club_logos";
import { IClubTheme } from "../types/homeTypes";

export const CLUBS_DATA: IClubTheme[] = [
  {
    id: 1,
    name: "Manchester United",
    logo: clubLogos.united,
    colors: {
      text: "#fff",
      main: "#DA291C",
      secondary: "#000",
    },
  },
  {
    id: 2,
    name: "Chelsea FC",
    logo: clubLogos.chelsea,
    colors: {
      text: "#fff",
      main: "#034694",
      secondary: "#ec1b23",
    },
  },
  {
    id: 3,
    name: "Borusia Dortmund",
    logo: clubLogos.bvb,
    colors: {
      text: "#fff",
      main: "#FFD700",
      secondary: "#000",
    },
  },
  {
    id: 4,
    name: "Manchester City",
    logo: clubLogos.city,
    colors: {
      text: "#fff",
      main: "#1C2C5B",
      secondary: "#7bb1dd",
    },
  },
  {
    id: 5,
    name: "Inter Mediolan",
    logo: clubLogos.inter,
    colors: {
      text: "#fff",
      main: "#1165aa",
      secondary: "#000",
    },
  },
];

export const DEFAULT_CLUB: IClubTheme = {
  id: 0,
  name: "",
  logo: "",
  colors: {
    text: "E50000",
    main: "#045566",
    secondary: "white",
  },
};

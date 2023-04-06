import clubLogos from "../../../../assets/landing_page/club_logos";
import clubPlayer from "../../../../assets/landing_page/club_players";
import { IClubTheme } from "../types/homeTypes";

export const CLUBS_DATA: IClubTheme[] = [
  {
    id: 1,
    name: "Manchester United",
    logo: clubLogos.united,
    player: clubPlayer.rashford,
    clubData: {
      league: "Premier League",
      stadium: "Old Trafford",
      capacity: "75,635",
      manager: "Erik ten Hag",
      founded: "1878",
    },
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
    player: clubPlayer.reece,
    clubData: {
      league: "Premier League",
      stadium: "Stamford Bridge",
      capacity: "41,837",
      manager: "Frank Lampard",
      founded: "1905",
    },
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
    player: clubPlayer.reus,
    clubData: {
      league: "Bundesliga",
      stadium: "Signal Iduna Park",
      capacity: "81,365",
      manager: "Edin Terzić",
      founded: "1909",
    },
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
    player: clubPlayer.kevin,
    clubData: {
      league: "Premier League",
      stadium: "Etihad Stadium",
      capacity: "55,017",
      manager: "Pep Guardiola",
      founded: "1880",
    },
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
    player: clubPlayer.lautaro,
    clubData: {
      league: "Serie A",
      stadium: "San Siro",
      capacity: "80,018",
      manager: "Simone Inzaghi",
      founded: "1908",
    },
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
  player: "",
  colors: {
    text: "E50000",
    main: "#045566",
    secondary: "white",
  },
};

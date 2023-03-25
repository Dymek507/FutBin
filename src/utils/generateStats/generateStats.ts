import { Player } from "../../types/modelTypes";
import generatePrice from "../generatePrice/generatePrice";
import { changeToGkStats, choseBackground } from "./generateStatsFunctions";

const generateStats = (playerData: Player, type: string) => {
  // Start data and player stats destructuring
  let { commonName = "????", position = "??", rating = "??" } = playerData;

  //Change display stats for goalkeepers
  let {
    defending = "??",
    dribbling = "??",
    shooting = "??",
    pace = "??",
    passing = "??",
    physicality = "??",
  } = changeToGkStats(playerData) ?? playerData;

  //Change background color depending on player rarity
  const cardBackground = choseBackground(
    playerData.rarity,
    playerData.color,
    type as "card" | "line"
  );

  const { playerPrice, displayPrice } = generatePrice(playerData);

  return {
    cardBackground,
    commonName,
    rating,
    position,
    defending,
    pace,
    dribbling,
    shooting,
    passing,
    physicality,
    playerPrice,
    displayPrice,
  };
};

export default generateStats;

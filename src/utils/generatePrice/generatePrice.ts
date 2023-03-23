import { display } from "@mui/system";
import { Player } from "../../types/modelTypes";
import {
  getPriceThreshold,
  getPositionPrice,
  getColorAndRarityPrice,
  getDisplayPrice,
} from "./generatePriceFunctions";

const generatePrice = (playerData: Player) => {
  // Hook which determines player price base on various stats
  const {
    position,
    color,
    rarity,
    skillMoves,
    weakFoot,
    totalStatsInGame,
    rating,
  } = playerData;

  //Multipliers
  const mapMulti = {
    skillFoot: 5000,
    totalStats: 10,
    rating: 0.0000001,
    position: 100,
    color: 20000,
  };

  //Price part which depends on skill moves and weak foot
  const skillFootPrice = (skillMoves + weakFoot) * mapMulti.skillFoot;
  //Price part which depends on total stats
  const totalStatsPrice = totalStatsInGame * mapMulti.totalStats;
  //Price part which depends on player rating
  const ratingPrice = getPriceThreshold(rating) * mapMulti.rating;
  // Price part which depends on player position
  const positionPrice =
    getPositionPrice(position, playerData) * mapMulti.position;
  // Price part which depends on player color and rarity
  const colorAndRarityPrice = getColorAndRarityPrice(color, rarity);

  const playerPrice = Math.floor(
    (skillFootPrice +
      totalStatsPrice +
      ratingPrice +
      positionPrice +
      colorAndRarityPrice) /
      10000
  );
  // console.log(
  //   skillFootPrice,
  //   totalStatsPrice,
  //   ratingPrice,
  //   positionPrice,
  //   colorPrice()
  // );

  const displayPrice = getDisplayPrice(playerPrice);
  return { playerPrice, displayPrice };
};

export default generatePrice;

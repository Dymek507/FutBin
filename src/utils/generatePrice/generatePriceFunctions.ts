import { Player } from "../../types/modelTypes";

//Price part which depends on player rating
export const getPriceThreshold = (rating: number) => {
  if (rating > 90) {
    return rating ** 7 * 81;
  } else if (rating > 80) {
    return rating ** 7 * 27;
  } else if (rating > 70) {
    return rating ** 7 * 9;
  } else if (rating > 60) {
    return rating ** 7 * 3;
  } else {
    return rating ** 7;
  }
};

// Price part which depends on player position
enum Position {
  CB = "CB",
  LB = "LB",
  RB = "RB",
  RWB = "RWB",
  LWB = "LWB",
  CDM = "CDM",
  CM = "CM",
  CAM = "CAM",
  LM = "LM",
  RM = "RM",
  CF = "CF",
  LW = "LW",
  RW = "RW",
  ST = "ST",
  RF = "RF",
  LF = "LF",
  GK = "GK",
}

export const getPositionPrice = (position: string, playerData: Player) => {
  const {
    pace,
    defending,
    physicality,
    passing,
    dribbling,
    shooting,
    goalkeeperAttributes,
  } = playerData;

  const { diving, handling, kicking, positioning, reflexes, speed } =
    playerData.goalkeeperAttributes;
  // Determine the values of key attributes
  if (
    position === Position.CB ||
    position === Position.LB ||
    position === Position.RB ||
    position === Position.RWB ||
    position === Position.LWB
  ) {
    return pace + defending + physicality || 0;
  } else if (
    position === Position.CDM ||
    position === Position.CM ||
    position === Position.CAM
  ) {
    return passing + dribbling + shooting || 0;
  } else if (
    position === Position.LM ||
    position === Position.RM ||
    position === Position.CF
  ) {
    return pace + dribbling + passing || 0;
  } else if (
    position === Position.LW ||
    position === Position.RW ||
    position === Position.ST ||
    position === Position.RF ||
    position === Position.LF
  ) {
    return shooting + dribbling + pace || 0;
  } else if (position === Position.GK && goalkeeperAttributes) {
    const { diving, handling, kicking, positioning, reflexes, speed } =
      goalkeeperAttributes;
    return (
      (diving! + handling! + kicking! + positioning! + reflexes! + speed!) /
        2 || 0
    );
  } else {
    return 0;
  }
};

export const getColorAndRarityPrice = (color: string, rarity: number) => {
  const playerRarity = rarity + 1;

  const getColorPrice = (color: string) => {
    switch (color) {
      case "bronze":
        return 1;
      case "silver":
        return 64;
      case "gold":
        return 512;
      default:
        return 1;
    }
  };
  return playerRarity * getColorPrice(color);
};

//Price converter to string
export const getDisplayPrice = (playerPrice: number) => {
  if (playerPrice > 999999) {
    return (playerPrice / 100000).toFixed(0) + "m";
  } else if (playerPrice > 999) {
    return (playerPrice / 1000).toFixed(1) + "k";
  } else {
    return playerPrice.toString();
  }
};

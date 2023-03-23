import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Player } from "../types/modelTypes";
import { useFetchImages } from "./useFetchImages";

import {
  goldN,
  goldR,
  silverN,
  silverR,
  bronzeN,
  bronzeR,
} from "../assets/CardBackgrounds";
import blankPhoto from "../assets/blankPlayerPic.svg";
import generatePrice from "../utils/generatePrice/generatePrice";

const choseBackground = (rarity: number, color: string, type: string) => {
  if (type === "card") {
    if (rarity === 0) {
      if (color === "bronze") {
        return bronzeN;
      } else if (color === "silver") {
        return silverN;
      } else if (color === "gold") {
        return goldN;
      }
    } else if (rarity === 1) {
      if (color === "bronze") {
        return bronzeR;
      } else if (color === "silver") {
        return silverR;
      } else if (color === "gold") {
        return goldR;
      }
    }
  } else if (type === "line") {
    if (rarity === 0) {
      if (color === "bronze") {
        return "linear-gradient(90deg, rgba(79,38,1,1) 0%, rgba(101,49,0,1) 39%, rgba(130,63,0,1) 100%)";
      } else if (color === "silver") {
        return "linear-gradient(90deg, rgba(80,80,80,1) 0%, rgba(96,96,96,1) 39%, rgba(112,112,112,1) 100%)";
      } else if (color === "gold") {
        return "linear-gradient(90deg, rgba(171,154,0,1) 0%, rgba(185,167,0,1) 39%, rgba(210,190,0,1) 100%)";
      }
    } else if (rarity === 1) {
      if (color === "bronze") {
        return "linear-gradient(90deg, rgba(79,38,1,1) 0%, rgba(101,49,0,1) 39%, rgba(130,63,0,1) 100%)";
      } else if (color === "silver") {
        return "linear-gradient(to right, rgb(100, 116, 139), rgb(254, 249, 195))";
      } else if (color === "gold") {
        return "linear-gradient(to left, rgb(254, 240, 138), rgb(253, 224, 71), rgb(250, 204, 21))";
      }
    }
  }
};

//Check this function

const changeToGkStats = (playerData: Player) => {
  const { diving, handling, kicking, positioning, reflexes, speed } =
    playerData.goalkeeperAttributes;

  if (playerData.position === "GK") {
    return {
      defending: speed?.toString() ?? "0",
      pace: diving?.toString() ?? "0",
      dribbling: reflexes?.toString() ?? "0",
      shooting: handling?.toString() ?? "0",
      passing: kicking?.toString() ?? "0",
      physicality: positioning?.toString() ?? "0",
    };
  } else {
    return;
  }
};

const useGenerateStats = (playerData: Player, type: string) => {
  const playerId = playerData.id;

  //>>>>Use callback fix<<<<
  const cardBackground = useMemo(
    () => choseBackground(playerData.rarity, playerData.color, type),
    [playerData, type]
  );
  const gkStats = useMemo(() => changeToGkStats(playerData), [playerData]);

  const { playerPrice, displayPrice } = useMemo(
    () => generatePrice(playerData),
    [playerId]
  );

  //Adding photos to Card
  const {
    playerPhoto = blankPhoto,
    playerClub,
    playerNation,
  } = useFetchImages(playerData.id, playerData.club, playerData.nation);

  // Start data and player stats destructuring
  let { commonName = "????", position = "??", rating = "??" } = playerData;

  let {
    defending = "??",
    dribbling = "??",
    shooting = "??",
    pace = "??",
    passing = "??",
    physicality = "??",
  } = changeToGkStats(playerData) ?? playerData;

  return {
    cardBackground,
    playerPhoto,
    playerClub,
    playerNation,
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

export default useGenerateStats;

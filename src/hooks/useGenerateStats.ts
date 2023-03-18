import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Player } from "../modules/modelTypes";
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
import generatePrice from "./generatePrice";

const choseBackground = (playerData: Player) => {
  if (type === "card") {
    if (rarity === 0) {
      if (color === "bronze") {
        setCardBackground(bronzeN);
      } else if (color === "silver") {
        setCardBackground(silverN);
      } else if (color === "gold") {
        setCardBackground(goldN);
      }
    } else if (rarity === 1) {
      if (color === "bronze") {
        setCardBackground(bronzeR);
      } else if (color === "silver") {
        setCardBackground(silverR);
      } else if (color === "gold") {
        setCardBackground(goldR);
      }
    }
  } else if (type === "line") {
    if (rarity === 0) {
      if (color === "bronze") {
        setCardBackground(
          "linear-gradient(90deg, rgba(79,38,1,1) 0%, rgba(101,49,0,1) 39%, rgba(130,63,0,1) 100%)"
        );
      } else if (color === "silver") {
        setCardBackground(
          "linear-gradient(90deg, rgba(80,80,80,1) 0%, rgba(96,96,96,1) 39%, rgba(112,112,112,1) 100%)"
        );
      } else if (color === "gold") {
        setCardBackground(
          "linear-gradient(90deg, rgba(171,154,0,1) 0%, rgba(185,167,0,1) 39%, rgba(210,190,0,1) 100%)"
        );
      }
    } else if (rarity === 1) {
      if (color === "bronze") {
        setCardBackground(
          "linear-gradient(90deg, rgba(79,38,1,1) 0%, rgba(101,49,0,1) 39%, rgba(130,63,0,1) 100%)"
        );
      } else if (color === "silver") {
        setCardBackground(
          "linear-gradient(to right, rgb(100, 116, 139), rgb(254, 249, 195))"
        );
      } else if (color === "gold") {
        setCardBackground(
          "linear-gradient(to left, rgb(254, 240, 138), rgb(253, 224, 71), rgb(250, 204, 21))"
        );
      }
    }
  }
};

const changeToGkStats = () => {
  const { diving, handling, kicking, positioning, reflexes, speed } =
    playerData.goalkeeperAttributes;
  defending = speed?.toString() ?? "0";
  pace = diving?.toString() ?? "0";
  dribbling = reflexes?.toString() ?? "0";
  shooting = handling?.toString() ?? "0";
  passing = kicking?.toString() ?? "0";
  physicality = positioning?.toString() ?? "0";
};

const useGenerateStats = (playerData: Player, type: string) => {
  const [cardBackground, setCardBackground] = useState("");
  const playerId = playerData.id;
  const { playerPrice, displayPrice } = useMemo(
    () => generatePrice(playerData),
    [playerId]
  );
  // const { playerPrice, displayPrice } = useCallback(
  //   () => generatePrice(playerData),
  //   [playerData]
  // );

  //Adding photos to Card
  const {
    playerPhoto = blankPhoto,
    playerClub,
    playerNation,
  } = useFetchImages(playerData.id, playerData.club, playerData.nation);

  // Destrukturyzacja danych zawodnika oraz dane startowe //! eng
  let {
    color,
    commonName = "????",
    defending = "??",
    dribbling = "??",
    pace = "??",
    passing = "??",
    physicality = "??",
    position = "??",
    rarity,
    rating = "??",
    shooting = "??",
  } = playerData;

  useEffect(() => {
    //Choosing the background of the players
  }, [playerData]);

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

import { useMemo } from "react";

const useGeneratePrice = (playerData) => {
  const priceArray = useMemo(() => {
    // Hook do ustalania cen piłkarzy, 3 głowne statystyki w zależności od pozycji

    const {
      position,
      color,
      rarity,
      skillMoves,
      weakFoot,
      totalStats,
      rating,
      pace,
      shooting,
      passing,
      dribbling,
      defending,
      physicality,
      goalkepperAttributes,
    } = playerData;

    //Multipliers
    const skillFootMulti = 120;
    const totalStatsMulti = 30;
    const ratingMulti = 20;
    const positionMulti = 30;
    const colorMulti = 1400;

    let price = 0;
    const skillFootPrice = (skillMoves + weakFoot) * skillFootMulti;
    const totalStatsPrice = totalStats * totalStatsMulti;
    const ratingPrice = rating * ratingMulti;
    let positionPrice = 0;

    // Określanie wartości kluczowych atrybutów
    if (
      position === "CB" ||
      position === "LB" ||
      position === "RB" ||
      position === "RWB" ||
      position === "LWB"
    ) {
      positionPrice = (pace + defending + physicality) * positionMulti;
    } else if (position === "CDM" || position === "CM" || position === "CAM") {
      positionPrice = (passing + dribbling + shooting) * positionMulti;
    } else if (position === "LM" || position === "RM" || position === "CF") {
      positionPrice = (pace + dribbling + passing) * positionMulti;
    } else if (
      position === "LW" ||
      position === "RW" ||
      position === "ST" ||
      position === "RF" ||
      position === "LF"
    ) {
      positionPrice = (shooting + dribbling + pace) * positionMulti;
    } else if (position === "GK" && goalkepperAttributes) {
      const { diving, handling, kicking, positioning, reflexex, speed } =
        goalkepperAttributes;
      positionPrice =
        ((diving + handling + kicking + positioning + reflexex + speed) / 2) *
        positionMulti;
    }

    const colorPrice = () => {
      const playerRarity = Number(rarity) + 1;

      const playerColorHandler = () => {
        let playerColor;
        if (color === "bronze") {
          playerColor = 1;
        }
        if (color === "silver") {
          playerColor = 64;
        }
        if (color === "gold") {
          playerColor = 512;
        }
        return playerColor;
      };
      const price = playerRarity * playerColorHandler() * colorMulti;
      return price;
    };

    price = Math.floor(
      (skillFootPrice +
        totalStatsPrice +
        ratingPrice +
        positionPrice +
        colorPrice()) /
        100
    );

    let displayPrice = 0;

    if (price > 999) {
      displayPrice = (price / 1000).toFixed(2) + "k";
    } else {
      displayPrice = price.toString();
    }

    return [price, displayPrice];
  }, [playerData]);
  return priceArray;
};

export default useGeneratePrice;

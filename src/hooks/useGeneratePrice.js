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
      totalStatsInGame,
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
    const skillFootMulti = 5000;
    const totalStatsMulti = 10;
    const ratingMulti = 0.0000001;
    const positionMulti = 100;
    const colorMulti = 20000;

    let price = 0;
    const skillFootPrice = (skillMoves + weakFoot) * skillFootMulti;
    const totalStatsPrice = totalStatsInGame * totalStatsMulti;
    //Rating part of price

    const priceThreshold = () => {
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

    const ratingPrice = priceThreshold() * ratingMulti;

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
        10000
    );
    // console.log(
    //   skillFootPrice,
    //   totalStatsPrice,
    //   ratingPrice,
    //   positionPrice,
    //   colorPrice()
    // );

    let displayPrice = 0;

    if (price > 999999) {
      displayPrice = (price / 100000).toFixed(0) + "m";
    } else if (price > 999) {
      displayPrice = (price / 1000).toFixed(1) + "k";
    } else {
      displayPrice = price.toString();
    }

    return [price, displayPrice];
  }, [playerData]);
  return priceArray;
};

export default useGeneratePrice;

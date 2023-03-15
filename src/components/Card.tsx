import React, { useEffect, useState } from "react";
import blankPhoto from "../assets/blankPlayerPic.png";
import {
  goldN,
  goldR,
  silverN,
  silverR,
  bronzeN,
  bronzeR,
} from "../assets/CardBackgrounds";
import { useFetchImages } from "../hooks/useFetchImages";
import useGeneratePrice from "../hooks/useGeneratePrice";
import { Player } from "../modules/modelTypes";

import styles from "./Card.module.css";

interface CardProps {
  playerData: Player;
  sendPlayer?: (playerData: Player, playerPrice?: number) => void;
  fontSize: string;
  pickedArray?: Player[]
}

const Card = ({
  playerData,
  sendPlayer = () => { },
  fontSize,
  pickedArray = [],
}: CardProps) => {
  const [highlightPlayer, setHighlightPlayer] = useState(false);

  useEffect(() => {
    const ifPicked = pickedArray.filter(
      (player) => player.id === playerData.id
    ).length > 0;
    setHighlightPlayer(ifPicked);
  }, [pickedArray, playerData]);

  const { playerPrice, displayPrice } = useGeneratePrice(playerData);

  const addPlayer = () => {
    sendPlayer({ ...playerData, playerPrice });
  };

  //Dodawanie zdjęc
  const images = useFetchImages(playerData.id, playerData.club, playerData.nation);

  let { playerPhoto = blankPhoto, playerClub, playerNation } = images



  // Destrukturyzacja danych zawodnika oraz dane startowe
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
  //Zmiana wartości umiejętności dla bramkarzy
  if (position === "GK") {
    const { diving, handling, kicking, positioning, reflexes, speed } =
      playerData.goalkeeperAttributes;
    defending = speed?.toString() ?? "0";
    pace = diving?.toString() ?? "0";
    dribbling = reflexes?.toString() ?? "0";
    shooting = handling?.toString() ?? "0";
    passing = kicking?.toString() ?? "0";
    physicality = positioning?.toString() ?? "0";
  }
  //Wybieranie tła dla zawodnika
  //Add TS and rebuild function
  let cardBackground
  const choseBackground = () => {
    if (rarity === 0) {
      if (color === "bronze") {
        cardBackground = bronzeN;
      } else if (color === "silver") {
        cardBackground = silverN;
      } else if (color === "gold") {
        cardBackground = goldN;
      }
    } else if (rarity === 1) {
      if (color === "bronze") {
        cardBackground = bronzeR;
      } else if (color === "silver") {
        cardBackground = silverR;
      } else if (color === "gold") {
        cardBackground = goldR;
      }
    }
  };
  choseBackground();

  return (
    <div
      onClick={addPlayer}
      className={styles.playerCard}
      style={{
        fontSize: fontSize,
        filter: `${highlightPlayer ? "drop-shadow(0px 0px 30px #C7BA30)" : ""}`,
        backgroundImage: `url('${cardBackground}')`,
      }}
    >
      <div className={styles.playerInfo}>
        <div className={styles.playerOveral}>{rating}</div>
        <div className={styles.playerPosition}>{position}</div>
        <div className={styles.playerNationality}>
          <img src={playerNation} alt="NationFlag" />
        </div>
        <div className={styles.playerClub}>
          <img src={playerClub} alt="ClubLogo" />
        </div>
      </div>
      <div className={styles.playerPicContainer}>
        <img
          className={styles.playerPic}
          src={playerPhoto}
          alt="Player_photo"
        />
      </div>
      <div className="font-din text-[1.75em] font-bold truncate uppercase text-center absolute w-[7.5em] top-[8.35em] left-[1.25em] tracking-wide border-b border-black">
        {commonName}
      </div>
      <div
        className={`flex flex-col justify-center items-center absolute bottom-[3.25em] left-[0.31em] h-[6.25em] w-[16.875em]`}
      >
        <div className={styles.playerStatsContainer}>
          <div className="col-start-2">{pace}</div>
          <div className="col-start-4">{position !== "GK" ? "PAC" : "DIV"}</div>
          <div className="col-start-6">{dribbling}</div>
          <div className="col-start-8">{position !== "GK" ? "DRI" : "REF"}</div>
          <div className="col-start-2">{shooting}</div>
          <div className="col-start-4">{position !== "GK" ? "SHO" : "HAN"}</div>
          <div className="col-start-6">{defending}</div>
          <div className="col-start-8">{position !== "GK" ? "DEF" : "SPE"}</div>
          <div className="col-start-2">{passing}</div>
          <div className="col-start-4">{position !== "GK" ? "PAS" : "KIC"}</div>
          <div className="col-start-6">{physicality}</div>
          <div className="col-start-8">{position !== "GK" ? "PHY" : "POS"}</div>
          <div className={styles.statsVerticalLine}>
            <div className="bg-black h-[2.5em] w-[1px] mt-[0.5em]"></div>
          </div>
        </div>
        <div className="mt-[0.5em] text-[1.5em] font-din  border-t-[1px] border-black">
          {displayPrice}
        </div>
      </div>
    </div>
  );
};

export default Card;

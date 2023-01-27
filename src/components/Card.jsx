import React, { useState } from "react";
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

import styles from "./Card.module.css";

const Card = ({ playerData, sendPlayer }) => {
  const [pickPlayer, setPickPlayer] = useState(false);

  const images = useFetchImages(playerData);
  const [playerPrice, displayPrice] = useGeneratePrice(playerData);

  const addPlayer = () => {
    setPickPlayer((prevState) => !prevState);
    sendPlayer({ ...playerData, playerPrice });
  };

  //Dodawanie zdjęc

  let { playerPhoto = blankPhoto, playerClub = "", playerNation = "" } = images;

  // Destrukturyzacja danych zawodnika oraz dane startowe
  let {
    color,
    commonName = "????",
    defending = "??",
    dribbling = "??",
    id,
    league,
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
    const { diving, handling, kicking, positioning, reflexes } =
      playerData.goalkeeperAttributes;
    defending = pace;
    pace = diving;
    dribbling = reflexes;
    shooting = handling;
    passing = kicking;
    physicality = positioning;
  }
  //Wybieranie tła dla zawodnika
  let cardBackground;
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
        backgroundColor: `${pickPlayer ? "green" : ""}`,
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
      <div className="font-din text-[28px] font-bold truncate uppercase text-center absolute w-[210px] top-[234px] left-[35px] border-b border-black">
        {commonName}
      </div>
      <div
        className={`flex flex-col justify-center items-center absolute bottom-[52px] left-[5px] h-[100px] w-[270px]`}
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
            <div className="bg-black h-[78px] w-[1px] mt-[14px]"></div>
          </div>
        </div>
        <div className="mt-4 text-3xl font-din  border-t-[1px] border-black">
          {displayPrice}
        </div>
      </div>
    </div>
  );
};

export default Card;

import React, { useEffect, useState } from "react";
import useGenerateStats from "../hooks/useGenerateStats";
import { Player } from "../modules/modelTypes";

import styles from "./Card.module.css";

interface CardProps {
  playerData: Player;
  sendPlayer?: (playerData: Player, playerPrice?: number) => void;
  fontSize: string;
  pickedArray?: Player[];
  cardLoaded?: (loaded: boolean) => void;
}

const Card = ({
  playerData,
  sendPlayer = () => {},
  fontSize,
  pickedArray = [],
  cardLoaded = () => {},
}: CardProps) => {
  const [highlightPlayer, setHighlightPlayer] = useState(false);

  useEffect(() => {
    const ifPicked =
      pickedArray.filter((player) => player.id === playerData.id).length > 0;
    setHighlightPlayer(ifPicked);
  }, [pickedArray, playerData]);

  const {
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
  } = useGenerateStats(playerData, "card");

  const addPlayer = () => {
    sendPlayer({ ...playerData, playerPrice });
  };

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

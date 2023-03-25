import React, { useEffect, useMemo, useState } from "react";
import { useFetchImages } from "../hooks/useFetchImages";
import generateStats from "../utils/generateStats/generateStats";
import { Player } from "../types/modelTypes";

interface CardProps {
  playerData: Player;
  sendPlayer?: (playerData: Player, playerPrice?: number) => void;
  fontSize: string;
  pickedArray?: Player[]
  cardLoaded?: (loaded: boolean) => void
}

const Card = ({
  playerData,
  sendPlayer = () => { },
  fontSize,
  pickedArray = [],
  cardLoaded = () => { }
}: CardProps) => {

  const [highlightPlayer, setHighlightPlayer] = useState(false);

  useEffect(() => {
    const ifPicked = pickedArray.filter(
      (player) => player.id === playerData.id
    ).length > 0;
    setHighlightPlayer(ifPicked);
  }, [pickedArray, playerData]);

  //Add default photo if player has no photo
  //Adding photos to Card
  const { playerPhoto, playerClub, playerNation } = useFetchImages(
    playerData.id,
    playerData.club,
    playerData.nation
  );

  const { cardBackground,
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
    displayPrice } = useMemo(() => generateStats(playerData, "card"), [playerData])

  const addPlayer = () => {
    sendPlayer({ ...playerData, playerPrice });
  };

  return (
    <div
      onClick={addPlayer}
      className="relative bg-center bg-[length:22.5em_31em] bg-no-repeat h-[28em] w-[17.5em]"
      style={{
        fontSize: fontSize,
        filter: `${highlightPlayer ? "drop-shadow(0px 0px 30px #C7BA30)" : ""}`,
        backgroundImage: `url('${cardBackground}')`,
      }}
    >
      <div className="absolute flex flex-col top-[2.6em] left-[2.8em] w-auto items-center">
        <div className="font-din text-[3.9em] leading-[0.7em]">{rating}</div>
        <div className="font-din-thin font-bold text-[1.88em] ">{position}</div>
        <div className="w-[2.75em] py-[0.4em] border-y border-black">
          <img src={playerNation} alt="nation_flag" />
        </div>
        <div className="w-[2.25em] pt-[.4em]">
          <img src={playerClub} alt="club_logo" />
        </div>
      </div>
      <div className="absolute top-[2.7em] right-[0.1em]">
        <img
          className="object-contain h-[12em]"
          src={playerPhoto}
          alt="Player_photo"
        />
      </div>
      {/* Common name */}
      <div className="absolute font-din text-[2.2em] leading-[1.2em] font-bold truncate uppercase text-center w-[7.5em] top-[6.7em] left-[0.2em] pb-0">
        {commonName}
      </div>
      <div
        className={`flex flex-col justify-center items-center absolute bottom-[3.25em] left-[0.31em] h-[6.25em] w-[16.875em]`}
      >
        {/* Stats container */}
        <div className="font-din text-[2em] font-semibold tracking-widest border-t border-black mx-[2em]
        grid grid-cols-card-stats grid-rows-card-stats 
        [&>*:nth-child(even)]:font-din-thin [&>*:nth-child(even)]:font-extralight
        ">
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
          <div className="col-start-5 col-end-6 row-start-1 row-end-4 align-middle justify-self-center">
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

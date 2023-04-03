import React, { useEffect, useMemo, useState } from "react";
import { useFetchImages } from "../../hooks/useFetchImages";
import generateStats from "../../utils/generateStats/generateStats";
import { Player } from "../../types/modelTypes";


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
    playerPrice } = useMemo(() => generateStats(playerData, "card"), [playerData])

  const addPlayer = () => {
    sendPlayer({ ...playerData, playerPrice });
  };

  return (
    <div
      onClick={addPlayer}
      className="relative w-[15em] h-[20em] bg-[length:19em_22em] bg-center bg-no-repeat text-black cursor-pointer"
      style={{
        fontSize: fontSize,
        filter: `${highlightPlayer ? "drop-shadow(0px 0px 30px #C7BA30)" : ""}`,
        backgroundImage: `url('${cardBackground}')`,
      }}
    >
      <div >
        <div className="absolute top-0 left-[0.5em] text-[4em]">{rating}</div>
        <div className="w-[2em] absolute top-[1em] left-[0.1em] text-[3.5em] text-center">{position}</div>
        <div >
          <img className="absolute bottom-[3.2em] left-[2em] w-[4.5em] " src={playerNation} alt="NationFlag" />
        </div>
        <div>
          <img className="absolute bottom-[2.8em] right-[2em] w-[3.5em] " src={playerClub} alt="ClubLogo" />
        </div>
      </div>
      <div>
        <img
          className="absolute top-[1.5em] right-[0.2em] w-[9em]"
          src={playerPhoto}
          alt="Player_photo"
        />
      </div>
      <div className=" absolute bottom-[3em] left-[0.4em] w-[6em] font-din text-[2.2em] font-bold truncate uppercase text-center  tracking-wide border-b border-black">
        {commonName}
      </div>
    </div >
  );
};

export default Card;

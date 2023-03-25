import React, { useEffect, useMemo, useState } from "react";
import { useFetchImages } from "../hooks/useFetchImages";
import generateStats from "../utils/generateStats/generateStats";
import { Player } from "../types/modelTypes";

interface CardLineProps {
  playerData: Player;
  sendPlayer: (playerData: Player, playerPrice?: number) => void;
  pickedArray: Player[]
}

const CardLine = ({ playerData, sendPlayer, pickedArray }: CardLineProps) => {
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
  } = useMemo(() => generateStats(playerData, "line"), [playerData])

  const addPlayer = () => {
    setHighlightPlayer((prevState) => !prevState);
    sendPlayer({ ...playerData, playerPrice });
  };

  return (
    //Main bar container
    <div
      onClick={addPlayer}
      className=
      "flex text-[1.3rem] h-[3.2em] w-full shadow-2xl gap-[0.2em]"
      style={{
        background: cardBackground,
        filter: `${highlightPlayer ? 'brightness(40%)' : ""}`,
      }
      }
    >
      {/*Player nation and photo*/}
      < div
        style={{
          backgroundImage: `url(${playerNation})`,
        }}
        className="flex w-[3.2em] bg-center bg-cover bg-no-repeat"
      >
        <img
          src={playerPhoto}
          alt="Player_photo"
          style={{ filter: "drop-shadow(0px 0px 0.5em #000)" }}
        />
      </div >
      {/*Player rating*/}
      < div className="flex items-center justify-center mr-1" >
        <p className="text-[1.5em] px-[0.2em] border-r border-black">
          {rating}
        </p>
      </div >
      {/*Player info*/}
      < div className=" flex flex-col items-start w-[6em] truncate" >
        <div className="flex items-center gap-2 h-[1.6em] mt-1">
          <div className="items-center">
            <img src={playerClub} className="w-[1.7em]" alt="ClubLogo"></img>
          </div>
          <p className="text-[1em] ">{position}</p>
        </div>
        <div className="flex items-center h-[1.6em] truncate">
          <p className="text-[1em]">{commonName}</p>
        </div>
      </div >
      {/*Statistics in detail*/}
      < div className="ml-auto flex w-[3.6em] xs:w-min mr-1 items-center gap-0.5 flex-wrap xs:flex-nowrap  " >
        {
          [pace, shooting, passing, dribbling, defending, physicality].map(
            (stat, index) => (
              <p
                key={index}
                className=" text-[0.8em] xs:text-[1em] h-[1.6em] border border-black px-[0.1em] "
              >
                {stat}
              </p>
            )
          )
        }
      </div >
    </div >
  );
};

export default CardLine;

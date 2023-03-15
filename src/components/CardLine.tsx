import React, { useEffect, useState } from "react";
import blankPhoto from "../assets/blankPlayerPic.png";
import { useFetchImages } from "../hooks/useFetchImages";

import {
  goldN,
  goldR,
  silverN,
  silverR,
  bronzeN,
  bronzeR,
} from "../assets/CardBackgrounds";
import useGeneratePrice from "../hooks/useGeneratePrice";
import { Player } from "../modules/modelTypes";

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

  const images = useFetchImages(playerData.id, playerData.club, playerData.nation);

  let { playerPhoto = blankPhoto, playerClub, playerNation } = images

  const { playerPrice, displayPrice } = useGeneratePrice(playerData);

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

  let cardBackground;
  function choseBackground() {
    if (rarity === 0) {
      if (color === "bronze") {
        cardBackground =
          "linear-gradient(90deg, rgba(79,38,1,1) 0%, rgba(101,49,0,1) 39%, rgba(130,63,0,1) 100%)";
      } else if (color === "silver") {
        cardBackground =
          "linear-gradient(90deg, rgba(80,80,80,1) 0%, rgba(96,96,96,1) 39%, rgba(112,112,112,1) 100%)";
      } else if (color === "gold") {
        cardBackground =
          "linear-gradient(90deg, rgba(171,154,0,1) 0%, rgba(185,167,0,1) 39%, rgba(210,190,0,1) 100%)";
      }
    } else if (rarity === 1) {
      if (color === "bronze") {
        cardBackground =
          "linear-gradient(90deg, rgba(79,38,1,1) 0%, rgba(101,49,0,1) 39%, rgba(130,63,0,1) 100%)";
      } else if (color === "silver") {
        cardBackground =
          "linear-gradient(to right, rgb(100, 116, 139), rgb(254, 249, 195))";
      } else if (color === "gold") {
        cardBackground =
          "linear-gradient(to left, rgb(254, 240, 138), rgb(253, 224, 71), rgb(250, 204, 21))";
      }
    }
  };
  choseBackground()

  const addPlayer = () => {
    setHighlightPlayer((prevState) => !prevState);
    sendPlayer({ ...playerData, playerPrice });
  };

  return (
    //Main bar container
    <div
      onClick={addPlayer}
      className="flex text-[1.3rem] h-[3.2em] w-full shadow-2xl gap-[0.2em]"
      style={{
        background: cardBackground,
        // border: `${highlightPlayer ? "3px solid red" : ""}`,
        filter: `${highlightPlayer ? 'brightness(40%)' : ""}`,
      }}
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
      < div className="flex justify-center items-center mr-1" >
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

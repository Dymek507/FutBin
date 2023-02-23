import React from "react";
import { useFetchImages } from "../../hooks/useFetchImages";

const WalkoutBanner = (playerData, side) => {
  //Adding photos

  const images = useFetchImages(playerData);
  let { playerClub = "", playerNation = "" } = images;

  return (
    <div
      className="absolute right-[10%] bottom-[10%] h-[16em] w-[10em] bg-walkout-fr-r bg-contain bg-no-repeat"
      style={{
        transform: `${side === "right" ? "scale(-1,1)" : "scale(1,1)"}`,
      }}
    >
      <img
        className="absolute left-[2em] top-[4em] skew-y-[-15deg] "
        src={playerClub}
        alt="player_club_image"
      />
    </div>
  );
};

export default WalkoutBanner;

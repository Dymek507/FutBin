import React from "react";
import { useState } from "react";
import { PackT } from "../../types/modelTypes";
import { PackImages } from "../../assets/packs"
import packImages from "../../assets/packs"
import { Typography } from "@mui/material";



interface IPack {
  packData: PackT;
  openModal: (state: boolean) => void;
  onClick: (data: PackT) => void;
  showPrice?: boolean
}

const Pack = ({ packData, openModal, onClick, showPrice }: IPack) => {
  const { id, packPrice, packRating, packColor, playersAmount, packAmount } = packData;

  const [clicked, setClicked] = useState<boolean>(false);

  const clickHandler = (data: PackT) => {
    setClicked(true);
    setTimeout(() => {
      onClick(data);
      setClicked(false);
    }, 500);
  };

  return (
    <div
      onClick={() => clickHandler(packData)}
      className={`relative h-[16em] w-[11em] text-white bg-cover cursor-pointer ${clicked ? 'animate-ping' : ""}`}
      style={{ backgroundImage: `url('${packImages[packColor as keyof PackImages]}')` }}
    >
      {packAmount > 1 && (
        <div className="absolute flex justify-center items-center top-0 right-[1em] w-[1em] h-[3em] border-x-[#ce6979] border-x-[1em] border-b-transparent border-b-[1em] drop-shadow-2xl">
          <p className="text-[0.9em] px-[0.5em] pb-[0.1em] border-2 rounded-full">
            {packAmount}
          </p>
        </div>
      )}
      {showPrice &&
        <div className={`absolute bottom-[1em] left-[50%] bg-primary-main  border-4 rounded-xl p-1 -translate-x-[50%]`}>
          <Typography variant='h4' >
            {packPrice}
          </Typography>
        </div>
      }
    </div>
  );
};

export default Pack;

import React from "react";
import { useState } from "react";
import { PackT } from "../modules/modelTypes";

interface IPack {
  packData: PackT;
  openModal: (state: boolean) => void;
  onClick: (data: PackT) => void;
}

const Pack = ({ packData, openModal, onClick }: IPack) => {
  const { packRating, packColor, playersAmount, packAmount } = packData;

  const [clicked, setClicked] = useState<boolean>(false);

  const clickHandler = (data: PackT) => {
    setClicked(true);
    setTimeout(() => {
      onClick(data);
      setClicked(false);
    }, 500);
  };

  const styleNormal =
    "relative flex flex-col justify-center items-center gap-[2em] h-[16em] w-[11em] text-white bg-pack-1 bg-cover text-2xl cursor-pointer ";

  const styleClicked =
    "relative flex flex-col justify-center items-center gap-[2em] h-[16em] w-[11em] text-white bg-pack-1 bg-cover text-2xl cursor-pointer animate-ping";

  return (
    <>
      <div
        onClick={() => clickHandler(packData)}
        className={clicked ? styleClicked : styleNormal}
      >
        {packAmount > 1 && (
          <div className="absolute flex justify-center items-center top-0 right-[1em] w-[1em] h-[3em] border-x-[#ce6979] border-x-[1em] border-b-transparent border-b-[1em] drop-shadow-2xl">
            <p className="text-[0.9em] px-[0.5em] pb-[0.1em] border-2 rounded-full">
              {packAmount}
            </p>
          </div>
        )}
        <p
          style={{ color: `${packColor}` }}
          className="text-[3em] pl-[0.5em]"
        >{`${packRating}+`}</p>
        <p
          style={{ color: `${packColor}` }}
          className="text-[2em] "
        >{`${playersAmount} players`}</p>
        <p className="text-[2em] border-2 rounded-xl p-[0.15em] pb-[0.2em]">
          FutDraft
        </p>
      </div>
    </>
  );
};

export default Pack;

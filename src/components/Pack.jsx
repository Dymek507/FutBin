import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { packActions } from "../store/packs-slice";
import { playersActions } from "../store/players-slice";
import { drawPlayer } from "../store/players-fetch";

const Pack = ({ id, minRating, playersNum, color, amount, openModal }) => {
  const dispatch = useDispatch();

  const OpenPack = () => {
    dispatch(packActions.removePack(id));
    dispatch(playersActions.deleteCurrentPack());

    const pack = [];
    for (let i = 0; i < playersNum; i++) {
      pack.push(minRating);
    }
    pack.forEach((player) => dispatch(drawPlayer(player)));
    openModal(true);
  };
  return (
    <div
      onClick={OpenPack}
      className="relative flex flex-col justify-center items-center gap-[0.1em] h-[16em] w-[11em] text-white bg-pack-1 bg-cover  text-[1.8em]"
    >
      {amount > 1 && (
        <div className="absolute flex justify-center items-center top-0 right-[1em] w-[1em] h-[3em] border-x-[#ce6979] border-x-[1em] border-b-transparent border-b-[1em] drop-shadow-2xl">
          <p className="text-[0.9em] px-[0.5em] pb-[0.1em] border-2 rounded-full">
            {amount}
          </p>
        </div>
      )}
      <p
        style={{ color: `${color}` }}
        className="text-[3em] pl-[0.5em]"
      >{`${minRating}+`}</p>
      <p
        style={{ color: `${color}` }}
        className="text-[2em] "
      >{`${playersNum} players`}</p>
      <p className="text-[2em] border-2 rounded-xl p-[0.15em] pb-[0.2em]">
        FutDraft
      </p>
    </div>
  );
};

export default Pack;

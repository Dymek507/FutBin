import React from "react";
import { useDispatch } from "react-redux";
import { packActions } from "../store/packs-slice";

const Pack = ({ id, minRating, players, color, amount, openModal }) => {
  const dispatch = useDispatch();

  const OpenPack = () => {
    dispatch(packActions.removePack(id));
    openModal(true);
  };
  return (
    <div
      onClick={OpenPack}
      className="relative flex flex-col justify-center items-center gap-4 text-white bg-pack-1 bg-cover w-[332px] h-[482px] "
    >
      {amount > 1 && (
        <div className="absolute flex justify-center items-center top-0 right-10 w-16 h-32 border-x-[#ce6979] border-x-[2rem] border-b-transparent border-b-[30px] drop-shadow-2xl">
          <p className="text-4xl px-3 pb-1 border-2 rounded-full">{amount}</p>
        </div>
      )}
      <p
        style={{ color: `${color}` }}
        className="text-8xl pl-3"
      >{`${minRating}+`}</p>
      <p
        style={{ color: `${color}` }}
        className="text-4xl pl-3"
      >{`${players} players`}</p>
      <p className="text-6xl border-2 rounded-xl p-2 pb-3">FutDraft</p>
    </div>
  );
};

export default Pack;

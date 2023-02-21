import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { packsActions } from "../store/packs-slice";
import { playersActions } from "../store/players-slice";
import { drawPlayer } from "../store/players-fetch";
import { receivePackData, sendPackData } from "../store/packs-actions";

import Pack from "../components/Pack";
import OpeningModal from "../components/UI/OpeningModal";
import { Button } from "@mui/material";

const MyPacks = () => {
  const dispatch = useDispatch();

  const myPacks = useSelector((state) => state.packs.myPacks);
  const uId = useSelector((state) => state.ui.uId);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = (state) => {
    setShowModal(state);
  };

  //Move to MyPacks
  const OpenPack = (packData) => {
    dispatch(packsActions.removePack(packData.id));
    dispatch(playersActions.deleteCurrentPack());
    dispatch(sendPackData());

    const pack = [];
    for (let i = 0; i < packData.playersAmount; i++) {
      pack.push(packData.packRating);
    }
    pack.forEach((player) => dispatch(drawPlayer(player)));
    toggleModal(true);
  };

  const openPrevPackHandler = () => {
    toggleModal(true);
  };

  return (
    <>
      {showModal && <OpeningModal onOpen={showModal} onClose={toggleModal} />}
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-center items-center h-[10%]  ">
          <Button variant="contained" onClick={openPrevPackHandler}>
            Open previous pack
          </Button>
        </div>
        <div
          className="flex justify-center items-center h-[90%] 
        "
        >
          {myPacks.length === 0 && (
            <div className="bg-main p-2 rounded-xl">
              <p className="text-white text-4xl">Brak Paczek Biedaku</p>
            </div>
          )}
          {myPacks &&
            myPacks.map((pack) => (
              <Pack
                key={pack.id}
                packData={pack}
                openModal={toggleModal}
                onClick={OpenPack}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default MyPacks;

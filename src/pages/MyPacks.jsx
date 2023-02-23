import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { packsActions } from "../store/packs-slice";
import { playersActions } from "../store/players-slice";
import { drawPlayer } from "../store/players-fetch";
import { sendPackData } from "../store/packs-actions";

import Pack from "../components/Pack";
import OpeningModal from "../components/opening/OpeningModal";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { receivePackData } from "../store/packs-actions";
import OpeningBoard from "../components/opening/OpeningBoard";

const MyPacks = () => {
  const uId = useSelector((state) => state.ui.userData?.uId);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showPrevPlayers, setShowPrevPlayers] = useState(false);
  const [currentPack, setCurrentPack] = useState({});

  useEffect(() => {
    dispatch(receivePackData());
  }, [dispatch, uId]);

  const myPacks = useSelector((state) => state.packs.myPacks);

  const toggleModal = (state) => {
    setShowModal(state);
  };

  //Move to MyPacks
  const OpenPack = (packData) => {
    dispatch(packsActions.removePack(packData.id));
    dispatch(playersActions.deleteCurrentPack());
    dispatch(sendPackData());
    setCurrentPack(packData);

    const pack = [];
    for (let i = 0; i < packData.playersAmount; i++) {
      pack.push(packData.packRating);
    }
    pack.forEach((player) => dispatch(drawPlayer(player)));
    toggleModal(true);
  };

  const openPrevPackHandler = () => {
    setShowPrevPlayers(true);
    console.log("prev");
  };
  const closePrevPackHandler = () => {
    setShowPrevPlayers(false);
    console.log("prev");
  };

  return (
    <>
      {showModal && (
        <OpeningModal
          onOpen={showModal}
          onClose={toggleModal}
          packData={currentPack}
        />
      )}
      {showPrevPlayers && <OpeningBoard onClose={closePrevPackHandler} />}
      {!showPrevPlayers && !showModal && (
        <div className=" flex flex-col w-full min-h-[calc(100vh-4rem)]">
          <div className="flex justify-center items-center h-[10%] gap-4">
            <Button variant="contained" onClick={openPrevPackHandler}>
              Open previous pack
            </Button>
            <Link to="/new-packs">
              <Button variant="contained">Buy Pack</Button>
            </Link>
          </div>
          <div
            className="flex flex-col justify-center items-center h-[90%] gap-8
        "
          >
            {myPacks.length === 0 && (
              <div className="bg-main p-2 rounded-xl">
                <p className="text-white text-4xl">No Packs</p>
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
      )}
    </>
  );
};

export default MyPacks;

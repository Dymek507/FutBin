import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { packsActions } from "../../store/packs-slice";
import { playersActions } from "../../store/players-slice";
import { drawPlayer } from "../../store/players-fetch";
import { sendPackData } from "../../store/packs-actions";
import OpeningModal from "./OpeningModal/OpeningModal";
import { receivePackData } from "../../store/packs-actions";
import OpeningBoard from "./OpeningModal/OpeningBoard";
import { useAppDispatch, useAppSelector } from "../../store/app/hooks";
import { PackT } from "../../types/modelTypes";
import PacksDisplay from "./helpers/PacksDisplay";
import InfoScreen from "../../components/InfoScreen";

const MyPacks = () => {
  const uId = useAppSelector((state) => state.ui.userData?.uId);
  const myPacks = useAppSelector((state) => state.packs.myPacks);
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPrevPlayers, setShowPrevPlayers] = useState<boolean>(false);
  const [currentPack, setCurrentPack] = useState<PackT | null>(null);

  useEffect(() => {
    dispatch(receivePackData());
  }, [dispatch, uId]);


  const toggleModal = (state: boolean) => {
    setShowModal(state);
  };

  const OpenPack = (packData: PackT) => {
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
          showModal={showModal}
          onClose={toggleModal}
          packData={currentPack}
        />
      )}
      {showPrevPlayers && <OpeningBoard onClose={closePrevPackHandler} />}
      {!showPrevPlayers && !showModal && (
        <div className="w-full">
          <div className="flex items-center justify-center gap-4 h-1/6">
            <Button variant="contained" size="large" color="secondary" onClick={openPrevPackHandler}>
              Open previous pack
            </Button>
            <Link to="/new-packs">
              <Button variant="contained" color="secondary" size="large">Buy Pack</Button>
            </Link>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-8 h-5/6"
          >
            {myPacks.length === 0 && (
              <InfoScreen text1="No Packs" text2="Buy some!" />
            )}
            {myPacks.length !== 0 && (
              <PacksDisplay packs={myPacks} buyPack={OpenPack} />
            )
            }
          </div>
        </div>
      )
      }
    </>
  );
};

export default MyPacks;

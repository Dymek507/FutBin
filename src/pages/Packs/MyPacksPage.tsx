import React, { useEffect, useState } from "react";
import { packsActions } from "../../store/packs-slice";
import { playersActions } from "../../store/players-slice";
import { drawPlayer } from "../../store/players-fetch";
import { sendPackData } from "../../store/packs-actions";

import OpeningModal from "./OpeningModal/OpeningModal";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { receivePackData } from "../../store/packs-actions";
import OpeningBoard from "./OpeningModal/OpeningBoard";
import { useAppDispatch, useAppSelector } from "../../store/app/hooks";
import { PackT } from "../../types/modelTypes";
import PacksDisplay from "./PacksDisplay";
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
      {/* <OpeningAnimation isVisible={true} progress={100} /> */}
      {!showPrevPlayers && !showModal && (
        <div className="w-full ">
          <div className="flex justify-center items-center h-[10%] gap-4">
            <Button variant="contained" size="large" color="secondary" onClick={openPrevPackHandler}>
              Open previous pack
            </Button>
            <Link to="/new-packs">
              <Button variant="contained" color="secondary" size="large">Buy Pack</Button>
            </Link>
          </div>
          <div
            className="flex flex-col justify-center items-center h-[90%] gap-8"
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

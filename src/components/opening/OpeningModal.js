import React, { useEffect, useMemo, useState } from "react";
import Modal from "@mui/material/Modal";

import OpeningAnimation from "./OpeningAnimation";
import WalkoutAnimation from "./WalkoutAnimation";
import OpeningBoard from "./OpeningBoard";
import { useSelector } from "react-redux";
import sortPlayers from "../functions/sortPlayers";
import BlackScreen from "./BlackScreen";

const OpeningModal = ({ onOpen, onClose, packData }) => {
  const currentPack = useSelector((state) => state.players.currentPack);
  const [showAnimation, setShowAnimation] = useState(true);
  const [playersReady, setPlayersReady] = useState(false);
  const [showWalkout, setShowWalkout] = useState(false);
  const [walkoutPlayer, setWalkoutPlayer] = useState(null);

  const playersArray = useMemo(
    () => sortPlayers(currentPack, "ovr", true),
    [currentPack]
  );

  useEffect(() => {
    if (currentPack.length === packData.playersAmount) {
      setPlayersReady(true);
    }
  }, [currentPack, packData]);

  useEffect(() => {
    let animationTimer;
    if (playersReady) {
      const bestPlayerInPack = playersArray[0];
      if (bestPlayerInPack?.rating > 72) {
        setWalkoutPlayer(bestPlayerInPack);
        setShowWalkout(true);
      }
      animationTimer = setTimeout(() => {
        setShowAnimation(false);
      }, 2000);
    }
    return () => {
      clearTimeout(animationTimer);
    };
  }, [playersReady]);

  const closeWalkoutHandler = () => {
    setShowWalkout(false);
  };

  return (
    <Modal
      open={onOpen}
      onClose={() => onClose(false)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <>
        {/* {showAnimation ? <OpeningAnimation /> : null} */}
        {showAnimation ? <OpeningAnimation isVisible={!playersReady} /> : null}
        {showWalkout ? (
          <WalkoutAnimation
            player={walkoutPlayer}
            closeWalkout={closeWalkoutHandler}
          />
        ) : null}
        <OpeningBoard onClose={onClose} />
      </>
    </Modal>
  );
};

export default OpeningModal;

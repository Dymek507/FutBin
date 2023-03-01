import React, { useEffect, useMemo, useState } from "react";
import Modal from "@mui/material/Modal";

import OpeningAnimation from "./OpeningAnimation";
import WalkoutAnimation from "./WalkoutAnimation";
import OpeningBoard from "./OpeningBoard";
import sortPlayers from "../functions/sortPlayers";
import { PackT, Player } from "../../modules/modelTypes";
import { useAppSelector } from "../../app/hooks";
import dummyPlayer from "../dummyPlayer";

type OpeningModalProps = {
  showModal: boolean;
  onClose: (state: boolean) => void;
  packData: PackT | null
}

const OpeningModal = ({ showModal, onClose, packData }: OpeningModalProps) => {
  const currentPack = useAppSelector((state) => state.players.currentPack);
  const [showAnimation, setShowAnimation] = useState(true);
  const [playersReady, setPlayersReady] = useState(false);
  const [showWalkout, setShowWalkout] = useState(false);
  const [walkoutPlayer, setWalkoutPlayer] = useState<Player>(dummyPlayer);

  const playersArray = useMemo(
    () => sortPlayers(currentPack, "ovr", true),
    [currentPack]
  );

  useEffect(() => {
    // @ts-ignore
    if (currentPack.length === packData.playersAmount) {
      setPlayersReady(true);
    }
  }, [currentPack, packData]);

  useEffect(() => {
    let animationTimer: ReturnType<typeof setTimeout>
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
      open={showModal}
      onClose={() => onClose(false)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <>
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

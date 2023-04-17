import React, { useEffect, useMemo, useState } from "react";
import Modal from "@mui/material/Modal";

import OpeningAnimation from "./OpeningAnimation/OpeningAnimation";
import WalkoutAnimation from "./OpeningWalkout";
import OpeningBoard from "./OpeningBoard";
import sortPlayers, { SortingVariants } from "../../../utils/sortPlayers";
import { PackT, Player } from "../../../types/modelTypes";
import { useAppSelector } from "../../../store/app/hooks";
import dummyPlayer from "../../../data/dummyPlayer";

type OpeningModalProps = {
  showModal: boolean;
  onClose: (state: boolean) => void;
  packData: PackT | null
}

const OpeningModal = ({ showModal, onClose, packData }: OpeningModalProps) => {
  const currentPack = useAppSelector((state) => state.players.currentPack);
  const [showAnimation, setShowAnimation] = useState(true);
  const [playersReady, setPlayersReady] = useState(false);
  const [playersLoaded, setPlayersLoaded] = useState(0);
  const [showWalkout, setShowWalkout] = useState(false);
  const [walkoutPlayer, setWalkoutPlayer] = useState<Player>(dummyPlayer);

  const playersArray = useMemo(
    () => sortPlayers(currentPack, SortingVariants.rat, true),
    [currentPack]
  );

  useEffect(() => {
    if (packData !== null) {
      setPlayersLoaded(currentPack.length / packData.playersAmount * 100)
      if (currentPack.length === packData.playersAmount) {
        setPlayersReady(true);
      }
    }
  }, [currentPack, packData]);

  useEffect(() => {
    let animationTimer: ReturnType<typeof setTimeout>
    if (playersReady) {
      const bestPlayerInPack = playersArray[0];
      if (bestPlayerInPack?.rating > 82) {
        setWalkoutPlayer(bestPlayerInPack);
        setShowWalkout(true);
      }
      animationTimer = setTimeout(() => {
        setShowAnimation(false);
      }, 3000);
    }
    return () => {
      clearTimeout(animationTimer);
    };
  }, [playersReady, playersArray]);

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
        {showAnimation ? <OpeningAnimation isVisible={!playersReady} progress={playersLoaded} /> : null}
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

import React, { useEffect } from "react";
import Modal from "@mui/material/Modal";
import Card from "../Card";
import { useSelector, useDispatch } from "react-redux";
import { drawPlayer } from "../../store/players-fetch";

const pack = [55, 55];

let firstRun = true;

const OpeningModal = ({ onOpen, onClose }) => {
  const dispatch = useDispatch();

  const playersArray = useSelector((state) => state.players.playersArray);

  useEffect(() => {
    if (firstRun) {
      pack.forEach((player) => dispatch(drawPlayer(player)));
      firstRun = false;
    }
  }, []);

  return (
    <Modal
      open={onOpen}
      onClose={() => onClose(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div className="w-full h-3/4 bg-opening-c bg-cover">
        <div className="h-full w-screen relative flex grow flex-wrap gap-0.5 justify-center bg-board-opacity overflow-hidden">
          {playersArray &&
            playersArray.map((player) => (
              <Card key={player.id} playerData={player} />
            ))}
        </div>
      </div>
    </Modal>
  );
};

export default OpeningModal;

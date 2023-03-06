import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sendPlayersData, fetchPlayersData } from "../../../store/players-actions";
import { playersActions } from "../../../store/players-slice";
import { Button } from "@mui/material";

import Card from "../../../components/Card";

import type { Player } from "../../../modules/modelTypes";
import { useAppDispatch, useAppSelector } from "../../../store/app/hooks";

type OpeningBoardProps = {
  onClose: (state: boolean) => void
}


const OpeningBoard = ({ onClose }: OpeningBoardProps) => {
  const [pickedPlayers, setPickedPlayers] = useState<Player[] | []>([]);

  const dispatch = useAppDispatch();

  const currentPack = useAppSelector((state) => state.players.currentPack);
  const myPlayers = useAppSelector((state) => state.players.myPlayers);

  useEffect(() => {
    if (myPlayers && myPlayers.length === 0) {
      dispatch(fetchPlayersData());
    }
  }, [dispatch]);

  // Makes array with picked players, ready to send to myPlayers
  const pickPlayer = (playerData: Player) => {
    const playerExists = pickedPlayers.find(
      (player) => player.id === playerData.id
    );

    if (!playerExists) {
      setPickedPlayers((prev) => [...prev, playerData]);
    } else {
      let newPickedPlayers = [...pickedPlayers];
      newPickedPlayers = newPickedPlayers.filter(
        (player) => player.id !== playerExists.id
      );
      setPickedPlayers(newPickedPlayers);
    }
  };

  const sendAllPlayer = () => {
    currentPack.forEach((player) => {
      dispatch(playersActions.addPlayerToMyPlayers(player));
    });
    if (myPlayers.length === 0) {
      dispatch(fetchPlayersData());
    }
    dispatch(playersActions.deleteCurrentPack());
    dispatch(sendPlayersData());
    onClose(false);
  };

  const sendPickedPlayers = () => {
    pickedPlayers.forEach((player) => {
      dispatch(playersActions.addPlayerToMyPlayers(player));
      dispatch(playersActions.deletePlayerFromCurrentPack(player.id));
    });
    if (myPlayers.length === 0) {
      dispatch(fetchPlayersData());
    }
    dispatch(sendPlayersData());
    onClose(false);
  };

  const rejectAllPlayers = () => {
    onClose(false);
  };

  return (
    <div className="relative flex flex-col w-screen h-screen bg-opening-c bg-cover overflow-x-hidden">
      <div className="flex justify-center mt-12 ">
        <Button size="medium" variant="contained" onClick={sendAllPlayer}>
          Send All
        </Button>
        <Button size="medium" variant="contained" onClick={sendPickedPlayers}>
          Send Chosen
        </Button>
        <Button size="medium" variant="contained" onClick={rejectAllPlayers}>
          Reject
        </Button>
      </div>
      <div className="flex flex-wrap w-full p-10 overflow-x-hidden gap-1 justify-center">
        {currentPack &&
          currentPack.map((player) => (
            <Card
              key={player.id}
              playerData={player}
              sendPlayer={pickPlayer}
              fontSize={"0.9rem"}
              pickedArray={pickedPlayers}
            />
          ))}
      </div>
    </div>
  );
};

export default OpeningBoard;

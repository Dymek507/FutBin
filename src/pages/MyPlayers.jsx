import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { playersActions } from "../store/players-slice";

import { Button } from "@mui/material";
import Layout from "../components/UI/Layout";
import Card from "../components/Card";

const MyPlayers = () => {
  const [pickedPlayers, setPickedPlayers] = useState([]);

  const playersArray = useSelector((state) => state.players.myPlayers);
  console.log(playersArray);

  const dispatch = useDispatch();

  const pickPlayer = (playerData) => {
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

  const deletePlayers = () => {
    pickedPlayers.forEach((player) =>
      dispatch(playersActions.deleteFromMyPlayers(player.id))
    );
  };

  return (
    <Layout>
      <div className="h-full w-screen mt-1 relative flex grow flex-wrap gap-0.5 justify-center bg-board-opacity overflow-hidden">
        {playersArray.length === 0 && (
          <p className="text-white text-3xl py-3">Brak zawodników</p>
        )}
        {playersArray.length !== 0 && (
          <div className="flex flex-col items-center">
            <Button sx={{ width: "20%" }} onClick={deletePlayers}>
              Usuń
            </Button>
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-row flex-wrap justify-left w-5/6">
                {playersArray.map((player) => (
                  <Card
                    key={player.id}
                    playerData={player}
                    sendPlayer={pickPlayer}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MyPlayers;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { playersActions } from "../store/players-slice";
import { fetchPlayersData, deletePlayer } from "../store/players-actions";

import { Button } from "@mui/material";
import Layout from "../components/UI/Layout";
import Card from "../components/Card";

const MyPlayers = () => {
  const dispatch = useDispatch();
  const playersArray = useSelector((state) => state.players.myPlayers);
  const uId = useSelector((state) => state.ui.uId);

  useEffect(() => {
    dispatch(fetchPlayersData());
  }, [dispatch, uId]);

  const [pickedPlayers, setPickedPlayers] = useState([]);

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
    pickedPlayers.forEach((player) => {
      dispatch(playersActions.deleteFromMyPlayers(player.id));
      dispatch(deletePlayer(player.id));
    });
  };

  return (
    <Layout>
      <div className="h-full w-screen mt-1 relative flex grow flex-wrap gap-0.5 justify-center bg-board-opacity overflow-hidden">
        {(!playersArray || (playersArray && playersArray.length === 0)) && (
          <p className="text-white text-3xl py-3">Brak zawodników</p>
        )}
        {playersArray && playersArray.length !== 0 && (
          <div className="flex flex-col items-center mt-4">
            <Button
              size="medium"
              variant="contained"
              sx={{ width: "40%" }}
              onClick={deletePlayers}
            >
              Usuń
            </Button>
            <div className="flex flex-wrap justify-center mt-8">
              {/* Below deleted w-5/6 because single card was wrapping in */}
              <div className="flex flex-col flex-wrap gap-3">
                {/* <div className="flex bg-red-500 flex-row flex-wrap justify-left gap-3"> */}
                {playersArray &&
                  playersArray.map((player) => (
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
